import { createMuiTheme } from '@material-ui/core'

export const sectionPadding = '100px'
export const titlePadding = '35px'

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#34414e',
      main: '#3b5065',
      light: '#416284',
      contrastText: '#fff',
    }, 
    secondary: {
      dark: '#075106',
      main: '#33ffd6',
      light: '#8be001',
      contrastText: '#000000',
    },
    error: {
      main: '#ff0000'
    },
    text: {
      primary: '#d0dae1',
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
