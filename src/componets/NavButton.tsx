import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { theme } from '../theme/theme'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
    marginLeft: '10px',
  },
  header: {
    color: `${theme.palette.primary.contrastText}`,
  }
})) 
  
  
export default function NavButton (props: any) {
  const classes = useStyles(theme)
  const { name } = props
  return (
        <Button className={classes.button}  size='small' color='primary'>
      <Typography className={classes.header} variant='h4' >
        {name}
      </Typography>
    </Button>
  )
}