import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'

import { colors } from '@/theme'
import { ingredientLists, trendingRecipes } from '@/data'
import CustomText from '@/components/CustomText'
import ScrollViewWrapper from '@/components/ScrollViewWrapper'
import VideoPlayer from '@/components/VideoPlayer'

const RecipeDetailsPage = () => {
	const params = useLocalSearchParams()
	const [recipe] = trendingRecipes.filter(item => item.id == +params.id)

	return (
		<ScrollViewWrapper
			contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
		>
			<CustomText
				bold
				size={24}
				lineHeight={28.8}
				customProps={{ width: '90%' }}
			>
				{recipe.title}
			</CustomText>

			<View
				style={{
					gap: 16,
				}}
			>
				<VideoPlayer recipe={recipe} />

				{/*item rating */}
				<View style={styles.itemRating}>
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
				<View style={styles.authorProfileContainer}>
					<View style={styles.authorProfile}>
						<Image source={recipe.authorImage} style={styles.authorImage} />
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

					<TouchableOpacity style={styles.button}>
						<CustomText bold size={14} lineHeight={19.6} color={colors.white}>
							Follow
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>

			{/* ingredients */}
			<View style={styles.ingredientsWrapper}>
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
			<View style={styles.ingredientDetailsWrapper}>
				{ingredientLists.map(item => (
					<View key={item.id} style={styles.ingredientListsWrapper}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								gap: 16,
							}}
						>
							<View style={styles.ingredientIcon}>
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
		</ScrollViewWrapper>
	)
}

export default RecipeDetailsPage

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	videoContainer: {
		marginTop: 24,
		width: '100%',
		height: 200,
		borderRadius: 12,
		overflow: 'hidden',
	},
	video: {
		width: '100%',
		height: '100%',
	},
	videoOverlay: {
		alignItems: 'center',
		justifyContent: 'center',
		...StyleSheet.absoluteFillObject,
	},
	videoThumbnail: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
	playButton: {
		backgroundColor: colors.palette.overlay60,
		position: 'absolute',
		height: 48,
		width: 48,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	itemRating: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	authorProfileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	authorProfile: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	authorImage: {
		height: 40,
		width: 40,
		borderRadius: 100,
	},
	button: {
		backgroundColor: colors.primary,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 10,
	},
	ingredientsWrapper: {
		marginTop: 26,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ingredientDetailsWrapper: {
		marginTop: 16,
		gap: 12,
	},
	ingredientListsWrapper: {
		backgroundColor: colors.palette.neutral10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	ingredientIcon: {
		backgroundColor: colors.background,
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 10,
	},
})
