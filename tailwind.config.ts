import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-color": "#dbeafe", //blue
                "second-color": "#9ca3af", //gray
                "third-color": "#dc9db0", //pick
                "fourth-color": "#545454", //black
                "fifth-color": "#a77890", //pick text
                "sixth-color": "#f1f7ff", //white
                //"primary-color": "#dbeafe",//blue
                //"second-color": "#9ca3af", //gray
                "second-bg-color": "#fafbf8",
                "text-primary-color": "#dc9db0", //pink
                "text-second-color": "#9ca3af", //gray
            },
        },
    },
    plugins: [],
};
export default config;
