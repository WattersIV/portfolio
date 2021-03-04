import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import resume from '../documents/resume.pdf'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
  }
})) 
    
export default function ResumeButton (props: any) {
  const classes = useStyles()
  return (
    <a href={resume} rel="noopener noreferrer" target="_blank">
      <Button className={classes.button} variant='contained' size='small' color='secondary'>
        Resume
      </Button>
    </a>
  )
}