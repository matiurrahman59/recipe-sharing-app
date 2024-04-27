import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomText from '@/components/CustomText'
import PopularRecipeSection from '@/components/PopularRecipeSection'
import RecentRecipeSection from '@/components/RecentRecipeSection'
import SearchBar from '@/components/SearchBar'
import TrendingRecipeSection from '@/components/TrendingRecipeSection'
import { colors } from '@/theme'
import PopularCreatorSection from '@/components/PopularCreatorSection'
import Loader from '@/components/Loader'

export default function Page() {
	const [query, setQuery] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 2500)
	}, [])
	return (
		<SafeAreaView>
			<StatusBar backgroundColor='#fff' />
			<Loader isLoading={isLoading} />

			{!isLoading && (
				<ScrollView
					contentContainerStyle={{
						backgroundColor: colors.palette.white,
						paddingTop: 30,
					}}
				>
					<CustomText
						bold
						size={24}
						lineHeight={28.8}
						color={colors.palette.neutral90}
						customProps={{
							paddingTop: 20,
							paddingLeft: 22,
							maxWidth: 244,
						}}
					>
						Find best recipes for cooking
					</CustomText>
					<SearchBar setQuery={setQuery} />

					<TrendingRecipeSection />
					<PopularRecipeSection />
					<RecentRecipeSection />
					<PopularCreatorSection />
				</ScrollView>
			)}
		</SafeAreaView>
	)
}
