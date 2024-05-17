import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { ResizeMode, Video } from 'expo-av'
import * as ImagePicker from 'expo-image-picker'
import * as VideoThumbnails from 'expo-video-thumbnails'

import ScrollViewWrapper from '@/components/ScrollViewWrapper'
import { colors } from '@/theme'
import CustomText from '@/components/CustomText'
import Input from '@/components/Input'
import AddIngredients from '@/components/AddIngredients'
import { Stack } from 'expo-router'

interface Ingredient {
  id: number
  name: string
  quantity: string
}

const Page = () => {
  const [thumbnailImage, setThumbnailImage] = useState<string>()
  const [showVideo, setShowVideo] = useState<boolean>()
  const [videoUrl, setVideoUrl] = useState<string>()
  const videoRef = useRef<Video>(null)
  const [title, setTitle] = useState('')
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState<boolean>()

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: '', quantity: '' },
  ])

  const decreaseCount = () => {
    if (count < 2) return
    setCount((count) => count - 1)
  }

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    })

    if (!result.canceled) {
      const selectedVideoUrl = result.assets[0].uri
      await generateThumbnail(selectedVideoUrl)
      setVideoUrl(selectedVideoUrl)
    }
  }

  const generateThumbnail = async (selectedVideoUrl: string) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(selectedVideoUrl)
      setThumbnailImage(uri)
    } catch (e) {
      console.log('---generateThumb---', e)
    }
  }

  const playRecipeVideo = () => {
    if (videoRef.current) {
      setShowVideo(true)
      videoRef.current.setPositionAsync(0)
      videoRef.current.playAsync()
    }
  }

  const saveRecipeHandler = () => {
    setLoading(true)

    setTimeout(() => {
      const recipeDetails = {
        title,
        servePersonQuantity: count,
        cookTime: '45 min',
        videoUrl,
        ingredients,
      }
      setLoading(false)
      ToastAndroid.show('Ingredients added successfully 😊', ToastAndroid.LONG)
      setVideoUrl(undefined)
      setTitle('')
      setCount(1)
      setIngredients([{ id: 1, name: '', quantity: '' }])
    }, 2000)
  }

  return (
    <ScrollViewWrapper>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Feather
              name='more-horizontal'
              size={24}
              color={colors.palette.neutral100}
              style={{
                marginRight: 20,
              }}
            />
          ),
        }}
      />

      <View style={{ flex: 1, marginHorizontal: 20 }}>
        {/* video pick and play  */}
        <View
          style={{
            position: 'relative',
            marginTop: 24,
            height: 200,
          }}
        >
          {/* edit icon */}
          <TouchableOpacity style={styles.editIcon} onPress={pickVideo}>
            <Feather name='edit-3' size={20} color={colors.primary} />
          </TouchableOpacity>

          {/* empty video text */}
          {!videoUrl && (
            <View style={styles.emptyText}>
              <CustomText
                bold
                size={14}
                lineHeight={19.6}
                color={colors.palette.secondary90}
              >
                Select videos from your gallery!
              </CustomText>
            </View>
          )}

          {/* thumbnail image */}
          {videoUrl && (
            <Pressable
              onPress={playRecipeVideo}
              style={[
                styles.imageThumbnailWrapper,
                { zIndex: showVideo ? -10 : 10 },
              ]}
            >
              <Image
                source={{ uri: thumbnailImage }}
                resizeMode='contain'
                style={{ width: '100%', height: '100%', borderRadius: 12 }}
              />
              <View style={styles.playButton}>
                <FontAwesome name='play' size={20} color={colors.white} />
              </View>
            </Pressable>
          )}

          {/* video player */}
          {videoUrl && (
            <View style={styles.videoWrapper}>
              <Video
                ref={videoRef}
                source={{
                  uri: videoUrl || '',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          )}
        </View>

        {/* recipe title */}
        <View style={{ marginTop: 20 }}>
          <Input placeholder='Recipe title' value={title} onChange={setTitle} />
        </View>

        {/*serve person quantity */}
        <View style={styles.servePersonContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={styles.iconWrapper}>
              <Feather name='users' size={20} color={colors.primary} />
            </View>
            <CustomText bold size={16} lineHeight={22.4}>
              Serves
            </CustomText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 14,
            }}
          >
            <TouchableOpacity onPress={decreaseCount}>
              <Feather name='minus-circle' size={24} />
            </TouchableOpacity>
            <CustomText
              bold
              size={14}
              lineHeight={19.6}
              color={colors.palette.neutral40}
            >
              {count.toLocaleString('en-us', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </CustomText>

            <TouchableOpacity onPress={() => setCount((count) => count + 1)}>
              <Feather name='plus-circle' size={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* cook time */}
        <View style={styles.cookingTimeContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={styles.iconWrapper}>
              <Feather name='clock' size={20} color={colors.primary} />
            </View>
            <CustomText bold size={16} line={22.4}>
              Cook time
            </CustomText>
          </View>

          <CustomText color={colors.palette.neutral40}>45 min</CustomText>
        </View>

        <AddIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </View>

      {/* save recipe button */}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={saveRecipeHandler}
          disabled={loading}
          style={[styles.submitButton, { opacity: loading ? 0.9 : 1 }]}
        >
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <CustomText bold size={16} line={22.4} color={colors.white}>
              Save my recipes
            </CustomText>
          )}
        </Pressable>
      </View>
    </ScrollViewWrapper>
  )
}

export default Page

const styles = StyleSheet.create({
  editIcon: {
    backgroundColor: colors.background,
    padding: 6,
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 50,
    borderRadius: 100,
  },
  emptyText: {
    backgroundColor: colors.palette.neutral10,
    height: '100%',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageThumbnailWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: colors.palette.overlay60,
    position: 'absolute',
    height: 48,
    width: 48,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoWrapper: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    position: 'absolute',
    overflow: 'hidden',
  },
  servePersonContainer: {
    backgroundColor: colors.palette.neutral10,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cookingTimeContainer: {
    backgroundColor: colors.palette.neutral10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  iconWrapper: {
    backgroundColor: colors.white,
    padding: 8,
    marginRight: 16,
    borderRadius: 100,
  },
  buttonContainer: {
    elevation: 8,
    marginTop: 24,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: colors.primary,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})
