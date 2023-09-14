/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			green: '#495e57',
			yellow: '#f4ce14',
		},
		fontFamily: {
			karla: ['Karla', 'sans-serif'],
		},
	},
	plugins: [],
};
