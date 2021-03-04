import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Project from './Project'
import { padding } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: `${padding}`,
    paddingBottom: `${padding}`,
  },
}))


export default function Projects () {
  const classes = useStyles()

  return (
    <div className={classes.projectsContainer} id='work'>
      <Typography variant='h2' color='primary' align='center'>
        Projects and Pages I've Built
      </Typography>
        <Project />
    </div>
  )
}