import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
} from 'react-native'
import React, { useState } from 'react'
import { colors } from '@/theme'
import { Feather } from '@expo/vector-icons'
import CustomText from '@/components/CustomText'
import { Stack } from 'expo-router'
import { Images } from '@/data/images'
import UserInfo from '@/components/UserInfo'
import TabbedButton from '@/components/TabbedButton'
import UserRecipeSliderItem from '@/components/UserRecipeSliderItem'
const { width, height } = Dimensions.get('window')

export default function Page() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

	return (
		<View style={{ backgroundColor: colors.palette.white, flex: 1 }}>
			{/* custom header */}
			<Stack.Screen
				options={{
					headerRight: () => (
						<Feather
							name='more-horizontal'
							size={24}
							color={colors.palette.neutral100}
							style={{
								marginRight: 20,
							}}
						/>
					),
					headerLeft: () => (
						<CustomText bold size={24} customProps={{ marginLeft: 20 }}>
							My Profile
						</CustomText>
					),
				}}
			/>

			<ScrollView
				contentContainerStyle={{
					paddingBottom: 30,
				}}
			>
				{/* user details */}
				<View
					style={{
						marginHorizontal: 20,
						marginTop: 32,
					}}
				>
					{/* user photo */}
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Image
							source={Images.user1}
							style={{
								height: 100,
								width: 100,
								borderRadius: 100,
							}}
						/>
						<TouchableOpacity
							style={{
								borderColor: colors.palette.primary50,
								paddingHorizontal: 16,
								paddingVertical: 8,
								borderWidth: 1,
								borderRadius: 10,
							}}
						>
							<CustomText
								bold
								size={14}
								lineHeight={19.6}
								color={colors.palette.primary50}
							>
								Edit profile
							</CustomText>
						</TouchableOpacity>
					</View>

					{/* user name and description */}
					<View
						style={{
							marginTop: 12,
							gap: 12,
						}}
					>
						<CustomText bold size={24} lineHeight={28.8}>
							Alessandra Blair
						</CustomText>
						<CustomText
							size={14}
							lineHeight={19.6}
							color={colors.palette.neutral40}
							customProps={{
								width: '80%',
							}}
						>
							Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking
							so much!
						</CustomText>
					</View>

					{/* user recipe and follower details */}
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginVertical: 20,
						}}
					>
						<UserInfo title='Recipe' value={3} />
						<UserInfo title='Videos' value={13} />
						<UserInfo title='Followers' value='14k' />
						<UserInfo title='Following' value='120' />
					</View>
				</View>

				{/* thick separate line */}
				<View
					style={{
						borderBottomColor: colors.palette.neutral20,
						borderBottomWidth: StyleSheet.hairlineWidth,
					}}
				/>

				{/* video & recipe tabbed button*/}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: 16,
						marginHorizontal: 16,
						marginTop: 12,
					}}
				>
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

				<View
					style={{
						alignItems: 'center',
						paddingTop: 32,
					}}
				>
					<View
						style={{
							width: '90%',
						}}
					>
						{currentSlideIndex === 0 ? (
							<UserRecipeSliderItem />
						) : (
							<View
								style={{
									alignItems: 'center',
									marginTop: 40,
									justifyContent: 'center',
								}}
							>
								<CustomText size={20} bold color={colors.palette.secondary90}>
									You don't have any videos!
								</CustomText>
							</View>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
