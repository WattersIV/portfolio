import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ExperinceButton from './ExperienceButton'
import { padding } from '../theme/theme'
import SelectJob from './SelectJob'
import JobInfo from './JobInfo'

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

  return (
    <div className={classes.workExperienceWrapper}>
      <Typography variant='h2' color='primary'>
        Work Experience
      </Typography>
      <div className={classes.buttonWrapper}>
        <ExperinceButton name='Dev Jobs'/>
        <ExperinceButton name='Other Jobs'/>
        <ExperinceButton name='Volunteering'/>
      </div>
      <div className={classes.jobSelector}>
        <div>
          <SelectJob />
        </div>
        <div>
          <JobInfo />
        </div>
      </div>
    </div>
  )
}