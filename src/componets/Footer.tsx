import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useScreenSize } from '../hooks/useScreenSize'

const useStyles = makeStyles((theme) => ({
}))


export default function Footer () {
  const classes = useStyles()
  const { isMobile } = useScreenSize()
  return (
    <Typography variant={isMobile ? 'subtitle2' : 'subtitle1'} color='textPrimary' style={{ paddingTop: '100px' }}>
      Built and designed by Bill Watters 2021
    </Typography>
  )
}