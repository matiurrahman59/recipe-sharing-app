import { View, Text } from 'react-native'
import { FC } from 'react'
import SectionHeader from './SectionHeader'
import PopularCreatorList from './PopularCreatorList'

interface PopularCreatorSectionProps {}

const PopularCreatorSection: FC<PopularCreatorSectionProps> = ({}) => {
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
