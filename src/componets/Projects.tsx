import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Project from './Project'
import { sectionPadding, titlePadding } from '../theme/theme'
import { projects } from '../config'

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
  },
  title: {
    paddingBottom: `${titlePadding}`,
  },
}))


export default function Projects () {
  const classes = useStyles()
  return (
    <div className={classes.projectsContainer} id='work'>
      <Typography variant='h2' color='primary' align='center' className={classes.title}>
        Projects I've Built
      </Typography>
      {projects.map((project, index) => {
        const inverse: boolean = index % 2 === 0 ? false : true 
        console.log(inverse)
        return <Project project={project} inverse={inverse}/>
      })}
    </div>
  )
}