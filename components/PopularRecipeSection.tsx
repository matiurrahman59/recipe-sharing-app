import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { FC, useState } from 'react'

import SectionHeader from './SectionHeader'
import { categoryList } from '@/data'
import { colors } from '@/theme'
import CustomText from './CustomText'
import PopularRecipeList from './PopularRecipeList'

interface PopularRecipeSectionProps {}

const PopularRecipeSection: FC<PopularRecipeSectionProps> = ({}) => {
	const [activeCategory, setActiveCategory] = useState(2)

	return (
		<>
			<SectionHeader label='Popular category' />
			<View style={styles.container}>
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
							<TouchableOpacity
								onPress={() => setActiveCategory(item.id)}
								style={[
									styles.tabbedButton,
									{
										backgroundColor: isActive ? colors.primary : 'transparent',
									},
								]}
							>
								<CustomText
									bold
									size={12}
									color={isActive ? colors.white : colors.palette.primary30}
								>
									{item.title}
								</CustomText>
							</TouchableOpacity>
						)
					}}
				/>
			</View>

			<PopularRecipeList />
		</>
	)
}

export default PopularRecipeSection

const styles = StyleSheet.create({
	container: {
		paddingTop: 16,
		gap: 12,
	},
	tabbedButton: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginRight: 8,
		borderRadius: 10,
	},
})
