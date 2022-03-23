import {createTheme, Theme, ThemeOptions} from "@mui/material/styles";
// import {createTheme, Theme, ThemeOptions} from "@mui/system";
import {green, grey, teal} from "@mui/material/colors";
import {makeResponsive} from "./themeUtil";

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontSize: 14,
    fontFamily: [
      'Quicksand',
      'sans-serif',
      'Zilla Slab',
      'serif',
    ].join(','),
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          fontWeight: 600,
        },
        sizeMedium: {
          padding: '6px 22px',
        },
        sizeLarge: {
          padding: '9px 32px',
          fontSize: '1.2em',
          fontWeight: 600,
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 38,
          borderRadius: '3em'
        },
        avatar: {
          width: 30,
          height: 30,
        },
        label: {
          fontSize: '1.1em',
          margin: '0 5px'
        }
      }
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     i {
    //       font-weight: 500;
    //     }
    //   `,
    // }
  }
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#263238',
      paper: '#424242'
    },
    primary: {
      main: green[400],
      light: green[500],
      dark: green[800],
      contrastText: grey[800]
    },
    secondary: {
      main: green[300],
      light: green[500],
      dark: green[600],
      contrastText: teal[300]
    },
    // text: {
    //   primary: '#D32F2F',
    // }
  },
  ...commonThemeOptions,
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#f1f1f1',
      paper: '#FBFBFB'
    },
    primary: {
      main: green[500],
      light: green[500],
      dark: grey[100],
      contrastText: grey[50]
    },
    secondary: {
      main: green[600],
      light: green[600],
      dark: green[500],
      contrastText: teal[400]
    },
    common: {
      white: '#fefefe',
      black: '#000000'
    }
    // text: {
    //   primary: '#006064',
    // }
  },
  ...commonThemeOptions,
}

export const getTheme = (mode: 'dark' | 'light'): Theme => {
  const theme: Theme = mode === 'dark' ? createTheme(darkThemeOptions) : createTheme(lightThemeOptions);
  return makeResponsive(theme);
}

