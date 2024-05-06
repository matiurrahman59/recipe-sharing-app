import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Images } from '@/data/images'
import { colors } from '@/theme'
import CustomText from './CustomText'
import UserInfo from './UserInfo'

export default function UserDetails() {
	return (
		<View style={styles.container}>
			{/* user photo */}
			<View style={styles.imageContainer}>
				<Image source={Images.user1} style={styles.image} />
				<TouchableOpacity style={styles.editButton}>
					<CustomText bold size={14} lineHeight={19.6} color={colors.primary}>
						Edit profile
					</CustomText>
				</TouchableOpacity>
			</View>

			{/* user name and description */}
			<View style={styles.userDescription}>
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
					Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking so
					much!
				</CustomText>
			</View>

			{/* user recipe and follower details */}
			<View style={styles.userRecipeData}>
				<UserInfo title='Recipe' value={3} />
				<UserInfo title='Videos' value={13} />
				<UserInfo title='Followers' value='14k' />
				<UserInfo title='Following' value='120' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// marginHorizontal: 20,
	},
	imageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		height: 100,
		width: 100,
		borderRadius: 100,
	},
	editButton: {
		borderColor: colors.primary,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderWidth: 1,
		borderRadius: 10,
	},
	userDescription: {
		marginTop: 12,
		gap: 12,
	},
	userRecipeData: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
	},
})
