import { makeStyles } from '@material-ui/core/styles'
import { Typography, Divider, Fade } from '@material-ui/core'
import { sectionPadding, titlePadding } from '../theme/theme'
import { theme } from '../theme/theme'
import LanguageTiles from './LanguageTiles'
import softwareEngineer from '../pictures/softwareEngineer.png'
import { useEffect, useState } from 'react'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  aboutMeContainer: {
    width: '100%',
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
    display: 'flex',
  },
  brightText: {
    color: `${theme.palette.primary.contrastText}`,
  },
  aboutMeText: {
    color: `${theme.palette.text.primary}`,
  },
  aboutMeLink: {
    color: `${theme.palette.secondary.main}`,
    display: 'inline',
  },
  textPicContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  divider: {
    backgroundColor: '#233554',
    width: '40%',
    display: 'inline-flex',
    alignSelf: 'center',
    marginBottom: '20px',
    marginLeft: '10px',
  },
}))
 
  
export default function AboutMe () {
  const classes = useStyles(theme)
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile } = useScreenSize()

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 1800)
  }, [])

  return (
    <Fade in={isLoaded} timeout={1000}>
      <div className={classes.aboutMeContainer} id='about'>
        <div style={{ display: 'flex' }}> 
          <Typography variant={ isMobile ? 'h3' : 'h2' } align='center' className={classes.title}>
            About me
          </Typography>
          <Divider className={classes.divider}/>
        </div>
        <div>
        <div className={classes.textPicContainer} >
          <div id='Text Container' style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant={isMobile ? 'h5': 'h4' } className={classes.aboutMeText}>
            Hi there! I’m Bill, a software developer based in Toronto, ON.
            </Typography>
            <br /> 
            <Typography variant={isMobile ? 'h5': 'h4' } className={classes.aboutMeText}>
              In 2019, I graduated with a B.A. in Sociology. Shortly after graduating, I was introduced to software development. I loved the problem solving and logical thinking work required in the field.
              I started learning how to code over a few months to see if the intrest would fade; but it only grew.
            </Typography>
            <br />
            <Typography variant={isMobile ? 'h5': 'h4' } className={classes.aboutMeText}>
              In September 2020, I quit my job working at a group home to attend a web development bootcamp full time at Lighthouse Labs. In January 2021 after finishing bootcamp, I recieved an internship oppertunity at {' '}
              <a href={'https://www.honeybeehub.io'} target="_blank" rel="noreferrer">
                <Typography variant={isMobile ? 'h5': 'h4' } className={classes.aboutMeLink}> 
                  Honeybeehub
                </Typography>
                </a> 
              {' '} where I was able to develop many features used on the website today.  
            </Typography>
          </div>
          {!isMobile && (
            <div>
              <img src={softwareEngineer} alt='Software Engineer' />
            </div>
          )}
        </div>
          <div className={classes.skillsContainer}>
            {/* Make these Tiles that jump or something when you hover and add a logo for each */}
            <Typography variant='h4' className={classes.aboutMeText} align='center'>
              Here are some of my skills
            </Typography>
              <LanguageTiles />
          </div>
        </div> 
      </div>
    </Fade>
  )
}