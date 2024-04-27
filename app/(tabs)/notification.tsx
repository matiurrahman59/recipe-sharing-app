import { View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '@/theme'
import NotificationTabbedButton from '@/components/NotificationTabbedButton'
import CustomText from '@/components/CustomText'
import NotificationMessage from '@/components/NotificationMessage'

export default function Page() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	return (
		<View style={{ backgroundColor: colors.palette.white, flex: 1 }}>
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
					<NotificationTabbedButton
						title='All'
						index={0}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(0)}
					/>

					<NotificationTabbedButton
						title='Unread'
						index={1}
						currentSlideIndex={currentSlideIndex}
						onPress={() => setCurrentSlideIndex(1)}
					/>

					<NotificationTabbedButton
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
