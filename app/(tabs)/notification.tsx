import { View } from 'react-native'
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
		<View style={{ backgroundColor: colors.palette.white, flex: 1 }}>
			{/* custom header */}
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
					headerLeft: () => (
						<CustomText bold size={24} customProps={{ marginLeft: 20 }}>
							Notifications
						</CustomText>
					),
				}}
			/>

			<View style={{ marginHorizontal: 20 }}>
				{/* selected tabbed button */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 28,
						gap: 8,
					}}
				>
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
					<View
						style={{
							marginTop: 12,
							gap: 12,
						}}
					>
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
					<View
						style={{
							marginTop: 12,
							gap: 12,
						}}
					>
						<NotificationMessage title="Don't forget to saved your recipe" />
					</View>
				</View>
			</View>
		</View>
	)
}
