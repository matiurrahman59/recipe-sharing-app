import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { FC } from 'react'
import { colors } from '@/theme'
import { popularCategory } from '@/data'
import CustomText from './CustomText'
import { Feather } from '@expo/vector-icons'

interface PopularRecipeListProps {}

const PopularRecipeList: FC<PopularRecipeListProps> = ({}) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={popularCategory}
			renderItem={({ item }) => (
				<View>
					<TouchableOpacity
						style={{
							backgroundColor: colors.palette.neutral10,
							width: 150,
							marginTop: 70,
							marginRight: 16,
							paddingTop: 40,
							paddingBottom: 12,
							borderRadius: 12,
							position: 'relative',
						}}
					>
						<View
							style={{
								position: 'absolute',
								top: '-50%',
								left: 0,
								right: 0,
								alignItems: 'center',
							}}
						>
							<Image
								source={item.image}
								style={{ height: 110, width: 110, borderRadius: 100 }}
							/>
						</View>
						<CustomText bold size={14} lineHeight={19.6}>
							{item.title}
						</CustomText>
						<View
							style={{
								marginTop: 18,
								paddingHorizontal: 12,
							}}
						>
							<CustomText size={16} color={colors.palette.neutral30}>
								{item.duration}
							</CustomText>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<CustomText bold size={12}>
									10 Mins
								</CustomText>

								<TouchableOpacity
									style={{
										backgroundColor: colors.palette.white,
										height: 28,
										width: 28,
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: 100,
									}}
								>
									<Feather
										name='bookmark'
										size={16}
										color={colors.palette.neutral90}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			)}
			keyExtractor={item => item.title}
			contentContainerStyle={{
				paddingLeft: 20,
			}}
		/>
	)
}

export default PopularRecipeList
