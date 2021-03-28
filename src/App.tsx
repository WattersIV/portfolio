import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import LandingPage   from './componets/LandingPage'
import AboutMe from './componets/AboutMe'
import WorkExperience from './componets/WorkExperience'
import Projects from './componets/Projects'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import NavBar from './componets/NavBar'
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
    backgroundColor: `${theme.palette.primary.main}`,
    backgroundSize: '100vw',
    height: '50vh',
  },
}))




function App() {
  const classes = useStyles(theme)
  return (
    <div className={classes.root}>
      
        <div className={classes.landingBackground}>
          <NavBar />
          <div className={classes.wrapper}>
            <LandingPage />
          </div>
        </div>
        <div style={{backgroundColor: theme.palette.primary.main}}>
          <div className={classes.wrapper} >
            <AboutMe />
            <WorkExperience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
