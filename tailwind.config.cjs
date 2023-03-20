/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Space Grotesk", ...defaultTheme.fontFamily.mono],
      },
			colors: {
				primary: {
					50: '#FFFFFF',
					100: '#F1F9FA',
					200: '#D3EDF0',
					300: '#B5E0E5',
					400: '#96D4DB',
					500: '#78C7D0',
					600: '#4EB6C2',
					700: '#3895A0',
					800: '#296F76',
					900: '#1B484D'
				},
				lightGrey: {
					200: '#F8F8F8',
					300: '#E4E4E4',
					400: '#CFCFCF',
					500: '#BBBBBB',
					600: '#9F9F9F',
					700: '#838383',
					800: '#676767',
					900: '#4B4B4B'
				},
				darkGrey: {
					50: '#737B83',
					100: '#697178',
					200: '#565C62',
					300: '#43484C',
					400: '#303337',
					500: '#1D1F21',
					600: '#030303',
					700: '#000000',
				}
			}
		},
	},
	plugins: [],
}
