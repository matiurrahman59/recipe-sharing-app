import { View, Image, TouchableHighlight, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import { colors } from '@/theme'
import { onBoardingImage } from '@/data/images'
import CustomText from '@/components/CustomText'

export default function WelcomeScreen() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='transparent' />

			<Image source={onBoardingImage} style={styles.image} />
			<LinearGradient
				colors={[colors.transparent, colors.palette.overlay]}
				style={styles.gradient}
			/>

			{/* Header Text */}
			<View style={styles.textContainer}>
				<View style={styles.text}>
					<AntDesign
						name='star'
						style={{ marginRight: 8 }}
						size={16}
						color={colors.white}
					/>
					<CustomText bold lineHeight={22.4} color={colors.white}>
						60K
					</CustomText>
					<CustomText color={colors.white}>Premium recipes</CustomText>
				</View>
			</View>

			{/* Body */}
			<View style={styles.pageContent}>
				<CustomText bold size={56} color={colors.white} lineHeight={67}>
					Let's
				</CustomText>
				<CustomText bold size={56} color={colors.white} lineHeight={67}>
					Cooking
				</CustomText>
				<CustomText color={colors.white} size={16}>
					Find best recipes for cooking
				</CustomText>

				<Link href='/(tabs)' asChild>
					<TouchableHighlight
						activeOpacity={0.7}
						underlayColor={colors.palette.primary80}
						style={{
							backgroundColor: colors.primary,
							marginTop: 40,
							borderRadius: 12,
						}}
					>
						<View style={styles.button}>
							<CustomText bold size={16} lineHeight={22.4} color={colors.white}>
								Start cooking
							</CustomText>
							<AntDesign name='arrowright' size={20} color={colors.white} />
						</View>
					</TouchableHighlight>
				</Link>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		objectFit: 'cover',
	},
	gradient: {
		position: 'absolute',
		height: '50%',
		width: '100%',
		bottom: 0,
		zIndex: 10,
	},
	pageContent: {
		position: 'absolute',
		zIndex: 20,
		width: '100%',
		height: '50%',
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textContainer: {
		paddingTop: 40,
		alignItems: 'center',
	},
	text: {
		flexDirection: 'row',
		gap: 4,
		alignItems: 'baseline',
	},
	button: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 32,
	},
})
