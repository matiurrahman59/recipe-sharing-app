import {
	View,
	Text,
	Modal,
	ActivityIndicator,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import { FC } from 'react'
import { colors } from '@/theme'

interface LoaderProps {
	isLoading: boolean
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
	return (
		<Modal
			transparent={true}
			animationType='none'
			visible={isLoading}
			style={{ zIndex: 1100 }}
			onRequestClose={() => {}}
		>
			<View style={$modalBackground}>
				<ActivityIndicator
					animating={isLoading}
					color={colors.palette.black}
					size='large'
				/>
			</View>
		</Modal>
	)
}

export default Loader

const $modalBackground: ViewStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: colors.palette.overlay05,
	zIndex: 1000,
}
