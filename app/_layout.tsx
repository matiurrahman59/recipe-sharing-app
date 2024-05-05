import { colors, customFontsToLoad } from '@/theme'
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts(customFontsToLoad)

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen
				name='[id]'
				options={{
					headerShown: true,
					headerTitle: '',
					headerRight: () => (
						<Feather
							name='more-horizontal'
							size={24}
							color={colors.palette.neutral100}
							style={{
								marginRight: 20,
							}}
						/>
					),
				}}
			/>
			<Stack.Screen name='(tabs)' />
		</Stack>
	)
}
