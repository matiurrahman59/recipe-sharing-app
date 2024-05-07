import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Button,
	TouchableOpacity,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
import * as ScreenOrientation from 'expo-screen-orientation'

import { colors } from '@/theme'
import { recipeType } from '@/data'

export default function VideoPlayer({ recipe }: { recipe: recipeType }) {
	const [orientationIsLandscape, setOrientation] = useState(true)
	const videoRef = useRef<Video>(null)
	const [status, setStatus] = useState<AVPlaybackStatus>()
	const [duration, setDuration] = useState(0)
	// const [totalDuration, setTotalDuration] = useState(null)
	console.log(duration)
	const isPlaying = status?.isLoaded && status.isPlaying

	const totalDuration =
		status?.isLoaded && (status.durationMillis! % 60000) / 1000

	console.log('---total---', totalDuration)

	const playRecipeVideo = () => {
		if (!videoRef.current) {
			return
		}

		videoRef.current.playAsync()

		// if (isPlaying) {
		// 	videoRef.current.pauseAsync()
		// } else {
		// 	videoRef.current.playAsync()
		// }
	}

	const changeOrientation = async () => {
		if (orientationIsLandscape == true) {
			await ScreenOrientation.lockAsync(
				ScreenOrientation.OrientationLock.LANDSCAPE,
			)
		} else if (orientationIsLandscape == false) {
			await ScreenOrientation.lockAsync(
				ScreenOrientation.OrientationLock.PORTRAIT,
			)
		}
	}

	const playLandscape = () => {
		videoRef.current?.presentFullscreenPlayer()
		changeOrientation()
	}

	// const toggleOrientation = () => {
	// 	setOrientation(!orientationIsLandscape)
	// 	changeOrientation()
	// }

	return (
		<View style={{ width: '100%' }}>
			<Pressable style={styles.videoContainer}>
				<Video
					ref={videoRef}
					source={{
						uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
					}}
					style={styles.video}
					useNativeControls
					resizeMode={ResizeMode.CONTAIN}
					onPlaybackStatusUpdate={status => {
						setStatus(status)
						if (status?.isLoaded) {
							const seconds = (status?.positionMillis % 60000) / 1000
							setDuration(seconds)
						}
					}}
				/>

				{isPlaying && (
					<TouchableOpacity
						onPress={playLandscape}
						style={{ position: 'absolute', top: 15, left: 15 }}
					>
						<SimpleLineIcons
							name='size-fullscreen'
							size={24}
							color={colors.white}
						/>
					</TouchableOpacity>
				)}

				{!isPlaying && (
					<Pressable onPress={playRecipeVideo} style={styles.videoOverlay}>
						<Image source={recipe.image} style={styles.videoThumbnail} />
						<View style={styles.playButton}>
							<FontAwesome name='play' size={20} color={colors.white} />
						</View>
					</Pressable>
				)}
			</Pressable>
			{/* <View>
				<Button title='Change Orientation' onPress={toggleOrientation} />
			</View> */}
		</View>
	)
}

const styles = StyleSheet.create({
	videoContainer: {
		marginTop: 24,
		width: '100%',
		height: 200,
		borderRadius: 12,
		overflow: 'hidden',
	},
	video: {
		width: '100%',
		height: '100%',
	},
	videoOverlay: {
		alignItems: 'center',
		justifyContent: 'center',
		...StyleSheet.absoluteFillObject,
	},
	videoThumbnail: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
	playButton: {
		backgroundColor: colors.palette.overlay60,
		position: 'absolute',
		height: 48,
		width: 48,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
})
