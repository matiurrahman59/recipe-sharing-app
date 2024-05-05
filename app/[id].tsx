import {
	View,
	ScrollView,
	Pressable,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import { useRef, useState } from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'

import { colors } from '@/theme'
import CustomText from '@/components/CustomText'
import { ingredientLists, trendingRecipes } from '@/data'

const RecipeDetailsPage = () => {
	const params = useLocalSearchParams()
	const [recipe] = trendingRecipes.filter(item => item.id == +params.id)

	const [showVideo, setShowVideo] = useState<boolean>(false)
	const videoRef = useRef<Video>(null)
	const [status, setStatus] = useState<AVPlaybackStatus>()

	const isPlaying = status?.isLoaded && status.isPlaying

	const playRecipeVideo = () => {
		if (!videoRef.current) {
			return
		}

		videoRef.current.playAsync()

		// if (isPlaying) {
		// 	videoRef.current.pauseAsync()
		// } else {
		// 	videoRef.current.playAsync()
		// }
	}

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: colors.palette.white,
			}}
		>
			<View
				style={{
					marginHorizontal: 20,
					marginBottom: 20,
				}}
			>
				{/* recipe title */}
				<CustomText
					bold
					size={24}
					lineHeight={28.8}
					customProps={{ width: '90%' }}
				>
					{recipe.title}
				</CustomText>

				{/* recipe video container */}
				<View
					style={{
						gap: 16,
					}}
				>
					<View
						style={{
							marginTop: 24,
							width: '100%',
							height: 200,
							borderRadius: 12,
							overflow: 'hidden',
						}}
					>
						<Video
							ref={videoRef}
							source={{
								uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
							}}
							style={{
								width: '100%',
								height: '100%',
							}}
							useNativeControls
							resizeMode={ResizeMode.CONTAIN}
							onPlaybackStatusUpdate={setStatus}
						/>

						{!isPlaying && (
							<Pressable
								onPress={playRecipeVideo}
								style={[
									StyleSheet.absoluteFillObject,
									{
										alignItems: 'center',
										justifyContent: 'center',
									},
								]}
							>
								<Image
									source={recipe.image}
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
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: 100,
									}}
								>
									<FontAwesome
										name='play'
										size={20}
										color={colors.palette.white}
									/>
								</View>
							</Pressable>
						)}
					</View>

					{/*item rating */}
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View>
							<FontAwesome
								name='star'
								size={16}
								color={colors.palette.rating100}
							/>
						</View>
						<View style={{ marginLeft: 4 }}>
							<CustomText bold size={14} lineHeight={19.6}>
								{recipe.rating}
							</CustomText>
						</View>
						<View style={{ marginLeft: 8 }}>
							<CustomText
								size={14}
								lineHeight={19.6}
								color={colors.palette.neutral40}
							>
								(300 Reviews)
							</CustomText>
						</View>
					</View>

					{/* author profile */}
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								gap: 10,
							}}
						>
							<Image
								source={recipe.authorImage}
								style={{
									height: 40,
									width: 40,
									borderRadius: 100,
								}}
							/>
							<View>
								<CustomText
									bold
									size={16}
									lineHeight={22.4}
									color={colors.palette.neutral100}
								>
									{recipe.author}
								</CustomText>
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<MaterialCommunityIcons
										name='map-marker'
										size={16}
										color={colors.palette.primary50}
									/>
									<CustomText
										size={14}
										lineHeight={19.6}
										color={colors.palette.neutral40}
										customProps={{ marginLeft: 4 }}
									>
										Bali, Indonesia
									</CustomText>
								</View>
							</View>
						</View>

						<View>
							<TouchableOpacity
								style={{
									backgroundColor: colors.palette.primary50,
									paddingHorizontal: 16,
									paddingVertical: 8,
									borderRadius: 10,
								}}
							>
								<CustomText
									bold
									size={14}
									lineHeight={19.6}
									color={colors.palette.white}
								>
									Follow
								</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				{/* ingredients */}
				<View
					style={{
						marginTop: 26,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<CustomText bold size={20}>
						Ingredients
					</CustomText>
					<CustomText
						size={14}
						lineHeight={19.6}
						color={colors.palette.neutral40}
					>
						5 items
					</CustomText>
				</View>

				{/* ingredient details */}
				<View
					style={{
						marginTop: 16,
						gap: 12,
					}}
				>
					{ingredientLists.map(item => (
						<View
							key={item.id}
							style={{
								backgroundColor: colors.palette.neutral10,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								borderRadius: 12,
								paddingHorizontal: 16,
								paddingVertical: 12,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									gap: 16,
								}}
							>
								<View
									style={{
										backgroundColor: colors.palette.white,
										paddingHorizontal: 12,
										paddingVertical: 10,
										borderRadius: 10,
									}}
								>
									<CustomText size={30}>{item.icon}</CustomText>
								</View>
								<View>
									<CustomText bold size={16} lineHeight={22.4}>
										{item.name}
									</CustomText>
								</View>
							</View>
							<CustomText
								size={14}
								lineHeight={19.6}
								color={colors.palette.neutral40}
							>
								{item.quantity}
							</CustomText>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default RecipeDetailsPage
