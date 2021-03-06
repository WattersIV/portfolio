import { Fab, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    width: '200px',
    marginTop: '25px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
 
export default function ExperienceButton (props: any) {
  const classes = useStyles()
  const { name, setJobType, jobs } = props
  return (
    <div className={classes.buttonWrapper}>
      {jobs === name ? (
        <Fab variant='extended' size='large' className={classes.button} color='primary' onClick={setJobType}>
          {name}
        </Fab>
      ) : (
        <Fab variant='extended' size='large' className={classes.button} color='secondary' onClick={setJobType}>
          {name}
        </Fab>
      )}
    </div>
  )
}