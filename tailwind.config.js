/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"color-b": "#191919",
				"c-blue": "#118DA8 ",
				"rg-blue": "rgba(255, 255, 255, 0.7)",
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

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "800px" },
			// => @media (max-width: 800px) { ... }

			sm: { max: "640px" },
			// => @media (max-width: 640px) { ... }

			mos: { max: "425px" },
			// => @media (max-width: 425px) { ... }

			mo: { max: "375px" },
			// => @media (max-width: 375px) { ... }
		},
		container: {
			padding: "30px",
			overflow: "hidden",
			center: true,
		},
	},
	plugins: [],
};
