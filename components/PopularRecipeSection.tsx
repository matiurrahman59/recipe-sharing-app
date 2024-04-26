import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { FC, useState } from 'react'
import SectionHeader from './SectionHeader'
import { categoryList } from '@/data'
import { colors } from '@/theme'
import CustomText from './CustomText'

interface PopularRecipeSectionProps {}

const PopularRecipeSection: FC<PopularRecipeSectionProps> = ({}) => {
	const [activeCategory, setActiveCategory] = useState(2)

	return (
		<View style={{ paddingTop: 24 }}>
			<SectionHeader label='Popular category' />
			<View
				style={{
					paddingTop: 16,
					gap: 12,
				}}
			>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						paddingLeft: 20,
					}}
					data={categoryList}
					renderItem={({ item }) => {
						const isActive = item.id === activeCategory
						return (
							<View>
								<TouchableOpacity
									onPress={() => setActiveCategory(item.id)}
									style={{
										backgroundColor: isActive
											? colors.palette.primary50
											: 'transparent',
										paddingHorizontal: 12,
										paddingVertical: 8,
										marginRight: 8,
										borderRadius: 10,
									}}
								>
									<CustomText
										bold
										size={12}
										color={
											isActive ? colors.palette.white : colors.palette.primary30
										}
									>
										{item.title}
									</CustomText>
								</TouchableOpacity>
							</View>
						)
					}}
				/>
			</View>

			{/* <PopularCategoryList data={popularCategory} /> */}
		</View>
	)
}

export default PopularRecipeSection
