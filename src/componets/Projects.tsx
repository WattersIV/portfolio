import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Project from './Project'

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    paddingTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}))


export default function Projects () {
  const classes = useStyles()

  return (
    <div className={classes.projectsContainer}>
      <Typography variant='h2' color='primary' align='center'>
        Projects and Pages I've Built
      </Typography>
        <Project />
    </div>
  )
}