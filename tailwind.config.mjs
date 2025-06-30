/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const themes = require('./public/style/themes')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				alpha: {
					DEFAULT: "rgba(202, 254, 0, 1)",
					50: 'rgba(240, 255, 183, 1)',
					100: 'rgba(236, 255, 162, 1)',
					200: 'rgba(228, 255, 121, 1)',
					300: 'rgba(219, 255, 81, 1)',
					400: 'rgba(211, 255, 40, 1)',
					500: 'rgba(202, 254, 0, 1)',
					600: 'rgba(157, 198, 0, 1)',
					700: 'rgba(113, 142, 0, 1)',
					800: 'rgba(68, 86, 0, 1)',
					900: 'rgba(24, 30, 0, 1)',
				},
				beta: {
					DEFAULT: "rgba(34, 197, 94, 1)",
					50: 'rgba(240, 253, 244, 1)',
					100: 'rgba(220, 252, 231, 1)',
					200: 'rgba(187, 247, 208, 1)',
					300: 'rgba(134, 239, 172, 1)',
					400: 'rgba(74, 222, 128, 1)',
					500: 'rgba(34, 197, 94, 1)',
					600: 'rgba(22, 163, 74, 1)',
					700: 'rgba(21, 128, 61, 1)',
					800: 'rgba(22, 101, 52, 1)',
					900: 'rgba(20, 83, 45, 1)',
				},
				accent: {
					DEFAULT: "rgba(59, 130, 246, 1)",
					50: 'rgba(239, 246, 255, 1)',
					100: 'rgba(219, 234, 254, 1)',
					200: 'rgba(191, 219, 254, 1)',
					300: 'rgba(147, 197, 253, 1)',
					400: 'rgba(96, 165, 250, 1)',
					500: 'rgba(59, 130, 246, 1)',
					600: 'rgba(37, 99, 235, 1)',
					700: 'rgba(29, 78, 216, 1)',
					800: 'rgba(30, 64, 175, 1)',
					900: 'rgba(30, 58, 138, 1)',
				},
				omega: {
					DEFAULT: "rgba(113, 113, 122, 1)",
					50: 'rgba(250, 250, 250, 1)',
					100: 'rgba(244, 244, 245, 1)',
					200: 'rgba(228, 228, 231, 1)',
					300: 'rgba(212, 212, 216, 1)',
					400: 'rgba(161, 161, 170, 1)',
					500: 'rgba(113, 113, 122, 1)',
					600: 'rgba(82, 82, 91, 1)',
					700: 'rgba(63, 63, 70, 1)',
					800: 'rgba(39, 39, 42, 1)',
					900: 'rgba(24, 24, 27, 1)',
				},

			},
			backgroundImage: theme => ({
				'gradient-to-r': 'linear-gradient(to right, ' + theme('colors.red.500') + ', ' + theme('colors.pink.500') + ', ' + theme('colors.purple.500') + ')',
			}),
			backgroundClip: {
				'text': 'text',
			},
			textColor: {
				'transparent': 'transparent',
			},
			fontFamily: {
				sans: ["sans-serif"],
			},
			typography: {
				DEFAULT: {
					css: {
						p: {
							fontSize: "1.125rem",
							lineHeight: "1.75",
						},
						h1: {
							fontSize: "4rem",
							lineHeight: "1",
							fontWeight: "700",
						},
						h2: {
							fontSize: "3rem !important",
							lineHeight: "1 !important",
							fontWeight: "700 !important",
						},
						h3: {
							fontSize: "2.25rem",
							lineHeight: "1.75rem",
							fontWeight: "700",
						},
						h4: {
							fontSize: "1.875rem !important",
							lineHeight: "2.25rem !important",
							fontWeight: "700 !important",
						},
						h5: {
							fontSize: "1.5rem",
							lineHeight: "2rem",
							fontWeight: "700",
						},
						h6: {
							fontSize: "1.25rem",
							lineHeight: "2.5rem",
							fontWeight: "700",
							marginTop: "1.25em",
							marginBottom: "1.25em",
						},
						small: {
							fontSize: "1rem !important",
							lineHeight: "1.5rem !important",
							fontWeight: "700",
							textDecoration: "none !important",
						},
						':is(h1, h2, h3, h4, h5, h6) > em': {
							fontStyle: 'normal',
							backgroundClip: 'text',
							color: 'transparent',
						},

					},
				},

			},
			gridTemplateColumns: {
				fluid:
					'repeat(auto-fit, minmax(var(--tw-fluid-col-min, 20rem), var(--tw-fluid-col-max, 1fr)))',
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-in forwards',
				'grow-in': 'grow-in 0.25s ease-in-out forwards',
				blink: 'blink-caret .75s steps(17, end) infinite',
				typewriter: 'typing 2s steps(30, end)',
				'spin-slow': 'spin 5s linear infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				'grow-in': {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
				typing: {
					'0%': { width: 0 },
					'100%': { width: '100%' },
				},
				'blink-caret': {
					'50%': { opacity: 0 },
				},
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('./src/utils/tailwindcss-plugin-theme')({
			themes,
		}),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
		}),
		require('tailwind-scrollbar'),
	],
}
