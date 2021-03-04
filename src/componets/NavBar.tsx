import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import NavButton from './NavButton'
import ResumeButton from './ResumeButton'
import github from '../pictures/github-logo.svg'
import linkedIn from '../pictures/linkedin-logo.svg'
import { Link } from 'react-scroll'
import { githubURL, linkedInURL} from '../config'


const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    height: '40px',
    width: '100vw',
    display: 'flex',
  },
  resume: {
    display: 'flex',
  },
  scrollToButtons: {
    display: 'flex',
  },
  leftNav: {
    height: '100%',
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '20%',
  },
  imgScaling: {
    maxWidth: '100%',
    height: 'auto',
  }
})) 
  
  
export default function NavBar () {
  const classes = useStyles()
  return (
    <div className={classes.navBarContainer}>
      <div className={classes.leftNav}>
        <div className={classes.resume}>
          <ResumeButton />
        </div>
        <div className={classes.scrollToButtons}>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
            <NavButton name='About' />
          </Link>
          <Link activeClass="active" to="experience" spy={true} smooth={true} duration={700}>
            <NavButton name='Experience'/>
          </Link>
          <Link activeClass="active" to="work" spy={true} smooth={true} duration={900}>
            <NavButton name='My Work'/>
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1100}>
            <NavButton name='Contact'/>
          </Link>
        </div>
      </div>
      <div className={classes.rightNav}>
      <a href={`${linkedInURL}`} style={{ maxHeight: '40px', maxWidth: '50px'}}>
        <img className={classes.imgScaling} src={linkedIn} alt="LinkedIn profile link" style={{ paddingRight: '10px' }}/>
      </a>
      <a href={`${githubURL}`} style={{ maxHeight: '40px', maxWidth: '40px'}}>
        <img className={classes.imgScaling} src={github} alt="Github profile link" />
      </a>
      </div> 
    </div>
  )
}
