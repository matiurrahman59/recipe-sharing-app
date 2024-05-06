import { Text, TextStyle } from 'react-native'
import React, { FC } from 'react'
import { colors, typography } from '@/theme'

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
					fontFamily: bold ? typography.fonts.bold : typography.primary,
					fontSize: size,
					lineHeight: lineHeight,
					color: color || colors.text,
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
