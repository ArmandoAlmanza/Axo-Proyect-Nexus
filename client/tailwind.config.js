/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem",
            },
            colors: {
                lily: {
                    100: "rgb(225, 196, 255)",
                    200: "rgb(214, 177, 251)",
                    300: "rgb(209, 180, 255)",
                    400: "rgb(168, 149, 198)",
                    500: "rgb(54, 34, 72)",
                },
                bluebell: {
                    100: "rgb(173, 216, 230)",
                    200: "rgb(112, 159, 192)",
                    300: "rgb(51, 102, 153)",
                },
                noir: {
                    100: "rgb(51, 51, 51)",
                    200: "rgb(33, 33, 33)",
                    300: "rgb(25, 25, 25)",
                    400: "rgb(54, 34, 72)",
                    purple: "rgb(26, 16, 35)",
                },
                leaf: {
                    100: "#D1F2EB",
                    200: "#C7ECEE",
                },
                dalia: {
                    100: "#FFF9D9",
                    200: "#F7E7B2",
                },
                garnet: {
                    100: "#FDD6C5",
                    200: "#F8B195",
                },
            },
            fontFamily: {
                primary: ["Poppins", "sans-serif"],
                secondary: ["Montserrat", "sans-serif"],
            },
            aspectRatio: {
                "4/3": "4 / 3",
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
