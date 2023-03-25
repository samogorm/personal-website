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
			},
			typography: ({ theme }) => ({
        primary: {
          css: {
            '--tw-prose-body': theme('colors.darkGrey[400]'),
            '--tw-prose-headings': theme('colors.darkGrey[500]'),
            '--tw-prose-lead': theme('colors.primary[700]'),
            '--tw-prose-links': theme('colors.primary[900]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            '--tw-prose-counters': theme('colors.primary[600]'),
            '--tw-prose-bullets': theme('colors.primary[400]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.primary[900]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.darkGrey[200]'),
            '--tw-prose-code': theme('colors.primary[900]'),
            '--tw-prose-pre-code': theme('colors.primary[100]'),
            '--tw-prose-pre-bg': theme('colors.primary[900]'),
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.primary[200]'),
            '--tw-prose-invert-body': theme('colors.lightGrey[400]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[600]'),
            '--tw-prose-invert-hr': theme('colors.primary[500]'),
            '--tw-prose-invert-quotes': theme('colors.primary[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.primary[500]'),
            '--tw-prose-invert-captions': theme('colors.lightGrey[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.primary[600]'),
            '--tw-prose-invert-td-borders': theme('colors.primary[500]'),
						'p': {
							marginTop: 0,
              marginBottom: '0.75rem'
            },
						'h2': {
							marginTop: '1.5rem',
              marginBottom: '0.75rem',
							fontFamily: 'Space Grotesk',
            },
          },
        },
      }),
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
