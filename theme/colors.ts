const palette = {
	// primary
	primary0: '#F1F9EC',
	primary10: '#f9d8d8',
	primary20: '#f3b2b2',
	primary30: '#ee8b8b',
	primary40: '#e86565',
	primary50: '#E23E3E',
	primary60: '#cb3838',
	primary70: '#b53232',
	primary80: '#9E2B2B',
	primary90: '#882525',
	primary100: '#711f1f',

	// secondary
	secondary0: '#FFF5E6',
	secondary10: '#FFE1B3',
	secondary20: '#FFCE80',
	secondary30: '#FFBA4D',
	secondary40: '#FFA61A',
	secondary50: '#FF9C00',
	secondary60: '#E68C00',
	secondary70: '#CC7D00',
	secondary80: '#B36D00',
	secondary90: '#995E00',
	secondary100: '#804E00',

	// neutral
	neutral10: '#F1F1F1',
	neutral20: '#D9D9D9',
	neutral30: '#C1C1C1',
	neutral40: '#A9A9A9',
	neutral50: '#919191',
	neutral60: '#797979',
	neutral70: '#606060',
	neutral80: '#484848',
	neutral90: '#303030',
	neutral100: '#181818',

	// error
	error10: '#fde7eb',
	error100: '#ee1133',

	// success
	success10: '#EAF7EE',
	success100: '#31B057',

	rating100: '#FFB661',
	green10: '#CEECD7',
	white: '#FFFFFF',
	black: '#000',

	overlay: 'rgba(0, 0, 0, 1)',
	overlay05: 'rgba(0, 0, 0, 0.5)',
	overlay20: 'rgba(25, 16, 21, 0.2)',
	overlay50: 'rgba(25, 16, 21, 0.5)',
	overlay60: 'rgba(48, 48, 48, 0.30)',
} as const

export const colors = {
	palette,
	primary: palette.primary50,
	transparent: 'rgba(0, 0, 0, 0)',
	text: palette.neutral90,
	white: palette.white,
	background: palette.white,
	border: palette.neutral20,
	tint: palette.primary50,
	inactiveTint: palette.neutral30,
	separator: palette.neutral20,
	/**
	 * Error messages.
	 */
	// error: palette.angry500,
	/**
	 * Error Background.
	 *
	 */
	// errorBackground: palette.angry100,
}
