import { View, Text, TouchableOpacity, Image, ViewStyle } from 'react-native'
import { FC } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { colors } from '@/theme'
import CustomText from './CustomText'
import BookmarkButton from './BookmarkButton'

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

	onPress?: () => void

	customProps?: ViewStyle
}

const RecipeCard: FC<RecipeCardProps> = ({ item, onPress, customProps }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[customProps]}>
			<View
				style={{
					position: 'relative',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={item.image}
					style={{
						width: '100%',
						height: 180,
						borderRadius: 12,
					}}
				/>

				{/* recipe rating */}
				<View
					style={{
						paddingHorizontal: 8,
						paddingVertical: 4,
						borderRadius: 8,
						position: 'absolute',
						top: 8,
						left: 8,
						flexDirection: 'row',
						alignItems: 'center',
						backgroundColor: 'rgba(48, 48, 48, 0.30)',
					}}
				>
					<FontAwesome name='star' size={12} color={colors.palette.white} />
					<CustomText
						bold
						size={12}
						lineHeight={19.6}
						color={colors.palette.white}
						customProps={{ marginLeft: 4 }}
					>
						{item.rating}
					</CustomText>
				</View>

				{/* bookmark icon */}
				<BookmarkButton />

				{/* video duration */}
				<View
					style={{
						position: 'absolute',
						bottom: 8,
						right: 8,
						borderRadius: 8,
						paddingHorizontal: 8,
						backgroundColor: 'rgba(48, 48, 48, 0.30)',
					}}
				>
					<CustomText size={12} color={colors.palette.white}>
						{item.duration}
					</CustomText>
				</View>

				{/* video play button */}
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
					<FontAwesome name='play' size={20} color={colors.palette.white} />
				</View>
			</View>

			{/* recipe title */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: 12,
				}}
			>
				<CustomText bold size={16} lineHeight={22.4}>
					{item.title}
				</CustomText>
				<Feather
					name='more-horizontal'
					size={20}
					color={colors.palette.neutral90}
				/>
			</View>

			{/* recipe creator */}
			<View
				style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
			>
				<Image
					source={item.authorImage}
					style={{ marginRight: 8, height: 32, width: 32 }}
				/>
				<CustomText size={10} color={colors.palette.neutral40}>
					{item.author}
				</CustomText>
			</View>
		</TouchableOpacity>
	)
}

export default RecipeCard
