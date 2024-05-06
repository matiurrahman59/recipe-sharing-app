import { View } from 'react-native'
import { FC } from 'react'
import CustomText from './CustomText'
import { colors } from '@/theme'

const ErrorMessage = ({ text }: { text: string }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 40,
			}}
		>
			<CustomText bold size={20} color={colors.palette.secondary90}>
				{text}
			</CustomText>
		</View>
	)
}

export default ErrorMessage
