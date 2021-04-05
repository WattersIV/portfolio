import { makeStyles } from '@material-ui/core/styles'
import { Typography, Slide, useScrollTrigger } from '@material-ui/core'
import NavButton from './NavButton'
import ResumeButton from './ResumeButton'
import { Link } from 'react-scroll'
import { githubURL, linkedInURL } from '../config'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { theme } from '../theme/theme'
import useWindowSize from '../hooks/useWindowSize'
import React, { useState, useEffect } from 'react'


const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    height: '80px',
    width: '100vw',
    display: 'flex',
    position: 'fixed',
    top: '0',
    justifyContent: 'space-between',
    backgroundColor: `${theme.palette.primary.main}`,
    zIndex: 99,
  },
  resume: {
    display: 'flex',
  },
  scrollToButtons: {
    display: 'flex',
  },
  rightNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '20%',
  },
  imgScaling: {
    maxWidth: '100%',
    height: 'auto',
  },
  socials: {
    display: 'flex',
  },
  linkedIn: {
    fill: 'white',
    height: '100%', 
    fontSize: 'xxx-large',
    '&:hover': {
      fill: `${theme.palette.secondary.main}`,
    },
  },
  github: {
    fill: 'white', 
    height: '100%', 
    fontSize: '40px', 
    marginLeft: '10px',
    '&:hover' : {
      fill: `${theme.palette.secondary.main}`,
    },
  },
  }))

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger();
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props: any) {
  const classes = useStyles(theme)
  const [isLoaded, setIsLoaded] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  })

  return (
    <HideOnScroll {...props}>
        <div className={classes.navBarContainer}>
        <Slide direction="right" in={isLoaded} timeout={1000} mountOnEnter unmountOnExit>
          <div id='wrapper' style={{ maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto' }} >
            <div className={classes.resume}>
              <ResumeButton />
            </div>
            <div id='scrollButtons' className={classes.scrollToButtons}>
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                <NavButton name='About' />
              </Link>
              <Link activeClass="active" to="experience" spy={true} smooth={true} duration={700}>
                <NavButton name='Experience' />
              </Link>
              <Link activeClass="active" to="work" spy={true} smooth={true} duration={900}>
                <NavButton name='My Work' />
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1100}>
                <NavButton name='Contact' />
              </Link>
            </div>
            <div className={classes.socials}>
              <a href={`${linkedInURL}`} aria-label="LinkedIn link">
                <LinkedInIcon className={classes.linkedIn}/>
              </a>
              <a href={`${githubURL}`}  aria-label="Github link">
                <GitHubIcon className={classes.github} />
              </a>
            </div>
          </div>
    </Slide>
        </div>
      </HideOnScroll>

  )
}
