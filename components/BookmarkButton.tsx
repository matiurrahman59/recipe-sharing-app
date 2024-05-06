import { TouchableOpacity, ViewStyle } from 'react-native'
import { FC } from 'react'
import { Feather } from '@expo/vector-icons'

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
	const isFavourite = favorites.find(item => item.id === recipe.id)

	return (
		<TouchableOpacity
			style={[
				$buttonContainer,
				{
					backgroundColor: isFavourite ? colors.primary : colors.white,
				},
			]}
			onPress={() =>
				!isFavourite ? addToFavorites(recipe) : removeFromFavorites(recipe.id)
			}
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
