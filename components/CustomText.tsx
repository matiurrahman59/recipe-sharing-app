import { View, Text, TextStyle, TextProps } from 'react-native'
import React, { FC } from 'react'
import { typography } from '@/theme'

interface CustomTextProps {
	children: React.ReactNode
	bold?: boolean
	size?: number
	lineHeight?: number
	color?: string
	line?: number
	customProps?: TextStyle
}

const CustomText: FC<CustomTextProps> = ({
	children,
	bold,
	color,
	lineHeight,
	size,
	line,
	customProps,
}) => {
	return (
		<Text
			style={[
				{
					fontFamily: bold ? typography.fonts.bold : typography.fonts.regular,
					fontSize: size,
					lineHeight: lineHeight,
					color: color,
				},
				customProps,
			]}
			numberOfLines={line}
		>
			{children}
		</Text>
	)
}

export default CustomText

// 	// const bold: TextStyle = {
// 	fontFamily: typography.fonts.bold,
// }

// const sm: TextStyle = {
// 	fontFamily: typography.fonts.regular,
// 	fontSize: 10,
// }

// const base: TextStyle = {
// 	fontFamily: typography.fonts.regular,
// }

// const lg: TextStyle = {
// 	...bold,
// 	fontSize: 56,
// 	lineHeight: 67,
// }

// const h1: TextStyle = {
// 	...bold,
// 	fontSize: 24,
// 	lineHeight: 28.8,
// }

// const h2: TextStyle = {
// 	...bold,
// 	fontSize: 20,
// }

// const h3: TextStyle = {
// 	...bold,
// 	lineHeight: 22.4,
// }

// const h4: TextStyle = {
// 	...bold,
// 	fontSize: 14,
// 	lineHeight: 19.6,
// }

// const h5: TextStyle = {
// 	...bold,
// 	fontSize: 12,
// }
