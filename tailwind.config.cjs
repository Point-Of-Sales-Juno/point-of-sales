/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'customYellow': '#ffca40',
                'brightRed': '#c8161d',
                'subtleGray': '#808080',
                'offWhite': '#f8f8f7'
              },
        },
    },
    plugins: [],
};
