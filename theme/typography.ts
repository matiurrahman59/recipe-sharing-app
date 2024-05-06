import {
	Poppins_400Regular as poppinsRegular,
	Poppins_600SemiBold as poppinsSemiBold,
} from '@expo-google-fonts/poppins'

export const customFontsToLoad = {
	poppinsRegular,
	poppinsSemiBold,
}

const fonts = {
	regular: 'poppinsRegular',
	bold: 'poppinsSemiBold',
}

export const typography = {
	/**
	 * The fonts are available to use, but prefer using the semantic name.
	 */
	fonts,
	/**
	 * The primary font. Used in most places.
	 */
	primary: fonts.regular,
	/**
	 * An alternate font used for perhaps titles and stuff.
	 */
	// secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
	/**
	 * Lets get fancy with a monospace font!
	 */
	// code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
