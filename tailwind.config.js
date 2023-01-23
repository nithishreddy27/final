module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'provast': "url('https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app')"
      }
    },
  },
  plugins: [],
}