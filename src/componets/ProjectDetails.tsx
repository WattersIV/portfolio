import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { githubURL } from '../config';

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '20px',
  },
  techStack: {
    display: 'flex',
    flexDirection: 'row',
  },
  techStackContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '25px',
    justifyContent: 'space-around',
    paddingBottom: '10px',
  },
  descriptionContainer: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    position: 'relative',
    zIndex: 2,
    left: '50px',
  },
  inverseDescriptionContainer: {
    order: 2,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'relative',
    zIndex: 2,
    right: '50px',
  },
  descriptionCard: {
    maxWidth: '800px',
    marginTop: '20px',
    color: `${theme.palette.text.primary}`,
    backgroundColor: `${theme.palette.primary.light}`,
  },
  brightText: {
    color: `${theme.palette.primary.contrastText}`,
  },
  github: {
    fill: 'white',
    '&:hover' : {
      fill: `${theme.palette.secondary.main}`,
    },
  },
}))


export default function ProjectDetails (props: any) {
  const classes = useStyles()
  const { inverse, project } = props
  return (
    <div className={ inverse ? classes.inverseDescriptionContainer : classes.descriptionContainer } >
      <Typography color='textPrimary' variant='h3' align='center' className={classes.brightText}>
        {project.title}
      </Typography>
      <Paper elevation={5} className={classes.descriptionCard}>
        <Typography color='textSecondary' variant='h4' className={classes.description}>
          {project.description}
        </Typography>
      </Paper>
      <div className={classes.techStackContainer}>
        <div className={classes.techStack}>
          {project.stack.map((tech: any, index: any) => {
            return (
              <Typography color='textSecondary' variant='subtitle1' key={index}>
                {tech} &nbsp;
              </Typography> 
            )
          })}
        </div> 
      </div>
      <div>
        { project.githubURL && 
        <a href={`${githubURL}`} aria-label={`${project.title} Github Code`} >
          <GitHubIcon  className={classes.github}/>
        </a>}
      </div>
    </div>

  )
}