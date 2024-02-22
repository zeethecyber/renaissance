/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8EAFF",
        dark1: "#191817",
        dark2: "#312923",
      },
      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
        instrument: ["Instrument Serif", "sans-serif"],
        victor: ["Victor Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
