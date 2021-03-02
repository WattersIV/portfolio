import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ExperinceButton from './ExperienceButton'
import SelectJob from './SelectJob'
import JobInfo from './JobInfo'

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
})) 
  
  
export default function WorkExperience () {
  const classes = useStyles()

  return (
    <>
      <Typography variant='h2' color='primary'>
        Work Experience
      </Typography>
      <div className={classes.buttonWrapper}>
        <ExperinceButton name='Dev Jobs'/>
        <ExperinceButton name='Other Jobs'/>
        <ExperinceButton name='Volunteering'/>
      </div>
      <SelectJob />
      <JobInfo />
      </>
  )
}