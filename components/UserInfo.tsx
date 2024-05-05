import { View } from 'react-native'
import { FC } from 'react'
import CustomText from './CustomText'
import { colors } from '@/theme'

interface UserInfoProps {
	title: string
	value: number | string
}

const UserInfo: FC<UserInfoProps> = ({ title, value }) => {
	return (
		<View
			style={{
				alignItems: 'center',
			}}
		>
			<CustomText size={12} color={colors.palette.neutral40}>
				{title}
			</CustomText>
			<CustomText bold size={24} lineHeight={28.8}>
				{value}
			</CustomText>
		</View>
	)
}

export default UserInfo
