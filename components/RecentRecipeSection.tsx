import { View, Text } from 'react-native'
import { FC } from 'react'
import SectionHeader from './SectionHeader'
import RecentRecipeList from './RecentRecipeList'

interface RecentRecipeSectionProps {}

const RecentRecipeSection: FC<RecentRecipeSectionProps> = ({}) => {
	return (
		<View style={{ marginTop: 24, gap: 16 }}>
			<SectionHeader label='Recent recipe' button={true} />
			<RecentRecipeList />
		</View>
	)
}

export default RecentRecipeSection
