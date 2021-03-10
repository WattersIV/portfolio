import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  detailsPaper: {
    height: '400px',
    width: '800px',
    marginLeft: '40px',
  }
}))

export default function JobInfo () {
  const classes = useStyles(theme)
  return (
    <Paper elevation={20} className={classes.detailsPaper}> 
      <Typography variant='h3' color='primary'>
        Job Info Goes in here
      </Typography>
    </Paper>
  )
}