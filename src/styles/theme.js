const mainCss = {
  palette: {
    primary: {
      main: '#9E9E9E',           // Jet Black
      contrastText: '#FFFFFF',   // White
    },
    secondary: {
      main: '#5C5C5C',           // Davy's Gray
    },
    background: {
      default: '#F5F5F5',        // White Smoke
      paper: '#FFFFFF',          // Pure White
    },
    text: {
      primary: '#2A2927',        // Charleston Green
      secondary: '#6C6C6C',      // Dim Gray
    },

    //Additional Colors u change from here 
    success: {
      main: '#4CAF50',           // Green
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336',           // Red
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',           // Amber
      contrastText: '#000000',
    },
    info: {
      main: '#2196F3',           // Blue 
      contrastText: '#FFFFFF',
    },
    neutral: {
      main: '#9E9E9E',           // Gray 
      contrastText: '#FFFFFF',
    },
    divider: '#E0E0E0',          // Light Gray
  },

  typography: {
    fontFamily: `'Poppins', 'Roboto', 'sans-serif'`,   //1st number font will be applied on your entire project
    fontWeightLight: 400,  // Light
    fontWeightRegular: 500, // Regular/Medium
    fontWeightBold: 700,    // Bold
  },
};

export default mainCss;
