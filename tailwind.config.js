/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Ubuntu: ["Ubuntu Mono", "monospace"],
            },
            backgroundImage: {
                star: "url('https://cdn.wallpapersafari.com/1/97/co341S.jpg')",
            },
        },
    },
    plugins: [],
};
