import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import headshot from '../pictures/Headshot.jpg'
import ContactButton from './ContactButton'
import { theme } from '../theme/theme'
import React, { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  nameIntroductionContainer: {
    display: 'flex',
    width: '100%',
    marginTop: '100px',
  },
  pictureContainer: {
    height: '300px',
    width: '300px',
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
  },
  brightText: {
    color: `${theme.palette.primary.contrastText}`,
  },
  nameAndPicture: {
    display: 'flex',
    flexDirection: 'column',
  },
  aboutMe: {
    width: '500px',
    color: `${theme.palette.text.primary}`,
  },
  greenText: {
    color: `${theme.palette.secondary.main}`,
  },
}))

export default function LandingPage() {
  const classes = useStyles(theme)
  return (
    <div className={classes.nameIntroductionContainer}>
      <div className={classes.nameAndPicture}>
        <Typography variant='subtitle1' className={classes.greenText}>
          Welcome! My name is
        </Typography>
        <Typography variant='h1' className={classes.brightText}>
          Bill Watters
        </Typography>
        <div style={{ flexDirection: 'row', display: 'inline-flex', justifyContent: 'space-between' }}>
          <div className={classes.pictureContainer}>
            <img src={headshot} alt="Bill's Headshot" className={classes.headshotPic} />
          </div>
        </div>
      </div>
      <div className={classes.landingSummary}>
        <Typography variant='h3' className={classes.aboutMe} >
          I am a Web Developer based in Toronto, ON.
          I specialize in making interactive web applications using React and Node.js.
            <br />
          <ContactButton />
        </Typography>
      </div>
    </div>
  )
}