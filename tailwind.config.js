/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			karla: ['var(--font-karla)'],
			markazi: ['var(--font-markazi)'],
		},
		extend: {
			colors: {
				green: '#495e57',
				yellow: '#f4ce14',
				white: '#fff',
			},
		},
	},
	plugins: [],
};
