import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { sectionPadding, titlePadding } from '../theme/theme'
import { theme } from '../theme/theme'
import LanguageTiles from './LanguageTiles'

const useStyles = makeStyles((theme) => ({
  aboutMeContainer: {
    width: '70%',
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    justifyContent: 'space-between',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    paddingBottom: `${titlePadding}`,
    color: `${theme.palette.primary.contrastText}`,
  },
  brightText: {
    color: `${theme.palette.primary.contrastText}`,
  },
  aboutMeText: {
    color: `${theme.palette.text.primary}`,
  }
}))
 
  
export default function AboutMe () {
  const classes = useStyles(theme)

  return (
    <div className={classes.aboutMeContainer} id='about'>
      <Typography variant='h2' align='center' className={classes.title}>
        About me
      </Typography>
      <div>
        <Typography variant='h3' align='center' className={classes.aboutMeText}>
        Hi there! I’m Bill, a Web Developer based in Toronto, ON.
        </Typography>
        <br /> 
        <Typography variant='h3' align='center' className={classes.aboutMeText}>
          Shortly after graduating with a B.A. in Sociology from Brock University, I was introduced to software development and my life changed. I fell in love with the complexity and problem solving presented in the challenges of coding.
        </Typography>
        <br />
        <Typography variant='h3' align='center' className={classes.aboutMeText}>
          I quit my job working at a group home to attend a web development bootcamp full time at Lighthouse Labs. After graduating from the bootcamp, I recieved an internship oppertunity at Honeybeehub where I was able to develop many features used on the website today.  
        </Typography>
        <div className={classes.skillsContainer}>
          {/* Make these Tiles that jump or something when you hover and add a logo for each */}
          <Typography variant='h3' className={classes.aboutMeText} align='center'>
            Here are some of my skills
          </Typography>
            <LanguageTiles />
        </div>
      </div> 
    </div>
  )
}