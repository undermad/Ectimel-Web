/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
        },

        colors: {
            'ectimel-mouse': '#40abe7',
            'ectimel-grey-light': '#e8eaea',
            'ectimel-grey': '#C5C1C0',
            'ectimel-black': '#0A1612',
            'ectimel-navy': {
                10: '#fcfcfc',
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
            'ectimel-layout-from': '#2b3b39',
            'ectimel-layout-to': '#272731',
            'ectimel-yellow': '#F7CE3E',
            'ectimel-red': '#8a161c',
            'ectimel-button-shape': '#a21717',


            extend: {},
        }
    },
    plugins: [],
}

