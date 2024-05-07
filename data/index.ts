import { Images } from './images'

export const popularCreators = [
	{
		id: 1,
		name: 'Troyan Smith',
		image: Images.user1,
	},
	{
		id: 2,
		name: 'james Wolden',
		image: Images.user2,
	},
	{
		id: 3,
		name: 'Niki Samantha',
		image: Images.user3,
	},
	{
		id: 4,
		name: 'Mac Anny',
		image: Images.user4,
	},
	{
		id: 5,
		name: 'Sayad Rahman',
		image: Images.user4,
	},
	{
		id: 6,
		name: 'Ahmed Safi',
		image: Images.user4,
	},
	{
		id: 7,
		name: 'Mahadi Hasan',
		image: Images.user4,
	},
]

export const categoryList = [
	{
		id: 1,
		title: 'salad',
		slug: 'salad',
	},
	{
		id: 2,
		title: 'Breakfast',
		slug: 'breakfast',
	},
	{
		id: 3,
		title: 'Appetizer',
		slug: 'appetizer',
	},
	{
		id: 4,
		title: 'Noodle',
		slug: 'noodle',
	},
	{
		id: 5,
		title: 'Lunch',
		slug: 'lunch',
	},
]

export const popularCategory = [
	{
		id: 1,
		title: 'Pepper sweetcorn ramen',
		duration: '10 Mins',
		image: Images.category1,
	},
	{
		id: 2,
		title: 'Cheddar cheese and shell salad',
		duration: '20 Mins',
		image: Images.category2,
	},
	{
		id: 3,
		title: 'Spicy chicken tacos',
		duration: '15 Mins',
		image: Images.category1,
	},
	{
		id: 4,
		title: 'Mushroom risotto',
		duration: '25 Mins',
		image: Images.category2,
	},
	{
		id: 5,
		title: 'Mango avocado salsa',
		duration: '5 Mins',
		image: Images.category1,
	},
	{
		id: 6,
		title: 'Grilled salmon with asparagus',
		duration: '30 Mins',
		image: Images.category2,
	},
	{
		id: 7,
		title: 'Caprese salad',
		duration: '10 Mins',
		image: Images.category1,
	},
	{
		id: 8,
		title: 'Pineapple coconut smoothie',
		duration: '5 Mins',
		image: Images.category2,
	},
	{
		id: 9,
		title: 'Stuffed bell peppers',
		duration: '25 Mins',
		image: Images.category1,
	},
	{
		id: 10,
		title: 'Blueberry lemon pancakes',
		duration: '15 Mins',
		image: Images.category2,
	},
]

export const recentRecipes = [
	{
		id: 1,
		title: 'Indonesian chicken burger',
		author: 'Adrianna Curl',
		image: Images.recentRecipe1,
	},
	{
		id: 2,
		title: 'Mediterranean pasta salad',
		author: 'Oliver Carter',
		image: Images.recentRecipe2,
	},
	{
		id: 3,
		title: 'Thai coconut curry',
		author: 'Sofia Patel',
		image: Images.recentRecipe3,
	},
	{
		id: 4,
		title: 'Greek spinach pie',
		author: 'Nikos Papadopoulos',
		image: Images.recentRecipe1,
	},
	{
		id: 5,
		title: 'Mexican street tacos',
		author: 'Elena Gonzalez',
		image: Images.recentRecipe2,
	},
	{
		id: 6,
		title: 'Indian butter chicken',
		author: 'Rahul Kapoor',
		image: Images.recentRecipe3,
	},
	{
		id: 7,
		title: 'Japanese sushi rolls',
		author: 'Yuki Tanaka',
		image: Images.recentRecipe1,
	},
]
export type recipeType = {
	id: number
	title: string
	rating: number
	duration: string
	author: string
	image: any
	authorImage: any
}

