import CustomText from '@/components/CustomText'
import PopularRecipeList from '@/components/PopularRecipeList'
import RecipeCard from '@/components/RecipeCard'
import SearchBar from '@/components/SearchBar'
import SectionHeader from '@/components/SectionHeader'
import TrendingRecipeSection from '@/components/TrendingRecipeSection'
import { categoryList, trendingRecipes } from '@/data'
import { colors } from '@/theme'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Page() {
	const insets = useSafeAreaInsets()
	const [query, setQuery] = useState('')
	const [activeCategory, setActiveCategory] = useState(2)
	return (
		<SafeAreaView>
			<StatusBar backgroundColor={colors.palette.white} />
			<ScrollView
				contentContainerStyle={{
					paddingBottom: 30,
					backgroundColor: colors.palette.white,
				}}
			>
				<View>
					<CustomText
						bold
						size={24}
						lineHeight={28.8}
						color={colors.palette.neutral90}
						customProps={{
							paddingTop: 20,
							paddingLeft: 22,
							maxWidth: 244,
						}}
					>
						Find best recipes for cooking
					</CustomText>
				</View>
				<SearchBar setQuery={setQuery} />
				<TrendingRecipeSection />

				{/* Popular recipe section */}
				<View style={{ paddingTop: 24 }}>
					<View>
						<SectionHeader label='Popular category' />
					</View>
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
													isActive
														? colors.palette.white
														: colors.palette.primary30
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

					<PopularRecipeList />
					{/* <PopularCategoryList data={popularCategory} /> */}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const $container: ViewStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
}
