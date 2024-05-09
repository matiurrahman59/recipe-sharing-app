import { TextInput, TextStyle, ViewStyle } from 'react-native'
import { FC, useState } from 'react'
import { colors, typography } from '@/theme'

interface InputProps {
	placeholder?: string
	value?: string
	onChange?: ((text: string) => void) | undefined
	style?: TextStyle
}

const Input: FC<InputProps> = ({ placeholder, value, style, onChange }) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<TextInput
			placeholder={placeholder}
			value={value}
			onChangeText={onChange}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			style={[
				{
					borderColor: isFocused ? colors.primary : colors.palette.neutral20,
					color: colors.palette.neutral90,
					paddingHorizontal: 16,
					paddingVertical: 12,
					borderRadius: 10,
					fontSize: 14,
					fontFamily: typography.primary,
					borderWidth: 1,
				},
				style,
			]}
		/>
	)
}

export default Input
