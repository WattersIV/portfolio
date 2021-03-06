import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { theme } from '../theme/theme'
import { useScreenSize } from '../hooks/useScreenSize'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
    marginLeft: '10px',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '15px',
    }
  },
  header: {
    color: `${theme.palette.primary.contrastText}`,
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
  },
}))


export default function NavButton(props: any) {
  const classes = useStyles(theme)
  const { isMobile } = useScreenSize()
  const { name } = props
  return (
    <Button className={classes.button} size='small' color='primary'>
      <Typography className={classes.header} variant={isMobile ? 'h3' : 'subtitle1'} >
        {name}
      </Typography>
    </Button>
  )
}