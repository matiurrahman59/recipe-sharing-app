import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { FC } from 'react'
import { popularCreators } from '@/data'
import CustomText from './CustomText'

interface PopularCreatorListProps {}

const PopularCreatorList: FC<PopularCreatorListProps> = ({}) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={popularCreators}
			renderItem={({ item }) => (
				<TouchableOpacity style={{ marginRight: 12 }}>
					<Image
						source={item.image}
						style={{
							height: 75,
							width: 75,
							borderRadius: 100,
						}}
					/>
					<CustomText
						bold
						size={12}
						customProps={{
							maxWidth: 75,
							textAlign: 'center',
							marginTop: 8,
						}}
					>
						{item.name}
					</CustomText>
				</TouchableOpacity>
			)}
			keyExtractor={item => item.name}
			contentContainerStyle={{
				paddingLeft: 20,
				marginBottom: 20,
			}}
		/>
	)
}

export default PopularCreatorList
