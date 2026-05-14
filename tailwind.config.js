/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        night: '#070707',
        ember: '#15110A',
        gold: '#D6A84F',
        ivory: '#FFF7E6',
        ash: '#A7A7A7'
      },
      boxShadow: {
        gold: '0 25px 90px rgba(214, 168, 79, 0.18)',
        velvet: '0 20px 80px rgba(0,0,0,.55)'
      },
      backgroundImage: {
        radialGold: 'radial-gradient(circle at top, rgba(214,168,79,.25), transparent 35%)',
        luxury: 'linear-gradient(135deg, #070707 0%, #15110A 50%, #070707 100%)'
      }
    }
  },
  plugins: []
}
