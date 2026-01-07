import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                repsol: {
                    orange: '#FF8200',
                    darkOrange: '#E65E00',
                    blue: '#002E6D',
                    darkBlue: '#001A40',
                },
            },

            animation: {
                gradient: 'gradient 8s linear infinite',
            },

            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
            },
        },
    },

    plugins: [forms],
};
