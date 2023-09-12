import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            'ectimel-mouse': '#624bfc',
            'ectimel-grey-light': '#e8eaea',
            'ectimel-grey': '#C5C1C0',
            'ectimel-black': '#0A1612',
            'ectimel-navy': {
                100: '#e8eaea',
                200: '#d1d4d6',
                300: '#babfc1',
                400: '#a3a9ac',
                500: '#8d9498',
                600: '#767f83',
                700: '#5f696e',
                800: '#485459',
                900: '#313e45',
                950: '#1A2930',
            },
            'ectimel-yellow': '#F7CE3E',
            'ectimel-red': '#8a161c',


            extend: {},
        }
    },
    plugins: [],
}

