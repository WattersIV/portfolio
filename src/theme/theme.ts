import { createMuiTheme } from '@material-ui/core'

export const sectionPadding = '100px'
export const titlePadding = '35px'

export const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#040c16',
      main: '#0a192f',
      light: '#112240',
      contrastText: '#fff',
    }, 
    secondary: {
      dark: '#00997a',
      main: '#64ffda',
      light: '#66ffe0',
      contrastText: '#000000',
    },
    error: {
      main: '#ff0000'
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    h1: {
      fontSize: '64px',
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
      fontSize: '20px',
      fontFamily: 'Calibre',
    },
    subtitle1: {
      fontSize: '18px',
      fontFamily: 'SF Mono',
    },
    subtitle2: {
      fontSize: '14px',
      fontFamily: 'SF Mono',
    },
  },
}) 
