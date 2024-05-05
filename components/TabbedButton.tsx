import {
	View,
	Text,
	TouchableOpacity,
	ButtonProps,
	TouchableOpacityProps,
	GestureResponderEvent,
} from 'react-native'
import { FC } from 'react'
import { colors } from '@/theme'
import CustomText from './CustomText'

interface TabbedButtonProps {
	title: string
	index: number
	currentSlideIndex: number
	onPress: ((event: GestureResponderEvent) => void) | undefined
}

const TabbedButton: FC<TabbedButtonProps> = ({
	title,
	index,
	currentSlideIndex,
	onPress,
}) => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				onPress={onPress}
				style={{
					backgroundColor:
						index === currentSlideIndex
							? colors.palette.primary50
							: colors.palette.white,
					alignItems: 'center',
					paddingHorizontal: 12,
					paddingVertical: 8,
					borderRadius: 10,
				}}
			>
				<CustomText
					bold
					size={12}
					color={
						index === currentSlideIndex
							? colors.palette.white
							: colors.palette.primary30
					}
				>
					{title}
				</CustomText>
			</TouchableOpacity>
		</View>
	)
}

export default TabbedButton
