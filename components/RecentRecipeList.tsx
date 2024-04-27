import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { FC } from 'react'
import { recentRecipes } from '@/data'
import CustomText from './CustomText'
import { colors } from '@/theme'

interface RecentRecipeListProps {}

const RecentRecipeList: FC<RecentRecipeListProps> = ({}) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={recentRecipes}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={{
						width: 124,
						marginRight: 16,
					}}
				>
					<Image
						source={item.image}
						style={{
							width: '100%',
							height: 124,
							borderRadius: 12,
						}}
					/>
					<CustomText
						bold
						size={14}
						lineHeight={19.6}
						customProps={{
							marginTop: 8,
						}}
					>
						{item.title}
					</CustomText>
					<CustomText
						size={10}
						color={colors.palette.neutral40}
						customProps={{
							marginTop: 8,
						}}
					>
						By {item.author}
					</CustomText>
				</TouchableOpacity>
			)}
			keyExtractor={item => item.title}
			contentContainerStyle={{
				paddingLeft: 20,
			}}
		/>
	)
}

export default RecentRecipeList
