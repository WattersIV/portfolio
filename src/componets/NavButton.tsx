import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  button: {
    width: '100px',
    height: '40px',
    marginLeft: '10px',
  }
})) 
  
  
export default function NavButton (props: any) {
  const classes = useStyles()
  const { name } = props
  return (
    <Button className={classes.button}  size='small' color='primary'>
      {name}
    </Button>
  )
}