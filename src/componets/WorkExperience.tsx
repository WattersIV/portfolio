import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ExperinceButton from './ExperienceButton'
import { padding } from '../theme/theme'
import SelectJob from './SelectJobOld'
import JobInfo from './JobInfoOld'
import React, { useState } from 'react'
import VerticalTabs from './SelectJob'

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
    paddingTop: `${padding}`,
    paddingBottom: `${padding}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
})) 
  
  
export default function WorkExperience () {
  const classes = useStyles()
  const [jobType, setJobType] = useState('Dev Jobs')
  return (
    <div className={classes.workExperienceWrapper} id='experience'>
      <Typography variant='h2' color='primary'>
        Work Experience
      </Typography>
      <div className={classes.buttonWrapper}>
        <ExperinceButton name='Dev Jobs' setJobType={() => setJobType('Dev Jobs')} jobs={jobType}/>
        <ExperinceButton name='Other Jobs' setJobType={() => setJobType('Other Jobs')} jobs={jobType}/>
        <ExperinceButton name='Volunteering' setJobType={() => setJobType('Volunteering')} jobs={jobType}/>
      </div>
      <div className={classes.jobSelector}>
        <div>
          <VerticalTabs jobs={jobType}/>
        </div>
      </div>
    </div>
  )
}