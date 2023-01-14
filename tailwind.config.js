/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            colors: {
                "color-b": "#191919",
                "c-blue": "#118DA8 ",
            },
            fontFamily: {
                f: ["DM Sans", "sans-serif"],
            },
        },
        screens: {
            "3xl": { max: "2660px" },
            // => @media (max-width: 1660px) { ... }

            "2xl": { max: "17535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "640px" },
            // => @media (max-width: 640px) { ... }
        },
        container: {
            padding: "10px",
            center: true,
        },
    },
    plugins: [],
};