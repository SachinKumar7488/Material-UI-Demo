React + Vite


Technologies Used:

React

Vite

Material UI (MUI)

Emotion (for styling MUI components)

Fontsource (for custom fonts like Poppins, Roboto)

Project Structure:

mui-theme-demo/
│
├── src/
│   ├── components/
│   │   ├── HomePage.jsx         # Main landing page UI
│   │   └── HomeTheme.js         # Styled components for HomePage
│   ├── styles/
│   │   ├── theme.js             # Raw theme config (colors, fonts)
│   │   └── themeConfig.js       # Uses createTheme() to generate MUI theme
│   ├── App.jsx                  # Renders HomePage
│   └── main.jsx                 # Root file with ThemeProvider
│
├── public/
│   └── index.html               # Basic HTML template
│
├── package.json                # Scripts and dependencies
├── vite.config.js              # Vite bundler config
└── README.md                   # You're reading this!


How Theming Works
All design values like colors, fonts, font weights are defined in styles/theme.js.

These values are converted into a usable MUI theme using createTheme() in styles/themeConfig.js.

This theme is passed to the entire app using ThemeProvider in main.jsx.



Ex:
palette: {
  primary: { main: '#2E2E2E', contrastText: '#FFFFFF' },
  background: { default: '#F5F5F5', paper: '#FFFFFF' },
  text: { primary: '#2A2927', secondary: '#6C6C6C' },
},
typography: {
  fontFamily: `'Poppins', 'Roboto', 'sans-serif'`,
  fontWeightBold: 700,
}


 How to Run This Project
1. Clone the repo

git clone <repo-url>
cd mui-theme-demo

2. Install dependencies

npm install

3. Start the project

npm run dev
Then open http://localhost:5173 in your browser!