import { makeStyles } from '@material-ui/core/styles'
import { Slide, useScrollTrigger, Fade } from '@material-ui/core'
import NavButton from './NavButton'
import ResumeButton from './ResumeButton'
import { Link } from 'react-scroll'
import { githubURL, linkedInURL } from '../config'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { theme } from '../theme/theme'
import useWindowSize from '../hooks/useWindowSize'
import React, { useState, useEffect } from 'react'
import logo from '../pictures/IV.svg'
import droplet from '../pictures/water-drop.svg'

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
    marginLeft: '10px',
    marginRight: '10px',
    fontSize: 'xxx-large',
    '&:hover': {
      fill: `${theme.palette.secondary.main}`,
    },
  },
  github: {
    fill: 'white',
    height: '100%',
    fontSize: '40px',
    '&:hover': {
      fill: `${theme.palette.secondary.main}`,
    },
  },
  wrapper: {
    paddingLeft: '50px',
    paddingRight: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto'
  },
  logo: {
    position: 'absolute',
    left: '55px',
    top: '25px',
    height: '50%',
  },
  logoContainer: {
    '&:hover, &:focus': {
      cursor: 'pointer',
      '& $path': {
        fill: `${theme.palette.secondary.main}`,
      },
    },
    '&:active': {
      outline: `1px solid ${theme.palette.secondary.main}`,
    }
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
  const [renderLogo, setRenderLogo] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  })
  useEffect(() => {
    setTimeout(() => {
      setRenderLogo(true)
    }, 1100)
  })

  return (
    <HideOnScroll {...props}>
      <div className={classes.navBarContainer}>
        <Slide direction="right" in={isLoaded} timeout={1000} mountOnEnter unmountOnExit>
          <div id='wrapper' className={classes.wrapper} >
            <Fade in={renderLogo} timeout={500} >
              <div className={classes.logoContainer} onClick={() => window.location.reload()} >
                <Droplet />
                <img src={logo} alt='logo Text' className={classes.logo} />
              </div>
            </Fade>
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
              <div className={classes.resume} >
                <ResumeButton />
              </div>
              <a href={`${linkedInURL}`} aria-label="LinkedIn link">
                <LinkedInIcon className={classes.linkedIn} />
              </a>
              <a href={`${githubURL}`} aria-label="Github link">
                <GitHubIcon className={classes.github} />
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </HideOnScroll>

  )
}



const Droplet = () => {
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      //@ts-ignore
      width="50px" height="50px" viewBox="0 0 196.096 196.096" style={{ enableBackground: "new 0 0 196.096 196.096", overflow: 'visible' }}
      xmlSpace="preserve">
      <g>
        <g>
          <path id='path' fill='#0a192f' stroke='#64ffda' strokeWidth='6' d="M96.103,0.799c-3.025,3.166-74.198,77.98-74.198,119.158c0,41.99,34.156,76.139,76.143,76.139
			c42.001,0,76.143-34.153,76.143-76.139c0-41.178-71.171-115.993-74.198-119.158C98.972-0.267,97.114-0.267,96.103,0.799z"/>
        </g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  )
}