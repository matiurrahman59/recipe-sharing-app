import { StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FC } from 'react'

import { colors } from '@/theme'
import CustomText from './CustomText'

interface NotificationMessageProps {
	title: string
	badge?: boolean
}

const NotificationMessage: FC<NotificationMessageProps> = ({
	title,
	badge,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<Feather name='save' size={16} color={colors.palette.success100} />
			</View>
			<View style={styles.messageContainer}>
				<CustomText bold size={12}>
					{title}
				</CustomText>
				<CustomText
					size={12}
					line={2}
					color={colors.palette.neutral40}
					customProps={{}}
				>
					New recipe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus accusamus earum possimus incidunt illo impedit?
				</CustomText>
			</View>
			{badge && <View style={styles.badge} />}
		</View>
	)
}

export default NotificationMessage

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.neutral10,
		flexDirection: 'row',
		paddingVertical: 12,
		paddingHorizontal: 16,
		gap: 12,
		borderRadius: 12,
	},
	icon: {
		backgroundColor: colors.palette.green10,
		height: 28,
		width: 28,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	messageContainer: {
		flex: 1,
		gap: 4,
	},
	badge: {
		height: 6,
		width: 6,
		backgroundColor: colors.primary,
		borderRadius: 100,
	},
})
