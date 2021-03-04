import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
  }
})) 
  
  
export default function ResumeButton (props: any) {
  const classes = useStyles()
  return (
    <Button className={classes.button} variant='contained' size='small' color='secondary'>
      Resume
    </Button>
  )
}