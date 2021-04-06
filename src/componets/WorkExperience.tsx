import { makeStyles } from '@material-ui/core/styles'
import { Typography, Fade } from '@material-ui/core'
import ExperinceButton from './ExperienceButton'
import { sectionPadding, titlePadding } from '../theme/theme'
import React, { useState, useRef } from 'react'
import SelectJob from './SelectJob'
import { theme } from '../theme/theme'

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
  const ref = useRef(null)

  const handleClick = (jobType: string) => {
    setJobType(jobType)
    setValue(0)
  }

  return (
    <Fade in={inViewport} timeout={2200} >
    <div className={classes.workExperienceWrapper} id='experience' ref={forwardedRef}>
      <Typography variant='h2' className={classes.title} >
        Work Experience
      </Typography>
      <div className={classes.buttonWrapper}>
        <ExperinceButton name='Dev Jobs' setJobType={() => handleClick('Dev Jobs') } jobs={jobType}/>
        <ExperinceButton name='Other Jobs' setJobType={() => handleClick('Other Jobs')} jobs={jobType}/>
        <ExperinceButton name='Volunteering' setJobType={() => handleClick('Volunteering')} jobs={jobType}/>
      </div>
      <div className={classes.jobSelector}>
        <div>
          <SelectJob jobs={jobType} value={value} setValue={setValue} />
        </div>
      </div>
    </div>
    </Fade>
  )
}