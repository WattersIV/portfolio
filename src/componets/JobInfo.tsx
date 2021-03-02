import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../App'


const useStyles = makeStyles((theme) => ({

}))

export default function JobInfo () {
  const classes = useStyles(theme)
  return (
    <Paper elevation={20}> 
      <Typography variant='h3' color='primary'>
        Job Info Goes in here
      </Typography>
    </Paper>
  )
}