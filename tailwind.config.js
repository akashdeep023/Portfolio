/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				customeDark: {
					500: "#2F373B",
					600: "#101010",
				},
				customeGreen: {
					500: "#04ffbc",
					600: "#40fd0b",
				},
				customeLight: {
					500: "#c9fdff",
					600: "#d1d6ff",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
