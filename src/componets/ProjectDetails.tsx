import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: '50px',
    padding: '20px',
  },
  techStack: {
    display: 'flex',
    flexDirection: 'column',
  },
  techStackContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    justifyContent: 'space-around',
  },
  descriptionContainer: {
    padding: '20px',
  },
  descriptionCard: {
    maxWidth: '400px',
  },
}))


export default function ProjectDetails (props: any) {
  const classes = useStyles()
  const { inverse, project } = props
  return (
    <div className={classes.descriptionContainer} style={inverse? {order: 2} : {} }>
      <Typography color='primary' variant='h3' align='center'>
        {project.title}
      </Typography>
      <Paper elevation={5} className={classes.descriptionCard}>
        <Typography color='primary' variant='h4' className={classes.description}>
          {project.description}
        </Typography>
      </Paper>
      <div className={classes.techStackContainer}>
        <Typography color='primary' variant='h4'>
          Tech Stack
        </Typography>
        <div className={classes.techStack}>
          {project.stack.map((tech: any) => {
            return (
              <Typography color='primary' variant='subtitle1'>
                {tech}
              </Typography> 
            )
          })}
        </div> 
      </div>
    </div>

  )
}