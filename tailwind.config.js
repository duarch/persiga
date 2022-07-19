module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                // Set a custom responsive breakpoint for shorter screens,
                // so we can shrink the board text
                'sm-y': { raw: '(max-height: 600px)' },
            },
        },
    },
    plugins: [],
}