import { makeStyles } from '@material-ui/core/styles'
import { Typography, Slide, useScrollTrigger } from '@material-ui/core'
import NavButton from './NavButton'
import ResumeButton from './ResumeButton'
import github from '../pictures/github-logo.svg'
import linkedIn from '../pictures/linkedin-logo.svg'
import { Link } from 'react-scroll'
import { githubURL, linkedInURL } from '../config'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { theme } from '../theme/theme'
import useWindowSize from '../hooks/useWindowSize'


const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    height: '40px',
    width: '100vw',
    display: 'flex',
    position: 'fixed',
    top: '0',
    justifyContent: 'space-between',
    backgroundColor: `${theme.palette.primary.main}`,
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
  }
}))

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props: any) {
  const classes = useStyles(theme)
  const { width } = useWindowSize()
  return (
    <HideOnScroll {...props}>
      <div className={classes.navBarContainer}>
        <div id='wrapper' style={{ maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto' }} >
          <div className={classes.resume}>
            <ResumeButton />
          </div>
          <div className={classes.scrollToButtons}>
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
            <a href={`${linkedInURL}`} >
              <LinkedInIcon style={{ fill: 'white', height: '100%', fontSize: 'xx-large' }} />
            </a>
            <a href={`${githubURL}`} >
              <GitHubIcon style={{ fill: 'white', height: '100%', fontSize: '27px', marginLeft: '10px' }} />
            </a>
          </div>
        </div>
      </div>
    </HideOnScroll>
  )
}
