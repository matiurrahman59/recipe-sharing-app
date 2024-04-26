import { View, ViewStyle, TextStyle, TextInput } from 'react-native'
import { FC } from 'react'
import { colors } from '@/theme'
import { Feather } from '@expo/vector-icons'

interface SearchBarProps {
	setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: FC<SearchBarProps> = ({ setQuery }) => {
	return (
		<View style={$container}>
			<Feather name='search' size={20} color={colors.palette.neutral20} />
			<TextInput
				placeholder='Search recipes'
				style={$input}
				onChangeText={setQuery}
			/>
		</View>
	)
}

export default SearchBar

const $container: ViewStyle = {
	flexDirection: 'row',
	borderColor: colors.palette.neutral20,
	borderRadius: 10,
	marginHorizontal: 20,
	alignItems: 'center',
	paddingHorizontal: 16,
	paddingVertical: 12,
	marginTop: 28,
	borderWidth: 1,
}

const $input: TextStyle = {
	color: colors.palette.neutral30,
	flex: 1,
	marginLeft: 12,
}
