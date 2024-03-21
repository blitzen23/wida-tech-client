/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                transparenting: {
                    '0%, 75%': {
                        opacity: 1,
                        zIndex: 50,
                    },
                    '100%': {
                        opacity: 0,
                        zIndex: 0,
                    },
                },
            },
            animation: {
                'slowly-transparent': 'transparenting 3s ease-in-out forwards',
            },
        },
    },
    plugins: [],
};
