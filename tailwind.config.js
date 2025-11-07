// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0EA5A4',
        accent: '#0F1724',
        bg: '#F7F9FA',
        text: '#0B1220',
        muted: '#64748B',
      },
    },
  },
  plugins: [],
};
