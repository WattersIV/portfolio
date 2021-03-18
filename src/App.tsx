import React, { createContext } from 'react';
import { ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LandingPage   from './componets/LandingPage'
import AboutMe from './componets/AboutMe'
import WorkExperience from './componets/WorkExperience'
import Projects from './componets/Projects'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import NavBar from './componets/NavBar'
import img from './pictures/greenBackground.jpg'
import grayGreen from './pictures/grayGreen.jpg'
import { theme } from './theme/theme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  wrapper: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
  },
  landingBackground: {
    backgroundImage: `url(${img})`,
    backgroundSize: '100vw',
    height: '60vh',
  },
}))

export const Theme = createContext<{}> ({
  theme,
})


function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div className={classes.landingBackground}>
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
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
