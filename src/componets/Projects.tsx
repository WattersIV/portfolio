import { Typography, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Project from './Project'
import { sectionPadding, titlePadding } from '../theme/theme'
import { projects } from '../config'
import handleViewport from 'react-in-viewport'
import React, { useState, useEffect } from 'react'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
  },
  title: {
    paddingBottom: `${titlePadding}`,
    color: `${theme.palette.primary.contrastText}`,
  },
}))

const ProjectWrapper = handleViewport(Project, {}, { disconnectOnLeave: true} )

export default function Projects (props: any) {
  const classes = useStyles()
  const { inViewport, forwardedRef } = props;
  const [isVisible, setIsVisible] = useState(false)
  const { isMobile } = useScreenSize()

  //Need var to stay true after observer finds it first time 
  useEffect(() => {
    if (inViewport === true) {
      setIsVisible(true)
    }
  }, [inViewport])
  
  return (
    <div className={classes.projectsContainer} id='work' >
      <Fade in={isVisible} timeout={600}>
        <Typography variant={isMobile ? 'h3' :'h2'} align='center' className={classes.title} ref={forwardedRef}>
          Projects I've Built
        </Typography>
      </Fade>
      {projects.map((project, index) => {
        const inverse: boolean = index % 2 === 0 ? false : true
        const isFirst: boolean = index === 0    
        return <ProjectWrapper key={index} project={project} inverse={inverse} isFirst={isFirst}/>
      })}
    </div>
  )
}