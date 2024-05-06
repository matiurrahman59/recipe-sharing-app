import {
	FlatList,
	TouchableOpacity,
	Image,
	ViewStyle,
	ImageStyle,
} from 'react-native'

import { recentRecipes } from '@/data'
import CustomText from './CustomText'
import { colors } from '@/theme'

const RecentRecipeList = () => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={recentRecipes}
			renderItem={({ item }) => (
				<TouchableOpacity style={$container}>
					<Image source={item.image} style={$image} />
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

const $container: ViewStyle = {
	width: 124,
	marginRight: 16,
}
const $image: ImageStyle = {
	width: '100%',
	height: 124,
	borderRadius: 12,
}
