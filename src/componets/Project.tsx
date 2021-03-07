import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProjectDetails from './ProjectDetails'
import communitySoccerPic from '../pictures/communitySoccerImg.png'
import jungleRailsPic from '../pictures/jungleRailsImg.png'
import schedulerPic from '../pictures/schedulerImg.png'

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


export default function Project (props: any) {
  const classes = useStyles()
  const { project, inverse } = props
  console.log(project.title === 'Community Soccer')
  const projectPicture = project.title === 'Community Soccer' 
  ? communitySoccerPic
  : project.title === 'Jungle Rails'
  ? jungleRailsPic
  : schedulerPic
  console.log(projectPicture)
  return (
    <div className={classes.projectContainer}>
      <ProjectDetails />
      <div className={classes.projectCard}>
        <img src={projectPicture} alt={`${project.title} image`} />
      </div>
    </div>
  )
}