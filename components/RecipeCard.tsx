import {
	View,
	TouchableOpacity,
	Image,
	ViewStyle,
	StyleSheet,
} from 'react-native'
import { FC } from 'react'
import { Link } from 'expo-router'
import { Feather, FontAwesome } from '@expo/vector-icons'

import { colors } from '@/theme'
import CustomText from './CustomText'
import BookmarkButton from './BookmarkButton'
import RecipeRatings from './RecipeRatings'

type RecipeCardProps = {
	item: {
		id: number
		title: string
		rating: number
		duration: string
		author: string
		image: any
		authorImage: any
	}
	style?: ViewStyle
}

const RecipeCard: FC<RecipeCardProps> = ({ item, style }) => {
	return (
		<Link
			href={{
				pathname: '/[id]',
				params: { id: item.id },
			}}
			asChild
		>
			<TouchableOpacity style={style}>
				<View style={styles.container}>
					<Image source={item.image} style={styles.recipeImage} />

					<RecipeRatings rating={item.rating} />
					<BookmarkButton recipe={item} />

					{/* video duration */}
					<View style={styles.videoDuration}>
						<CustomText size={12} color={colors.white}>
							{item.duration}
						</CustomText>
					</View>

					{/* video play button */}
					<View style={styles.videoPlayButton}>
						<FontAwesome name='play' size={20} color={colors.white} />
					</View>
				</View>

				{/* title */}
				<View style={styles.titleContainer}>
					<CustomText bold size={16} lineHeight={22.4}>
						{item.title}
					</CustomText>
					<Feather
						name='more-horizontal'
						size={20}
						color={colors.palette.neutral90}
					/>
				</View>

				{/* creator */}
				<View style={styles.creatorContainer}>
					<Image source={item.authorImage} style={styles.creatorImage} />
					<CustomText size={10} color={colors.palette.neutral40}>
						{item.author}
					</CustomText>
				</View>
			</TouchableOpacity>
		</Link>
	)
}

export default RecipeCard

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
	},
	recipeImage: {
		width: '100%',
		height: 180,
		borderRadius: 12,
	},
	videoDuration: {
		position: 'absolute',
		bottom: 8,
		right: 8,
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: colors.palette.overlay60,
	},
	videoPlayButton: {
		backgroundColor: colors.palette.overlay60,
		position: 'absolute',
		height: 48,
		width: 48,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 12,
	},
	creatorContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 8,
	},
	creatorImage: {
		marginRight: 8,
		height: 32,
		width: 32,
	},
})
