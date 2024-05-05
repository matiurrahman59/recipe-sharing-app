import { ReactNode, createContext, useContext, useState } from 'react'

type recipeType = {
	id: number
	title: string
	rating: number
	duration: string
	author: string
	image: any
	authorImage: any
}

type FavoritesContextProps = {
	children: ReactNode
}

type FavoritesContext = {
	favorites: recipeType[]
	addToFavorites: (recipe: recipeType) => void
	removeFromFavorites: (id: number) => void
}

export const FavoritesContext = createContext({} as FavoritesContext)

export const useFavoriteContext = () => {
	return useContext(FavoritesContext)
}

export const FavoritesContextProvider = ({
	children,
}: FavoritesContextProps) => {
	const [favorites, setFavorites] = useState<recipeType[]>([])

	const addToFavorites = (recipe: recipeType) => {
		setFavorites([...favorites, recipe])
	}

	const removeFromFavorites = (id: number) => {
		const newFavorites = favorites.filter(item => item.id !== id)

		setFavorites(newFavorites)
	}

	return (
		<FavoritesContext.Provider
			value={{ favorites, addToFavorites, removeFromFavorites }}
		>
			{children}
		</FavoritesContext.Provider>
	)
}