export const trendingRecipes = [
	{
		id: 1,
		title: 'How to make sushi at home',
		rating: 4.7,
		duration: '15.10',
		author: 'John Doe',
		image: Images.recipe2,
		authorImage: Images.user1,
	},
	{
		id: 2,
		title: 'How to make sandwich',
		rating: 4.5,
		duration: '20:00',
		author: 'Jane Smith',
		image: Images.recipe3,
		authorImage: Images.user2,
	},
	{
		id: 3,
		title: 'Garlic Butter Shrimp Pasta',
		rating: 4.7,
		duration: '22:45',
		author: 'Michael Johnson',
		image: Images.recipe1,
		authorImage: Images.user3,
	},
	{
		id: 4,
		title: 'Pesto Chicken Wrap',
		rating: 4.5,
		duration: '17:20',
		author: 'Emily Brown',
		image: Images.recipe4,
		authorImage: Images.user1,
	},
	{
		id: 5,
		title: 'Mango Salsa Fish Tacos',
		rating: 4.9,
		duration: '28:10',
		author: 'David Lee',
		image: Images.recipe5,
		authorImage: Images.user2,
	},
	{
		id: 6,
		title: 'Grilled Vegetable Skewers',
		rating: 4.3,
		duration: '23:50',
		author: 'Sophia Clark',
		image: Images.recipe6,
		authorImage: Images.user3,
	},
	{
		id: 7,
		title: 'Lemon Garlic Butter Salmon',
		rating: 4.8,
		duration: '19:40',
		author: 'James Wilson',
		image: Images.recipe7,
		authorImage: Images.user1,
	},
]

export const ingredientLists = [
	{
		id: 1,
		name: 'Bread',
		icon: '🥪',
		quantity: '200g',
	},
	{
		id: 2,
		name: 'Eggs',
		icon: '🥚',
		quantity: '200g',
	},
	{
		id: 3,
		name: 'Milk',
		icon: '🥛',
		quantity: '200g',
	},
	{
		id: 4,
		name: 'Butter',
		icon: '🧈',
		quantity: '200g',
	},
	{
		id: 5,
		name: 'Corn',
		icon: '🌽',
		quantity: '200g',
	},
]

export const onBoardingData = [
	{
		id: 1,
		title: 'Find best place to stay in good price',
		subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
		imageUri:
			'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: 2,
		title: 'Fast sell your property in just one click ',
		subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
		imageUri:
			'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
]

export const userRecipeList = [
	{
		id: 1,
		type: 'video',
		recipeVideos: [
			{
				id: 1,
				title: 'How to make sushi at home',
				rating: 4.7,
				duration: '15.10',
				author: 'John Doe',
				image: Images.recipe2,
				authorImage: Images.user1,
			},
			{
				id: 2,
				title: 'How to make sandwich',
				rating: 4.5,
				duration: '20:00',
				author: 'Jane Smith',
				image: Images.recipe3,
				authorImage: Images.user2,
			},
			{
				id: 3,
				title: 'Garlic Butter Shrimp Pasta',
				rating: 4.7,
				duration: '22:45',
				author: 'Michael Johnson',
				image: Images.recipe1,
				authorImage: Images.user3,
			},
			{
				id: 4,
				title: 'Pesto Chicken Wrap',
				rating: 4.5,
				duration: '17:20',
				author: 'Emily Brown',
				image: Images.recipe4,
				authorImage: Images.user1,
			},
			{
				id: 5,
				title: 'Mango Salsa Fish Tacos',
				rating: 4.9,
				duration: '28:10',
				author: 'David Lee',
				image: Images.recipe5,
				authorImage: Images.user2,
			},
			{
				id: 6,
				title: 'Grilled Vegetable Skewers',
				rating: 4.3,
				duration: '23:50',
				author: 'Sophia Clark',
				image: Images.recipe6,
				authorImage: Images.user3,
			},
			{
				id: 7,
				title: 'Lemon Garlic Butter Salmon',
				rating: 4.8,
				duration: '19:40',
				author: 'James Wilson',
				image: Images.recipe7,
				authorImage: Images.user1,
			},
		],
	},

	{
		id: 2,
		type: 'recipe',
		recipeList: [
			{
				id: 1,
				name: 'Bread',
				icon: '🥪',
				quantity: '200g',
			},
			{
				id: 2,
				name: 'Eggs',
				icon: '🥚',
				quantity: '200g',
			},
			{
				id: 3,
				name: 'Milk',
				icon: '🥛',
				quantity: '200g',
			},
			{
				id: 4,
				name: 'Butter',
				icon: '🧈',
				quantity: '200g',
			},
			{
				id: 5,
				name: 'Corn',
				icon: '🌽',
				quantity: '200g',
			},
		],
	},
]
