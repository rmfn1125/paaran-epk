/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 여기부터 우리가 쓸 커스텀 폰트들
        bioTitle: ['"Noto Sans KR"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
