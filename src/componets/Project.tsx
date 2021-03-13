import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProjectDetails from './ProjectDetails'
import communitySoccerPic from '../pictures/communitySoccerImg.png'
import jungleRailsPic from '../pictures/jungleRailsImg.png'
import schedulerPic from '../pictures/schedulerImg.png'

const useStyles = makeStyles((theme) => ({
  projectCard: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  projectContainer: {
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '550px',
  },
  picture: {
    maxHeight: '550px',
    maxWidth: '696px',
  },
}))


export default function Project (props: any) {
  const classes = useStyles()
  const { project, inverse } = props
  const projectPicture = project.title === 'Community Soccer' 
  ? communitySoccerPic
  : project.title === 'Jungle Rails'
  ? jungleRailsPic
  : schedulerPic
  return (
    <div className={classes.projectContainer}>
      <ProjectDetails inverse={inverse} project={project}/>
      <div className={classes.projectCard} >
        <img src={projectPicture} alt={`${project.title} image`} className={classes.picture}/>
      </div>
    </div>
  )
}