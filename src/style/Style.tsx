import { createTheme, adaptV4Theme } from '@mui/material/styles';

export const theme = createTheme(adaptV4Theme({
  typography: {
    body2: {
      fontSize: 14
    },
    h6: {
      fontWeight: 700,
      fontSize: 16
    }
  },
  palette: {
    primary: {
      main: '#2D4190',
      contrastText: '#fff'
    },
    secondary: {
      main: '#F9F9F9',
      contrastText: '#2D4190'
    }
  },
  overrides: {
    MuiButton: {
      
    }
  }
}))
