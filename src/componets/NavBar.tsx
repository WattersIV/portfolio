import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import NavButton from './NavButton'
import ResumeButton from './ResumeButton'
import github from '../pictures/github-logo.svg'
import linkedIn from '../pictures/linkedin-logo.svg'


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
          <NavButton name='About' />
          <NavButton name='Experience'/>
          <NavButton name='My Work'/>
          <NavButton name='Contact'/>
        </div>
      </div>
      <div className={classes.rightNav}>
      <img src={linkedIn} alt="LinkedIn profile link" style={{ paddingRight: '10px' }}/>
      <img src={github} alt="Github profile link" />
      </div> 
    </div>
  )
}
