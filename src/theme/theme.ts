import { createMuiTheme } from '@material-ui/core'

export const padding = '100px'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#fff',
    }, 
    secondary: {
      main: '#0000ff',
      contrastText: '#fff',
    },
    error: {
      main: '#ff0000'
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
