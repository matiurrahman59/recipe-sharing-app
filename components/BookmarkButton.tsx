import { ToastAndroid, TouchableOpacity, ViewStyle } from 'react-native'
import { FC } from 'react'
import { Feather } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

import { colors } from '@/theme'
import { useFavoriteContext } from '@/store'

interface BookmarkButtonProps {
  recipe: {
    id: number
    title: string
    rating: number
    duration: string
    author: string
    image: any
    authorImage: any
  }
}

const BookmarkButton: FC<BookmarkButtonProps> = ({ recipe }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteContext()
  const isFavourite = favorites.find((item) => item.id === recipe.id)

  const onPressHandler = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    if (isFavourite) {
      removeFromFavorites(recipe.id)
      ToastAndroid.show('Removed from favorites !', ToastAndroid.SHORT)
    } else {
      addToFavorites(recipe)
      ToastAndroid.show('Added to favorites', ToastAndroid.SHORT)
    }
  }

  return (
    <TouchableOpacity
      style={[
        $buttonContainer,
        {
          backgroundColor: isFavourite ? colors.primary : colors.white,
        },
      ]}
      onPress={onPressHandler}
    >
      <Feather
        name='bookmark'
        size={22}
        color={isFavourite ? colors.white : colors.palette.neutral90}
      />
    </TouchableOpacity>
  )
}

export default BookmarkButton

const $buttonContainer: ViewStyle = {
  position: 'absolute',
  right: 8,
  top: 8,
  padding: 6,
  borderRadius: 100,
}
