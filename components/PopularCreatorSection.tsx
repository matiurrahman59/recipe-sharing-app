import { View } from 'react-native'
import SectionHeader from './SectionHeader'
import PopularCreatorList from './PopularCreatorList'

const PopularCreatorSection = () => {
	return (
		<View
			style={{
				marginTop: 24,
				gap: 16,
			}}
		>
			<SectionHeader label='Popular creators' button={true} />
			<PopularCreatorList />
		</View>
	)
}

export default PopularCreatorSection
