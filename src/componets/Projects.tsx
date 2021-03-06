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

const ProjectWrapper = handleViewport(Project, {}, { disconnectOnLeave: true })

export default function Projects(props: any) {
  const classes = useStyles()
  const { isMobile } = useScreenSize()

  return (
    <div className={classes.projectsContainer} id='work' >
      <Typography variant={isMobile ? 'h3' : 'h2'} align='center' className={classes.title} >
        Projects I've Built
        </Typography>
      {projects.map((project, index) => {
        const inverse: boolean = index % 2 === 0 ? false : true
        const isFirst: boolean = index === 0
        return <ProjectWrapper key={index} project={project} inverse={inverse} isFirst={isFirst} />
      })}
    </div>
  )
}