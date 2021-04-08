import { makeStyles } from '@material-ui/core/styles'
import { Typography, Fade } from '@material-ui/core'
import ExperinceButton from './ExperienceButton'
import { sectionPadding, titlePadding } from '../theme/theme'
import React, { useState, useEffect } from 'react'
import SelectJob from './SelectJob'
import SelectJobMobile from './SelectJobMobile'
import { theme } from '../theme/theme'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  jobSelector: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
  },
  workExperienceWrapper: {
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }, 
  title: {
    paddingBottom: `${titlePadding}`,
    color: `${theme.palette.primary.contrastText}`,
  },
})) 
  
  
export default function WorkExperience (props: any) {
  const classes = useStyles(theme)
  const { inViewport, forwardedRef } = props;
  const [jobType, setJobType] = useState('Dev Jobs')
  const [value, setValue] = React.useState(0);
  const [isVisible, setIsVisible] = useState(false)
  const { isMobile } = useScreenSize()

  const handleClick = (jobType: string) => {
    setJobType(jobType)
    setValue(0)
  }
  //Need var to stay true after observer finds it first time 
  useEffect(() => {
    if (inViewport === true) {
      setIsVisible(true)
    }
  }, [inViewport])

  return (
    <Fade in={isVisible} timeout={2200} >
    <div className={classes.workExperienceWrapper} id='experience' ref={forwardedRef}>
      <Typography variant={isMobile ? 'h3' :'h2'} className={classes.title} >
        Work Experience
      </Typography>
      <div className={classes.buttonWrapper}>
        <ExperinceButton name='Dev Jobs' setJobType={() => handleClick('Dev Jobs') } jobs={jobType}/>
        <ExperinceButton name='Other Jobs' setJobType={() => handleClick('Other Jobs')} jobs={jobType}/>
        <ExperinceButton name='Volunteering' setJobType={() => handleClick('Volunteering')} jobs={jobType}/>
      </div>
      <div className={classes.jobSelector}>
        <div style={isMobile ? { width: '100%' } : {} }>
          {isMobile ? (
            <SelectJobMobile jobs={jobType} value={value} setValue={setValue} />
          ) : ( 
            <SelectJob jobs={jobType} value={value} setValue={setValue} />
          )} 
        </div>
      </div>
    </div>
    </Fade>
  )
}