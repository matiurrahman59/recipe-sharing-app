import {
	View,
	TouchableOpacity,
	Image,
	FlatList,
	StyleSheet,
} from 'react-native'
import { FC } from 'react'
import { Feather } from '@expo/vector-icons'

import { colors } from '@/theme'
import { popularCategory } from '@/data'
import CustomText from './CustomText'

interface PopularRecipeListProps {}

const PopularRecipeList: FC<PopularRecipeListProps> = ({}) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={popularCategory}
			renderItem={({ item }) => (
				<TouchableOpacity style={styles.container}>
					{/* image */}
					<View style={styles.imageContainer}>
						<Image source={item.image} style={styles.image} />
					</View>

					{/* title */}
					<CustomText
						bold
						size={14}
						lineHeight={19.6}
						customProps={{
							textAlign: 'center',
							paddingHorizontal: 8,
						}}
					>
						{item.title}
					</CustomText>

					{/* details */}
					<View style={styles.details}>
						<CustomText size={16} color={colors.palette.neutral30}>
							Time
						</CustomText>
						<View style={styles.duration}>
							<CustomText bold size={12}>
								10 Mins
							</CustomText>

							<TouchableOpacity style={styles.button}>
								<Feather
									name='bookmark'
									size={16}
									color={colors.palette.neutral90}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableOpacity>
			)}
			keyExtractor={item => item.title}
			contentContainerStyle={{
				paddingLeft: 20,
			}}
		/>
	)
}

export default PopularRecipeList

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.palette.neutral10,
		width: 150,
		marginTop: 70,
		marginRight: 16,
		paddingTop: 40,
		paddingBottom: 12,
		borderRadius: 12,
		position: 'relative',
	},
	imageContainer: {
		position: 'absolute',
		top: '-50%',
		left: 0,
		right: 0,
		alignItems: 'center',
	},
	image: {
		height: 110,
		width: 110,
		borderRadius: 100,
	},
	details: {
		marginTop: 18,
		paddingHorizontal: 12,
	},
	duration: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		backgroundColor: colors.background,
		height: 28,
		width: 28,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
})
