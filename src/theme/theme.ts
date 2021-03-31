import { createMuiTheme } from '@material-ui/core'

export const sectionPadding = '100px'
export const titlePadding = '35px'

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#040c16',
      main: '#0a192f',
      light: '#205fac',
      contrastText: '#fff',
    }, 
    secondary: {
      dark: '#00997a',
      main: '#00ffcc',
      light: '#66ffe0',
      contrastText: '#000000',
    },
    error: {
      main: '#ff0000'
    },
    text: {
      primary: '#d0dae1',
      secondary: '#c1ced7',
    },
  },
  typography: {
    h1: {
      fontSize: '84px',
      fontFamily: 'Calibre',
    },
    h2: {
      fontSize: '48px',
      fontFamily: 'Calibre',
    },
    h3: {
      fontSize: '30px',
      fontFamily: 'Calibre',
    },
    h4: {
      fontSize: '18px',
      fontFamily: 'Calibre',
    },
    subtitle1: {
      fontSize: '16px',
      fontFamily: 'Quantico',
    },
    subtitle2: {
      fontSize: '14px',
      fontFamily: 'Quantico',
    },
  },
}) 
