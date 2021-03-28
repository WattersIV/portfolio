import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ContactButton from './ContactButton'
import { sectionPadding, titlePadding } from '../theme/theme'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  sendMsgText: {
    maxWidth: '600px',
    paddingTop: '20px',
  },
  contactMeWrapper: {
    paddingTop: `${sectionPadding}`,
    paddingBottom: `${sectionPadding}`,
  },
  title: {
    paddingBottom: `${titlePadding}`,
    color: `${theme.palette.primary.contrastText}`,
  },
}))


export default function Contact () {
  const classes = useStyles()

  return (
    <div className={classes.contactMeWrapper} id='contact'>
      <Typography variant='h2' align='center' className={classes.title}>
        Send Me a Message
      </Typography>
      <Typography className={classes.sendMsgText} color='textPrimary' variant='h3'>
        I am currently looking for oppertunities as of March 2021. Please Contact me via email to get in touch!
      </Typography>
      <ContactButton />
    </div>
  )
}