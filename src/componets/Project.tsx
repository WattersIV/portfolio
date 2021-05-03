import { Typography, Paper, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'
import ProjectDetails from './ProjectDetails'
import communitySoccerPic from '../pictures/communitySoccerScaled.png'
import jungleRailsPic from '../pictures/jungleRailsScaled.png'
import schedulerPic from '../pictures/schedulerScaled.png'
import construction from '../pictures/devConstruction.png'
import React, { useEffect, useState } from 'react'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  projectCard: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    backgroundColor: `${theme.palette.secondary.main}`,
    width: '100%',
    height: '100%',
    '&:hover': {
      background: 'transparent',
      '& img': {
        filter: 'none',
        mixBlendMode: 'normal',
      },
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      position: 'static',
      backgroundColor: 'transparent',
    }
  },
  projectContainer: {
    paddingTop: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '550px',
  },
  firstProjectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '550px',
  },
  picture: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    mixBlendMode: 'multiply',
  },
}))


export default function Project(props: any) {
  const classes = useStyles(theme)
  const [isVisible, setIsVisible] = useState(false)
  const { isMobile } = useScreenSize()
  const { project, isFirst, inverse, inViewport, forwardedRef } = props
  const slideDirection = inverse ? 'left' : 'right'
  const projectPicture = project.title === 'Community Soccer'
    ? communitySoccerPic
    : project.title === 'Jungle Rails'
      ? jungleRailsPic
      : project.finished
        ? schedulerPic
        : construction
  //Need var to stay true after observer finds it first time 
  useEffect(() => {
    if (inViewport === true) {
      setIsVisible(true)
    }
  }, [inViewport])
  console.log(inViewport)
  return (
    <span ref={forwardedRef}>
      <Slide in={isVisible} direction={slideDirection} timeout={1500} mountOnEnter unmountOnExit>
        <div className={isFirst ? classes.firstProjectContainer : classes.projectContainer}>
          <ProjectDetails inverse={inverse} project={project} />
            {!isMobile && (
            <div className={classes.projectCard} style={project.finished ? {} : { backgroundColor: 'transparent' }} >
              <img src={projectPicture} alt={`${project.title} image`} className={classes.picture} style={project.finished ? {} : { mixBlendMode: 'normal' }} />
            </div>
            )}
        </div>
      </Slide>
    </span>
  )
}