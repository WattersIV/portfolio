import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import LandingPage from './componets/LandingPage'
import AboutMe from './componets/AboutMe'
import WorkExperience from './componets/WorkExperience'
import Projects from './componets/Projects'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import NavBar from './componets/NavBar'
import Loader from './componets/Loader'
import { theme } from './theme/theme'
import handleViewport from 'react-in-viewport'

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
    height: '60vh',
  },
}))


const WorkXpWrapper = handleViewport(WorkExperience, {}, { disconnectOnLeave: true })
const ProjectsWrapper = handleViewport(Projects, {}, { disconnectOnLeave: true })

function App() {
  const classes = useStyles(theme)
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={classes.root}>
      {isLoading ? (
        <Loader />
      ) : (
          <>
            <div className={classes.landingBackground}>
              <NavBar />
              <div className={classes.wrapper}>
                <LandingPage />
              </div>
            </div>
            <div style={{ backgroundColor: theme.palette.primary.main }}>
              <div className={classes.wrapper} >
                <AboutMe />
                <WorkXpWrapper />
                <ProjectsWrapper />
                <Contact />
                <Footer />
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default App;
