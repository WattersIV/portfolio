import { Fab } from '@material-ui/core'
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
  const { name } = props
  return (
    <div className={classes.buttonWrapper}>
      <Fab variant='extended' size='large' className={classes.button} color='secondary'>
        {name}
      </Fab>
    </div>
  )
}