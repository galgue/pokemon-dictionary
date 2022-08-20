/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'poke-blue': '#3B4CCA',
                'poke-yellow': '#FFDE00',
                'poke-yellow-dark': '#B3A125',
                'poke-red': '#FF0000',
                'poke-red-dark': '#CC0000',
            },
        },
    },
    plugins: [],
};
