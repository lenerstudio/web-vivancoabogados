/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1F3B5B', // Deep Navy
                neutral: '#E4E7EB', // Light Gray
                white: '#FFFFFF',
                accent: '#C9A646', // Elegant Gold
                'primary-dark': '#0f2641',
                'accent-dark': '#b08d2f',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
            keyframes: {
                'text-shimmer': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
            },
            animation: {
                'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
}
