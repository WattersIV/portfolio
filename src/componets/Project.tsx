import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProjectDetails from './ProjectDetails'

const useStyles = makeStyles((theme) => ({
  projectCard: {
    height: '400px',
    width: '800px',
    display: 'flex',
    alignSelf: 'flex-end',
  },
  projectContainer: {
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}))


export default function Project () {
  const classes = useStyles()

  return (
    <div className={classes.projectContainer}>
      <ProjectDetails />
      <Paper className={classes.projectCard} elevation={10}>
        <Typography color='primary' variant='h4'>
          Project Picture Here
        </Typography>
      </Paper>
    </div>
  )
}