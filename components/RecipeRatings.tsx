import { View, Text } from 'react-native'
import { FC } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '@/theme'
import CustomText from './CustomText'

interface RecipeRatingsProps {
	rating: number
}

const RecipeRatings: FC<RecipeRatingsProps> = ({ rating }) => {
	return (
		<View
			style={{
				backgroundColor: 'rgba(48, 48, 48, 0.30)',
				position: 'absolute',
				top: 8,
				left: 8,
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: 8,
				paddingVertical: 4,
				borderRadius: 8,
			}}
		>
			<FontAwesome name='star' size={12} color={colors.palette.white} />
			<CustomText
				bold
				size={12}
				customProps={{
					marginLeft: 4,
				}}
				color={colors.palette.white}
			>
				{rating}
			</CustomText>
		</View>
	)
}

export default RecipeRatings
