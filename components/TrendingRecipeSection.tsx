import { View, FlatList } from 'react-native'
import SectionHeader from './SectionHeader'
import { trendingRecipes } from '@/data'
import RecipeCard from './RecipeCard'

const TrendingRecipeSection = () => {
	return (
		<View style={{ marginTop: 20 }}>
			<SectionHeader label='Trending now 🔥' button />
			<View style={{ marginTop: 16 }}>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={trendingRecipes}
					contentContainerStyle={{
						paddingLeft: 20,
						marginBottom: 20,
					}}
					keyExtractor={item => item.title}
					renderItem={({ item }) => (
						<RecipeCard
							item={item}
							customProps={{
								width: 280,
								marginRight: 16,
							}}
						/>
					)}
				/>
			</View>
		</View>
	)
}

export default TrendingRecipeSection
