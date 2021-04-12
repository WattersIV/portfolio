import { Typography, Grow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import headshot from '../pictures/Headshot.jpg'
import ContactButton from './ContactButton'
import { theme } from '../theme/theme'
import React, { useState, useEffect } from 'react'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  nameIntroductionContainer: {
    display: 'flex',
    width: '100%',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  pictureContainer: {
    height: '300px',
    width: '100%',
  },
  headshotPic: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
  },
  landingSummary: {
    display: 'inline-flex',
    width: '50%',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  brightText: {
    color: `${theme.palette.primary.contrastText}`,
  },
  nameAndPicture: {
    display: 'flex',
    flexDirection: 'column',
  },
  aboutMe: {
    width: '535px',
    color: `${theme.palette.text.primary}`,
    [theme.breakpoints.down('sm')]: {
      marginTop: '25px',
    }
  },
  greenText: {
    color: `${theme.palette.secondary.main}`,
  },
}))

export default function LandingPage() {
  const classes = useStyles(theme)
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMobile } = useScreenSize()

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 800)
  }, [])

  return (
      <Grow in={isLoaded} timeout={800}>
    <div className={classes.nameIntroductionContainer}>
        <div className={classes.nameAndPicture}>
          <Typography variant='subtitle1' className={classes.greenText}>
            Welcome! My name is
          </Typography>
          <Typography variant='h1' className={classes.brightText} style={isMobile ? {fontSize: '55px'} : {}}>
            Bill Watters IV
          </Typography>
            {!isMobile && (
          <div style={{ flexDirection: 'row', display: 'inline-flex', justifyContent: 'space-between', alignSelf: 'center', }}>
            <div className={classes.pictureContainer}>
              <img src={headshot} alt="Bill's Headshot" className={classes.headshotPic} />
            </div>
          </div>
            )}
        </div>
      <div className={classes.landingSummary}>
        <Typography variant={isMobile ? 'h4' : 'h3'} className={classes.aboutMe} >
          I am a software developer based in Toronto, ON.
          I specialize in bringing ideas to life by building beautiful, interactive products for the web.
            <br />
          <ContactButton />
        </Typography>
      </div>
    </div>
    </Grow>
  )
}