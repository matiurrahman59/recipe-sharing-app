import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import CustomText from '@/components/CustomText'
import { colors } from '@/theme'
import TabbedButton from '@/components/TabbedButton'
import { useFavoriteContext } from '@/store'
import RecipeCard from '@/components/RecipeCard'

export default function Page() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const { favorites } = useFavoriteContext()

	return (
		<ScrollView
			style={{ backgroundColor: colors.palette.white, flex: 1 }}
			contentContainerStyle={{
				paddingBottom: 30,
			}}
		>
			<Stack.Screen
				options={{
					headerLeft: () => (
						<CustomText bold size={24} customProps={{ marginLeft: 20 }}>
							Saved recipes
						</CustomText>
					),
				}}
			/>

			{/* video & recipe tabbed button*/}
			<View style={{ marginHorizontal: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 28,
						gap: 16,
					}}
				>
					<TabbedButton
						title='Video'
						index={0}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(0)}
					/>

					<TabbedButton
						title='Recipe'
						index={1}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(1)}
					/>
				</View>

				{!favorites.length && (
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 40,
						}}
					>
						<CustomText bold size={20} color={colors.palette.secondary90}>
							You don't have any favorites!
						</CustomText>
					</View>
				)}

				{/* bookmark recipe items */}

				<FlatList
					data={favorites}
					keyExtractor={item => item.title}
					scrollEnabled={false}
					renderItem={({ item }) => (
						<RecipeCard
							item={item}
							customProps={{
								width: '100%',
								marginBottom: 20,
							}}
						/>
					)}
					contentContainerStyle={{
						marginTop: 28,
					}}
				/>
				{/* bookmark recipe items */}
				{/* {favorites.map(item => (
					<View key={item.id}>
						<RecipeCard
							item={item}
							customProps={{
								width: '100%',
								marginBottom: 12,
							}}
							className="w-full mb-3"
							onPress={() => navigation.navigate('RecipeDetails', item)}
						/>
					</View>
				))} */}
			</View>
		</ScrollView>
	)
}
