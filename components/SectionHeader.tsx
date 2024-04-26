import { View, Text, TouchableOpacity } from 'react-native'
import { FC } from 'react'
import CustomText from './CustomText'
import { colors } from '@/theme'
import { Feather } from '@expo/vector-icons'

interface SectionHeaderProps {
	label: string
	onPress?: () => void
	button?: boolean
}

const SectionHeader: FC<SectionHeaderProps> = ({ label, button, onPress }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: 12,
				paddingHorizontal: 20,
			}}
		>
			<CustomText bold size={20}>
				{label}
			</CustomText>
			{button && (
				<TouchableOpacity
					onPress={onPress}
					style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
				>
					<CustomText
						bold
						size={14}
						lineHeight={19.6}
						color={colors.palette.primary50}
					>
						See all
					</CustomText>
					<Feather
						name='arrow-right'
						size={20}
						color={colors.palette.primary50}
					/>
				</TouchableOpacity>
			)}
		</View>
	)
}

export default SectionHeader
