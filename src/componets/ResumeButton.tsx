import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import resume from '../documents/resume.pdf'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  resumeText: {
    color: `${theme.palette.secondary.main}`,
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
  },
}))

export default function ResumeButton(props: any) {
  const classes = useStyles(theme)
  return (
    <a href={resume} rel="noopener noreferrer" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
      <Button variant='outlined' size='small' color='secondary' style={{ textTransform: "none" }}>
        <Typography className={classes.resumeText} variant='subtitle1' style={{ textTransform: 'none' }}>
          Resume
      </Typography>
      </Button>
    </a>
  )
}