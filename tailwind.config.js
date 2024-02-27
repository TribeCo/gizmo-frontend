/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		screens: {
			sm: {'max':"480px"},
			md: {'max':"768px"},
			lg: {'max':"976px"},
			xl: {'max':"1440px"},
		},
		colors: {
			palette: {
				"blue-light": "#8ECDDD",
				blue: "#22668D",
				"blue-dark": "#252B48",
				orange: "#FFCC70",
				yellow: "#FFFADD",
			},
		},
	},
	plugins: [],
};
