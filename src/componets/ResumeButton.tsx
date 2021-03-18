import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import resume from '../documents/resume.pdf'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
    marginLeft: '10px',
    border: '1px black solid'
  },
})) 
    
export default function ResumeButton (props: any) {
  const classes = useStyles(theme)
  return (
    <a href={resume} rel="noopener noreferrer" target="_blank">
      <Button className={classes.button} variant='contained' size='small' color='primary' >
        Resume
      </Button>
    </a>
  )
}