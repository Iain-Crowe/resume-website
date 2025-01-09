/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				night: {
					DEFAULT: "#141414",
					100: "#040404",
					200: "#080808",
					300: "#0c0c0c",
					400: "#101010",
					500: "#141414",
					600: "#434343",
					700: "#727272",
					800: "#a1a1a1",
					900: "#d0d0d0",
				},
				snow: {
					DEFAULT: "#fef8f8",
					100: "#570c0c",
					200: "#af1919",
					300: "#e54747",
					400: "#f19f9f",
					500: "#fef8f8",
					600: "#fef8f8",
					700: "#fefafa",
					800: "#fefbfb",
					900: "#fffdfd",
				},
				cerulean: {
					DEFAULT: "#2680a6",
					100: "#081a21",
					200: "#0f3343",
					300: "#174d64",
					400: "#1e6685",
					500: "#2680a6",
					600: "#37a3d2",
					700: "#69badd",
					800: "#9bd1e8",
					900: "#cde8f4",
				},
				electric_blue: {
					DEFAULT: "#70f1ff",
					100: "#004249",
					200: "#008493",
					300: "#00c6dc",
					400: "#27e9ff",
					500: "#70f1ff",
					600: "#8df4ff",
					700: "#a9f6ff",
					800: "#c6f9ff",
					900: "#e2fcff",
				},
				shamrock_green: {
					DEFAULT: "#109648",
					100: "#031e0f",
					200: "#063d1d",
					300: "#0a5b2c",
					400: "#0d7a3a",
					500: "#109648",
					600: "#16d666",
					700: "#45ec8b",
					800: "#83f2b1",
					900: "#c1f9d8",
				},
			},
		},
		screens: {
			sm: "640px", // Small screens
			md: "768px", // Medium screens
			lg: "1024px", // Large screens
			xl: "1280px", // Extra large screens
		},
	},
	plugins: [],
};
