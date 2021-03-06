import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useScreenSize } from '../hooks/useScreenSize'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: '10px',
    width: '150px',
    marginTop: '25px',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      fontSize: '10px',
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonSelected: {
    marginRight: '10px',
    width: '150px',
    marginTop: '25px',
    border: `2px ${theme.palette.primary.contrastText} solid`,
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      fontSize: '10px',
    }
  },
}))
 
export default function ExperienceButton (props: any) {
  const classes = useStyles(theme)
  const { isMobile } = useScreenSize()
  const { name, setJobType, jobs } = props
  return (
    <div className={classes.buttonWrapper}>
      {jobs === name ? (
        <Button variant='contained' size='large' className={classes.buttonSelected} color='primary' onClick={setJobType}>
          {name}
        </Button>
      ) : (
        <Button variant='outlined' size='large' className={classes.button} color='secondary' onClick={setJobType}>
          {name}
        </Button>
      )}
    </div>
  )
}