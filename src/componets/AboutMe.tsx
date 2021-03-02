import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  aboutMeContainer: {
    width: '70%',
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
  }
}))
 
  
export default function AboutMe () {
  const classes = useStyles()

  return (
    <div className={classes.aboutMeContainer}>
      <Typography variant='h2' color='primary' align='center'>
        About me
      </Typography>
      <br />
      <div>
        <Typography variant='h4' align='center' color='primary'>
        Hi there! I’m Bill, a Web Developer based in Toronto, ON.
        </Typography>
        <br /> 
        <Typography variant='h4' align='center' color='primary'>
          Shortly after graduating with a B.A. in Sociology from Brock University, I was introduced to software development and my life changed. I fell in love with the complexity and problem solving presented in the challenges of coding.
        </Typography>
        <br />
        <Typography variant='h4' align='center'color='primary'>
          I quit my job working at a group home to attend a web development bootcamp full time at Lighthouse Labs. After graduating from the bootcamp, I recieved an internship oppertunity at Honeybeehub where I was able to develop many features used on the website today.  
        </Typography>
        <div className={classes.skillsContainer}>
          <Typography variant='h4' color='primary'>
            My Current Skills Include:
          </Typography>
          <div className={classes.skillsList}> 
            <Typography variant='h4' color='primary'>
            -JS/Typescript (ES7+)
            </Typography>
            <Typography variant='h4' color='primary'>
              -React
            </Typography>
            <Typography variant='h4' color='primary'>
              -Node.js
            </Typography>
            <Typography variant='h4' color='primary'>
              -HTML {'&'} CSS
            </Typography>
            <Typography variant='h4' color='primary'>
              -Express
            </Typography>
            <Typography variant='h4' color='primary'>
              -MongoDB   
            </Typography>
          </div>
        </div>
      </div> 
    </div>
  )
}