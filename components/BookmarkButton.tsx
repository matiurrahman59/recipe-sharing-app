import { View, Text, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import { colors } from '@/theme'
import { Feather } from '@expo/vector-icons'

interface BookmarkButtonProps {}

const BookmarkButton: FC<BookmarkButtonProps> = ({}) => {
	// const { favorites, addToFavorites, removeFromFavorites } =
	// 	useContext(FavoritesContext)

	// const isFavourite = favorites.find(item => item.id === recipe.id)

	return (
		<TouchableOpacity
			style={{
				position: 'absolute',
				right: 8,
				top: 8,
				padding: 6,
				borderRadius: 100,
				backgroundColor: colors.palette.primary50,
			}}
		>
			<Feather name='bookmark' size={22} color={colors.palette.white} />
		</TouchableOpacity>
	)
}

export default BookmarkButton
