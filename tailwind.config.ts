/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx, mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // Cores personalizadas
          'custom-gray': {
            DEFAULT: '#2e2e2e', // Cor principal
            dark: '#191919',   // Tom mais escuro
            light: '#4a4a4a', // Tom claro
          },
          'custom-brown': {
            DEFAULT: '#503C3C', // Cor marrom personalizada
            light: '#6a4f4f',
          },
        },
      },
    },
    plugins: [],
  };
  