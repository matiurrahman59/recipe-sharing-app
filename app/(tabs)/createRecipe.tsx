import {
	ActivityIndicator,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import ScrollViewWrapper from '@/components/ScrollViewWrapper'
import SectionHeader from '@/components/SectionHeader'
import { colors, typography } from '@/theme'
import { Feather, FontAwesome } from '@expo/vector-icons'
import CustomText from '@/components/CustomText'
import { ResizeMode, Video } from 'expo-av'
import Input from '@/components/Input'
import { Stack } from 'expo-router'
import ErrorMessage from '@/components/ErrorMessage'
import * as ImagePicker from 'expo-image-picker'
import * as VideoThumbnails from 'expo-video-thumbnails'

const Page = () => {
	const [thumbnailImage, setThumbnailImage] = useState(null)
	const [showVideo, setShowVideo] = useState(null)
	const [videoUrl, setVideoUrl] = useState()
	const videoRef = useRef(null)
	const [title, setTitle] = useState('')
	const [count, setCount] = useState(1)
	const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }])
	const [loading, setLoading] = useState<boolean>()
	const [isFocused, setIsFocused] = useState(false)

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
			// console.log(recipeDetails)
		}, 2000)
	}

	const addNewIngredient = () => {
		setIngredients([...ingredients, { name: '', quantity: '' }])
	}

	const updateIngredient = (index, fieldName, value) => {
		const updatedIngredients = [...ingredients]
		updatedIngredients[index][fieldName] = value
		setIngredients(updatedIngredients)
	}

	const removeIngredient = index => {
		const updatedIngredients = [...ingredients]
		updatedIngredients.splice(index, 1)
		setIngredients(updatedIngredients)
	}

	const decreaseCount = () => {
		if (count < 2) return
		setCount(count => count - 1)
	}

	const generateThumbnail = async selectedVideoUrl => {
		try {
			const { uri } = await VideoThumbnails.getThumbnailAsync(selectedVideoUrl)
			setThumbnailImage(uri)
		} catch (e) {
			console.log(e)
		}
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

					<TouchableOpacity
						style={{
							backgroundColor: colors.background,
							padding: 6,
							position: 'absolute',
							right: 8,
							top: 8,
							zIndex: 50,
							borderRadius: 100,
						}}
						onPress={pickVideo}
					>
						<Feather name='edit-3' size={20} color={colors.primary} />
					</TouchableOpacity>

					{/* empty video text */}
					{!videoUrl && (
						<View
							style={{
								backgroundColor: colors.palette.neutral10,
								height: '100%',
								width: '100%',
								borderRadius: 12,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CustomText
								bold
								size={14}
								lineHeight={19.6}
								color={colors.palette.secondary90}
							>
								You didn't select any videos yet!
							</CustomText>
						</View>
					)}

					{/* thumbnail image */}
					{videoUrl && (
						<Pressable
							// onPress={playRecipeVideo}

							style={{
								position: 'absolute',
								height: '100%',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								zIndex: showVideo ? -10 : 10,
							}}
						>
							<Image
								source={{ uri: thumbnailImage }}
								resizeMode='contain'
								style={{
									width: '100%',
									height: '100%',
									borderRadius: 12,
								}}
							/>
							<View
								style={{
									backgroundColor: 'rgba(48, 48, 48, 0.30)',
									position: 'absolute',
									height: 48,
									width: 48,
									borderRadius: 100,
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<FontAwesome name='play' size={20} color={colors.white} />
							</View>
						</Pressable>
					)}

					{/* video player */}
					<View
						style={{
							height: '100%',
							width: '100%',
							borderRadius: 12,
							position: 'absolute',
							overflow: 'hidden',
						}}
					>
						<Video
							ref={videoRef}
							source={{
								uri: videoUrl,
							}}
							useNativeControls
							resizeMode={ResizeMode.CONTAIN}
							// onPlaybackStatusUpdate={playbackStatus => {
							// 	playbackStatus.didJustFinish && setShowVideo(false)
							// }}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</View>
				</View>

				{/* recipe title */}
				<View style={{ marginTop: 20 }}>
					<Input placeholder='Recipe title' value={title} onChange={setTitle} />
				</View>

				{/*serve person quantity */}
				<View
					style={{
						backgroundColor: colors.palette.neutral10,
						borderRadius: 12,
						paddingHorizontal: 16,
						paddingVertical: 12,
						marginTop: 16,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								backgroundColor: colors.white,
								padding: 8,
								marginRight: 16,
								borderRadius: 100,
							}}
						>
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

						<TouchableOpacity onPress={() => setCount(count => count + 1)}>
							<Feather name='plus-circle' size={24} />
						</TouchableOpacity>
					</View>
				</View>

				{/* cook time */}
				<View
					style={{
						backgroundColor: colors.palette.neutral10,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingHorizontal: 16,
						paddingVertical: 12,
						borderRadius: 12,
						marginTop: 16,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								backgroundColor: colors.white,
								padding: 8,
								marginRight: 16,
								borderRadius: 100,
							}}
						>
							<Feather name='clock' size={20} color={colors.primary} />
						</View>
						<CustomText bold size={16} line={22.4}>
							Cook time
						</CustomText>
					</View>

					<CustomText color={colors.palette.neutral40}>45 min</CustomText>
				</View>

				{/* ingredient */}
				<View style={{ marginTop: 24 }}>
					<CustomText bold size={20}>
						Ingredients
					</CustomText>

					{/* ingredient item */}
					<View
						style={{
							gap: 16,
						}}
					>
						{ingredients.map((ingredient, index) => (
							<View
								key={index}
								style={{
									marginTop: 16,
									flexDirection: 'row',
									alignItems: 'center',
									gap: 12,
								}}
							>
								<View
									style={{
										width: '50%',
									}}
								>
									<Input
										placeholder='Item name'
										value={ingredient.name}
										onChange={value => updateIngredient(index, 'name', value)}
									/>
								</View>
								<View style={{ flexGrow: 1 }}>
									<Input
										placeholder='Quantity'
										value={ingredient.quantity}
										onChange={value =>
											updateIngredient(index, 'quantity', value)
										}
									/>
								</View>
								<View>
									<TouchableOpacity onPress={removeIngredient}>
										<Feather name='minus-circle' size={24} />
									</TouchableOpacity>
								</View>
							</View>
						))}
					</View>

					{/* add new ingredient */}
					<TouchableOpacity
						onPress={addNewIngredient}
						style={{
							marginTop: 20,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View style={{ marginRight: 4 }}>
							<Feather name='plus' size={24} color={colors.palette.neutral90} />
						</View>

						<CustomText bold size={16} line={22.4}>
							Add new Ingredients
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>

			{/* save recipe button */}
			<View
				style={{
					marginBottom: 80,
					elevation: 8,
					marginTop: 24,
					paddingHorizontal: 20,
				}}
			>
				<Pressable
					onPress={saveRecipeHandler}
					disabled={loading}
					style={{
						backgroundColor: loading
							? colors.palette.primary30
							: colors.primary,
						paddingVertical: 16,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 10,
					}}
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

const styles = StyleSheet.create({})
