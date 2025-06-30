// homeStyles.js
import { useTheme } from '@mui/material/styles';

const useHomeStyles = () => {
  const theme = useTheme();

  return {
    container: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(4),
      minHeight: '100vh',
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.8rem',
    },
    description: {
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(3),
    },
  };
};

export default useHomeStyles;
