import { View, StyleSheet } from 'react-native'
import { colors } from '@/theme'

export default function SeparatorLine() {
	return (
		<View
			style={{
				borderBottomColor: colors.separator,
				borderBottomWidth: StyleSheet.hairlineWidth,
			}}
		/>
	)
}
