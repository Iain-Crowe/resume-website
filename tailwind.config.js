/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                "theme-gray": {
                    DEFAULT: "#DBDBE1",
                    light: "#ECECEF",
                    dark: "#C9C9D3",
                },
                "theme-orange": {
                    DEFAULT: "#FC440F",
                    light: "#FE6A3B",
                    dark: "#E33D0E",
                },
                "theme-green": {
                    DEFAULT: "#32C530",
                    light: "#53D74A",
                    dark: "#2CB129",
                },
                "theme-dark-green": {
                    DEFAULT: "#259023",
                    light: "#2D9F29",
                    dark: "#207C1E",
                },
                "theme-dark": {
                    DEFAULT: "#0D171C",
                    light: "#1A2124",
                    dark: "#0A1315",
                },
                "theme-blue": {
                    DEFAULT: "#3490DC",
                },
            },
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
