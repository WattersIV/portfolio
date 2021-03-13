import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: '50px',
  },
  techStack: {
    display: 'flex',
    flexDirection: 'column',
  },
  techStackContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}))


export default function ProjectDetails (props: any) {
  const classes = useStyles()
  const { inverse, project } = props
  return (
    <div>
      <Typography color='primary' variant='h3'>
        {project.title}
      </Typography>
      <Typography color='primary' variant='h4' className={classes.description}>
        {project.description}
      </Typography>
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