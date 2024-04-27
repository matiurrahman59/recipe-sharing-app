import {
	View,
	ViewStyle,
	Image,
	ImageStyle,
	TouchableHighlight,
} from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { colors } from '@/theme'
import { onBoardingImage } from '@/data/images'
import CustomText from '@/components/CustomText'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen() {
	return (
		<View style={$container}>
			<StatusBar backgroundColor='transparent' />
			<Image source={onBoardingImage} style={$image} />
			<LinearGradient
				colors={[colors.transparent, colors.palette.overlay]}
				style={$gradient}
			/>

			{/* Header Text */}
			<View style={$headerTextContainer}>
				<View style={$headerText}>
					<AntDesign
						name='star'
						style={{ marginRight: 8 }}
						size={16}
						color={colors.palette.white}
					/>
					<CustomText bold lineHeight={22.4} color={colors.palette.white}>
						60K
					</CustomText>
					<CustomText color={colors.palette.white}>Premium recipes</CustomText>
				</View>
			</View>

			{/* Body */}
			<View style={$content}>
				<CustomText bold size={56} color={colors.palette.white} lineHeight={67}>
					Let's
				</CustomText>
				<CustomText bold size={56} color={colors.palette.white} lineHeight={67}>
					Cooking
				</CustomText>
				<CustomText color={colors.palette.white} size={16}>
					Find best recipes for cooking
				</CustomText>

				<Link href='/(tabs)' asChild>
					<TouchableHighlight
						activeOpacity={0.7}
						underlayColor={colors.palette.primary80}
						style={{
							backgroundColor: colors.palette.primary50,
							marginTop: 40,
							borderRadius: 12,
						}}
					>
						<View style={$button}>
							<CustomText
								bold
								size={16}
								lineHeight={22.4}
								color={colors.palette.white}
							>
								Start cooking
							</CustomText>
							<AntDesign
								name='arrowright'
								size={20}
								color={colors.palette.white}
							/>
						</View>
					</TouchableHighlight>
				</Link>
			</View>
		</View>
	)
}

const $container: ViewStyle = {
	flex: 1,
}

const $image: ImageStyle = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	objectFit: 'cover',
}

const $gradient: ViewStyle = {
	position: 'absolute',
	height: '50%',
	width: '100%',
	bottom: 0,
	zIndex: 10,
}

const $headerTextContainer: ViewStyle = {
	paddingTop: 40,
	alignItems: 'center',
}

const $headerText: ViewStyle = {
	flexDirection: 'row',
	gap: 4,
	alignItems: 'baseline',
}

const $content: ViewStyle = {
	position: 'absolute',
	zIndex: 20,
	width: '100%',
	height: '50%',
	bottom: 0,
	alignItems: 'center',
	justifyContent: 'center',
}

const $button: ViewStyle = {
	flexDirection: 'row',
	gap: 8,
	alignItems: 'center',
	paddingVertical: 16,
	paddingHorizontal: 32,
}
