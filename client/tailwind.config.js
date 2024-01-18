/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                nav_bg: "rgba(0, 0, 0, 0.75)",
                body: "rgba(221,221,221, 0.87)",
                purple: "rgba(202, 3, 252, 0.651)",
                "purple-light": "rgba(202, 3, 252, 0.3)",
            },
            fontFamily: {
                primary: ["Montserrat", "sans-serif"],
                second: ["Mukta", "sans-serif"],
            },
            keyframes: {
                "open-menu": {
                    "0%": { transform: "scaleY(0)" },
                    "80%": { transform: "scaleY(1.2)" },
                    "100%": { transform: "scaleY(1)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
