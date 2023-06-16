/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('/public/long_profile.png')"
      },
      colors: {
        'moeur-purple': '#562b3e',
        'devil-gold': '#fec067'
      },
      height: {
        'hero': '500px'
      }
    },
  },
  plugins: [],
}
