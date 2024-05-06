import { ScrollView, StyleProp, ViewStyle } from 'react-native'
import { FC, ReactNode } from 'react'
import { colors } from '@/theme'

interface ScrollViewWrapperProps {
	children: ReactNode
	style?: ViewStyle
	contentContainerStyle?: StyleProp<ViewStyle>
}

const ScrollViewWrapper: FC<ScrollViewWrapperProps> = ({
	children,
	style,
	contentContainerStyle,
}) => {
	return (
		<ScrollView
			style={[style, { flex: 1, backgroundColor: colors.background }]}
			contentContainerStyle={[
				{ paddingBottom: 30, paddingTop: 10 },
				contentContainerStyle,
			]}
		>
			{children}
		</ScrollView>
	)
}

export default ScrollViewWrapper
