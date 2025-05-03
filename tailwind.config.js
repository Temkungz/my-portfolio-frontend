/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // ถ้าไฟล์อยู่ใน src/app
    "./src/pages/**/*.{js,ts,jsx,tsx}",    // ถ้ายังมีโฟลเดอร์ pages
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

  ],
}