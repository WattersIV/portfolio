import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))


export default function Footer () {
  const classes = useStyles()
  return (
    <Typography variant='subtitle1' color='textPrimary' style={{ paddingTop: '100px' }}>
      Built and Designed by Bill Watters 2021
    </Typography>
  )
}