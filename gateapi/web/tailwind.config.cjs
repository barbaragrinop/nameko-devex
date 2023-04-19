module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'dark-slate-blue': '#35344C', 
        'deep-purple': '#474374', 
        'lavander-grey': '#C3C1D7', 
        'white': '#FFFFFF', 
        'royal-blue': '#3F25C8', 
        'purple': '#745CF1', 
        'burnt-orange': '#E08F34', 
        'light-grey': '#E5E5E4', 
        'lavender': '#F3F1FE', 
        'snow-white': '#FCFCFD', 
      }, 
      animation: {
        "fade-in": "fadein 2s ease-in"
      }, 
      keyframes: {
        fadein: {
          "0%": {opacity: "0"},
          "50%": {opacity: "0.5"},
          "100%": {opacity: "1"},
        }
      }
    },
  },
  plugins: [

  ],
}