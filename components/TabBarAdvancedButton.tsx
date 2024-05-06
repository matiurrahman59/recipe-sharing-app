import { View, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme'

const TabBarAdvancedButton = ({ ...props }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<Pressable
				onPress={props.onPress}
				style={{
					backgroundColor: colors.primary,
					position: 'absolute',
					width: 48,
					height: 48,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 100,
					top: -22.5,
				}}
			>
				<Feather name='plus' size={21} color={colors.white} />
			</Pressable>
		</View>
	)
}

export default TabBarAdvancedButton
