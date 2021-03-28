import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { sectionPadding, titlePadding } from '../theme/theme'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  aboutMeContainer: {
    width: '70%',
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30px',
    justifyContent: 'space-between',
    maxWidth: '500px',
    margin: 'auto',
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
        <Typography variant='h4' align='center' color='textPrimary'>
        Hi there! I’m Bill, a Web Developer based in Toronto, ON.
        </Typography>
        <br /> 
        <Typography variant='h4' align='center' color='textPrimary'>
          Shortly after graduating with a B.A. in Sociology from Brock University, I was introduced to software development and my life changed. I fell in love with the complexity and problem solving presented in the challenges of coding.
        </Typography>
        <br />
        <Typography variant='h4' align='center' color='textPrimary'>
          I quit my job working at a group home to attend a web development bootcamp full time at Lighthouse Labs. After graduating from the bootcamp, I recieved an internship oppertunity at Honeybeehub where I was able to develop many features used on the website today.  
        </Typography>
        <div className={classes.skillsContainer}>
          <Typography variant='h4' className={classes.brightText}>
            My Current Skills Include:
          </Typography>
          <div className={classes.skillsList}> 
            <Typography variant='h4' color='textPrimary'>
            -JS/Typescript
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -React
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -Node.js
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -HTML {'&'} CSS
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -Express
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -MongoDB   
            </Typography>
            <Typography variant='h4' color='textPrimary'>
              -SQL   
            </Typography>
          </div>
        </div>
      </div> 
    </div>
  )
}