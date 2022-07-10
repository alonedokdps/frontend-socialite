/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				'radius-10px': '10px',
			},
			colors: {
				'primary-dark': '#18191a',
				'primary-white': '#f1f1f1',
				'primary-blue': '#2563eb',
				'primary-green': '#059669',
				'primary-grey-200': '#333333',
				'primary-grey-400': '#232626',
				'primary-grey-50': '#8ea3af',
				'light-grey-100': '#f0f2f5',
				'light-greyBlue': '#e5edff',
				'light-grey-150': '#f0f2f5',
				'light-black': '#2d2d2d',
				'light-blue': '#2563eb',
				'light-grey-300': '#6b7280',
				'color-red-pro': '#ec5252',
				'color-blue-pro': '#4761ff',
				'color-green-pro': '#38b653',
				'yellow-500': '#f59e0b',
			},
		},
		screens: {
			'lgConfig': { 'min': '0px', 'max': '995px' },
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		plugins: [],
	},
};
