module.exports = {
  presets: [
    require('./creative-tim.preset.js')
  ],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // Customizations specific to this project would go here
  theme: {
    extend: {
      minHeight: {
        "200-px": "200px",
      },
    }
  },
}
