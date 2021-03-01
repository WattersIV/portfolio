import React, { createContext } from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './componets/NavBar'
import LandingPage   from './componets/LandingPage'
import AboutMe from './componets/AboutMe'
import WorkExperience from './componets/WorkExperience'
import Projects from './componets/Projects'
import Contact from './componets/Contact'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  wrapper: {
    maxWidth: '1000px',
    margin: 'auto',
  },
  landingBackground: {
    backgroundColor: 'grey', 
    height: '60vh',
  },
}))

const theme = createMuiTheme({
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

export const Theme = createContext<{}> ({
  theme,
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div className={classes.landingBackground} style={{ backgroundColor: 'grey', height: '60vh' }}>
            <NavBar />
          <div className={classes.wrapper}>
            <LandingPage />
          </div>
        </div>
        <div className={classes.wrapper} >
          <AboutMe />
          <WorkExperience />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
