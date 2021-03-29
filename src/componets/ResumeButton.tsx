import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import resume from '../documents/resume.pdf'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
    marginLeft: '10px',
    backgroundColor: `${theme.palette.primary.main}`,
  },
  resumeText: {
    color: `${theme.palette.primary.contrastText}`,
  }
}))

export default function ResumeButton(props: any) {
  const classes = useStyles(theme)
  return (
    <a href={resume} rel="noopener noreferrer" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
      <Typography className={classes.resumeText} variant='subtitle1' >
        RESUME
      </Typography>
    </a>
  )
}