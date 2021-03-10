import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))


export default function ProjectDetails (props: any) {
  const classes = useStyles()
  const { inverse, project } = props
  return (
    <div>
      <Typography color='primary' variant='h3'>
        {project.title}
      </Typography>
      <Typography color='primary' variant='h4'>
        {project.description}
      </Typography>
      {project.stack.map((tech: any) => {
        return (
          <Typography color='primary' variant='subtitle1'>
            {tech}
          </Typography> 
        )
      })}
    </div>

  )
}