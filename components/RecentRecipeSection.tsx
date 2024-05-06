import { View } from 'react-native'
import SectionHeader from './SectionHeader'
import RecentRecipeList from './RecentRecipeList'

const RecentRecipeSection = () => {
	return (
		<View style={{ marginTop: 24, gap: 16 }}>
			<SectionHeader label='Recent recipe' button={true} />
			<RecentRecipeList />
		</View>
	)
}

export default RecentRecipeSection
