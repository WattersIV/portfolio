import { createMuiTheme } from '@material-ui/core'

export const sectionPadding = '100px'
export const titlePadding = '35px'

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#222629',
      main: '#474B4F',
      light: '#6B6E70',
      contrastText: '#fff',
    }, 
    secondary: {
      dark: '#61892F',
      main: '#86C232',
      contrastText: '#fff',
    },
    error: {
      main: '#ff0000'
    },
    text: {
      primary: '#fff',
      secondary: '#000000',
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
