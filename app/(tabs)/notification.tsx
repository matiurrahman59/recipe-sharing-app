import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Stack } from 'expo-router'

import NotificationMessage from '@/components/NotificationMessage'
import CustomText from '@/components/CustomText'
import { colors } from '@/theme'
import TabbedButton from '@/components/TabbedButton'

export default function Page() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	return (
		<View style={{ backgroundColor: colors.background, flex: 1 }}>
			<Stack.Screen
				options={{
					headerRight: () => (
						<Feather
							name='align-right'
							size={24}
							color={colors.palette.neutral100}
							style={{
								marginRight: 20,
							}}
						/>
					),
				}}
			/>

			<View style={{ marginHorizontal: 20 }}>
				{/* selected tabbed button */}
				<View style={styles.buttonContainer}>
					<TabbedButton
						title='All'
						index={0}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(0)}
					/>

					<TabbedButton
						title='Unread'
						index={1}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(1)}
					/>

					<TabbedButton
						title='Read'
						index={2}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(2)}
					/>
				</View>

				{/* today notification */}
				<View style={{ marginTop: 24 }}>
					<CustomText bold size={14} lineHeight={19.6}>
						Today
					</CustomText>
					<View style={styles.notification}>
						<NotificationMessage title='New recipe' badge />
						<NotificationMessage
							title="Don't forget to saved your recipe"
							badge
						/>
					</View>
				</View>

				{/* Yesterday notification */}
				<View style={{ marginTop: 24 }}>
					<CustomText bold size={14} lineHeight={19.6}>
						Yesterday
					</CustomText>
					<View style={styles.notification}>
						<NotificationMessage title="Don't forget to saved your recipe" />
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		gap: 8,
	},
	notification: {
		marginTop: 12,
		gap: 12,
	},
})
