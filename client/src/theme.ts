import { createTheme } from '@mui/material/styles';

const lightOrangeTheme = createTheme({
  palette: {
    primary: {
      main: '#FFA726', // Light orange primary color
      light: '#FFB74D', // A lighter shade of orange
      dark: '#FB8C00', // A darker shade of orange
      contrastText: '#FFFFFF', // Text color on primary buttons
    },
    secondary: {
      main: '#FFCC80', // Lighter orange secondary color
      light: '#FFE0B2', // Even lighter shade of orange
      dark: '#FFB74D', // Darker shade of secondary orange
      contrastText: '#000000', // Text color on secondary buttons
    },
    background: {
      default: '#FFF3E0', // Light orange background
      paper: '#FFE0B2', // Background for paper components
    },
    text: {
      primary: '#4E342E', // Text color for main content
      secondary: '#6D4C41', // Text color for secondary content
    },
  },
});

export default lightOrangeTheme;
