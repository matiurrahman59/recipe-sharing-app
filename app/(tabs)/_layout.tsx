import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors, typography } from '@/theme'
import TabBarAdvancedButton from '@/components/TabBarAdvancedButton'
import { FavoritesContextProvider } from '@/store'

export default function TabLayout() {
	return (
		<FavoritesContextProvider>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: colors.tint,
					tabBarInactiveTintColor: colors.inactiveTint,
				}}
			>
				<Tabs.Screen
					name='index'
					options={{
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<AntDesign name='home' size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name='favorite'
					options={{
						title: 'Saved recipes',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='bookmark-minus-outline'
								size={24}
								color={color}
							/>
						),
						headerTitleStyle: {
							fontSize: 24,
							fontFamily: typography.fonts.bold,
							color: colors.palette.neutral90,
						},
					}}
				/>
				<Tabs.Screen
					name='createRecipe'
					options={{
						title: 'Create recipe',
						tabBarButton: props => <TabBarAdvancedButton {...props} />,
						headerTitleStyle: {
							fontSize: 24,
							fontFamily: typography.fonts.bold,
							color: colors.palette.neutral90,
						},
					}}
				/>
				<Tabs.Screen
					name='notification'
					options={{
						title: 'Notifications',
						tabBarIcon: ({ color }) => (
							<Feather name='bell' size={24} color={color} />
						),
						headerTitleStyle: {
							fontSize: 24,
							fontFamily: typography.fonts.bold,
							color: colors.palette.neutral90,
						},
					}}
				/>
				<Tabs.Screen
					name='profile'
					options={{
						title: 'My Profile',
						tabBarIcon: ({ color }) => (
							<AntDesign name='user' size={24} color={color} />
						),
						headerTitleStyle: {
							fontSize: 24,
							fontFamily: typography.fonts.bold,
							color: colors.palette.neutral90,
						},
					}}
				/>
			</Tabs>
		</FavoritesContextProvider>
	)
}
