import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import { trendingRecipes } from '@/data'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme'
import CustomText from './CustomText'
import RecipeRatings from './RecipeRatings'

interface UserRecipeSliderItemProps {}

const UserRecipeSliderItem: FC<UserRecipeSliderItemProps> = ({}) => {
	return (
		<View>
			<FlatList
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
				data={trendingRecipes}
				renderItem={({ item }) => (
					<View
						key={item.id}
						style={{
							position: 'relative',
							marginBottom: 16,
							height: 200,
							borderRadius: 12,
							overflow: 'hidden',
						}}
					>
						<View>
							<Image
								source={item.image}
								// resizeMode="contain"
								style={{
									width: '100%',
									height: '100%',
									borderRadius: 12,
								}}
							/>

							<LinearGradient
								colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
								style={{
									position: 'absolute',
									bottom: 0,
									height: '50%',
									width: '100%',
									// zIndex: 40,
								}}
							/>
						</View>

						<RecipeRatings rating={item.rating} />
						<TouchableOpacity
							style={{
								position: 'absolute',
								top: 8,
								right: 8,
								flexDirection: 'row',
								padding: 6,
								borderRadius: 100,
								backgroundColor: colors.palette.white,
							}}
						>
							<Feather
								name='more-horizontal'
								size={20}
								color={colors.palette.primary50}
							/>
						</TouchableOpacity>

						<View
							style={{
								gap: 4,
								position: 'absolute',
								left: 16,
								bottom: 16,
								width: '60%',
							}}
						>
							<CustomText
								bold
								size={16}
								lineHeight={22.4}
								color={colors.palette.white}
							>
								{item.title}
							</CustomText>
							<CustomText size={12} color={colors.palette.white}>
								12 Ingredients | {item.duration}
							</CustomText>
						</View>
					</View>
				)}
			/>
		</View>
	)
}

export default UserRecipeSliderItem