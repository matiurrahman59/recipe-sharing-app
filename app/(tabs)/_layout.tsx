import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/theme'

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name']
	color: string
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.palette.primary50,
				tabBarInactiveTintColor: colors.palette.neutral30,
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
				}}
			/>
			<Tabs.Screen
				name='createRecipe'
				options={{
					title: 'Create recipe',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='bookmark-minus-outline'
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='notification'
				options={{
					title: 'Notifications',
					tabBarIcon: ({ color }) => (
						<Feather name='bell' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'My profile',
					tabBarIcon: ({ color }) => (
						<AntDesign name='user' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
