import { createTheme } from '@mui/material/styles';
import mainCss from './theme';

const theme = createTheme(mainCss);
export default theme;




 /*
 theme config defination:
 Imagine theme.js is your ingredients list (sugar, flour, eggs), 
 and themeConfig.js is the kitchen tool (createTheme) that mixes 
 them into a cake (MUI theme).

Then, ThemeProvider serves this "cake" to your whole app.
*/