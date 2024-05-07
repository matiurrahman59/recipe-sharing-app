import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { ResizeMode, Video } from 'expo-av'
import { AntDesign } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import * as ScreenOrientation from 'expo-screen-orientation'

export default function NewVideoPlayer() {
	const [clicked, setClicked] = useState(false)
	const [paused, setPaused] = useState(false)
	const [progress, setProgress] = useState(null)
	const [fullScreen, setFullScreen] = useState(false)
	const ref = useRef<Video>(null)

	const format = seconds => {
		let mins = parseInt(seconds / 60)
			.toString()
			.padStart(2, '0')
		let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0')
		return `${mins}:${secs}`
	}

	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity
				style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
				onPress={() => {
					setClicked(true)
				}}
			>
				<Video
					// paused={paused}
					source={{
						uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
					}}
					ref={ref}
					// onProgress={x => {
					//   console.log(x);
					//   setProgress(x);
					// }}
					isMuted
					style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
					resizeMode={ResizeMode.CONTAIN}
				/>
				{clicked && (
					<TouchableOpacity
						style={{
							width: '100%',
							height: '100%',
							position: 'absolute',
							backgroundColor: 'rgba(0,0,0,.5)',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity
								onPress={() => {
									// ref.current.seek(parseInt(progress.currentTime) - 10);
								}}
							>
								<AntDesign name='stepbackward' size={24} color='black' />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									setPaused(!paused)
								}}
							>
								{/* <Image
                  source={
                    paused
                      ? require('./src/play-button.png')
                      : require('./src/pause.png')
                  }
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                /> */}
								<AntDesign name='play' size={24} color='black' />
								<AntDesign name='pause' size={24} color='black' />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									// ref.current.seek(parseInt(progress.currentTime) + 10);
								}}
							>
								<AntDesign name='stepforward' size={24} color='black' />
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: '100%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								position: 'absolute',
								bottom: 0,
								paddingLeft: 20,
								paddingRight: 20,
								alignItems: 'center',
							}}
						>
							<Text style={{ color: 'white' }}>
								{/* {format(progress.currentTime)} */}
							</Text>
							<Slider
								style={{ width: '80%', height: 40 }}
								minimumValue={0}
								maximumValue={100}
								// maximumValue={progress.seekableDuration}
								minimumTrackTintColor='#FFFFFF'
								maximumTrackTintColor='#fff'
								onValueChange={x => {
									// ref.current.seek(x);
								}}
							/>
							<Text style={{ color: 'white' }}>
								{/* {format(progress.seekableDuration)} */}
							</Text>
						</View>
						<View
							style={{
								width: '100%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								position: 'absolute',
								top: 10,
								paddingLeft: 20,
								paddingRight: 20,
								alignItems: 'center',
							}}
						>
							<TouchableOpacity
								onPress={() => {
									if (fullScreen) {
										// Orientation.lockToPortrait();
									} else {
										// Orientation.lockToLandscape();
									}
									setFullScreen(!fullScreen)
								}}
							>
								<Image
									source={
										fullScreen
											? require('./src/minimize.png')
											: require('./src/full-size.png')
									}
									style={{ width: 24, height: 24, tintColor: 'white' }}
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			</TouchableOpacity>
		</View>
	)
}
