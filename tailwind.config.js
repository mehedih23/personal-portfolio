module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#111111",
          "secondary": "#212121",
          "accent": "#6b6b6b",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#ff651c",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner-background': "url('/src/assets/background.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}