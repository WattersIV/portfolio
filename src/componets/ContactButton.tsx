import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { emailAddy } from '../config'

const useStyles = makeStyles((theme) => ({
  button: {
    width: '200px',
    marginTop: '50px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
 
export default function ContactButton () {
  const classes = useStyles()
  return (
    <div className={classes.buttonWrapper}>
      <a href={`mailto:${emailAddy}`}>
        <Button variant='outlined' size='large' className={classes.button} color='secondary'>
          Contact Me
        </Button>
      </a>
    </div>
  )
}