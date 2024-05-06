import { StyleSheet, View } from 'react-native'
import { useState } from 'react'

import TabbedButton from './TabbedButton'
import UserRecipeSliderItem from './UserRecipeSliderItem'
import CustomText from './CustomText'
import { colors } from '@/theme'
import ErrorMessage from './ErrorMessage'

export default function UserData() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	return (
		<>
			<View style={styles.tabbedButtonContainer}>
				<TabbedButton
					title='Recipe'
					index={0}
					currentSlideIndex={currentSlideIndex}
					onPress={() => setCurrentSlideIndex(0)}
				/>

				<TabbedButton
					title='Video'
					index={1}
					currentSlideIndex={currentSlideIndex}
					onPress={() => setCurrentSlideIndex(1)}
				/>
			</View>

			{currentSlideIndex === 0 ? (
				<UserRecipeSliderItem />
			) : (
				<ErrorMessage text="You don't have any videos!" />
			)}
		</>
	)
}

const styles = StyleSheet.create({
	tabbedButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		marginTop: 12,
	},
})
