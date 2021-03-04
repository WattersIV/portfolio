import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  paperSpecs: {
    height: '350px',
    width: '200px',
    display: 'flex',
    alignSelf: 'baseline',
    backgroundColor: `${theme.palette.secondary.main}`,
  },
  jobContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  job: {
    width: '100%',
    height: '50px',
    backgroundColor: `green`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

export default function SelectJob () {
  const classes = useStyles(theme)
  return (
    <>
      <Paper className={classes.paperSpecs}>
      <title>
        Company Names  
      </title>
        <div className={classes.jobContainer}>
          <div className={classes.job}>
            <Typography variant='h4' color='primary'>
              Company Names Here
            </Typography>
          </div>
        </div>
      </Paper>
    </>
  )
}