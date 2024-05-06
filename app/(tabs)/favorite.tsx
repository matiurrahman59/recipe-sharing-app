import { View, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { useFavoriteContext } from '@/store'
import TabbedButton from '@/components/TabbedButton'
import RecipeCard from '@/components/RecipeCard'
import ScrollViewWrapper from '@/components/ScrollViewWrapper'
import ErrorMessage from '@/components/ErrorMessage'

export default function Page() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const { favorites } = useFavoriteContext()

	return (
		<ScrollViewWrapper style={{ paddingHorizontal: 20 }}>
			{/* video & recipe tabbed button*/}
			<View style={styles.buttonContainer}>
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
				<ErrorMessage text="You don't have any favorites!" />
			)}

			<FlatList
				data={favorites}
				keyExtractor={item => item.title}
				scrollEnabled={false}
				renderItem={({ item }) => (
					<RecipeCard
						item={item}
						style={{
							width: '100%',
							marginBottom: 20,
						}}
					/>
				)}
				contentContainerStyle={{
					marginTop: 28,
				}}
			/>
		</ScrollViewWrapper>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
})
