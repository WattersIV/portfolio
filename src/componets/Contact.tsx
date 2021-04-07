import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ContactButton from './ContactButton'
import { sectionPadding, titlePadding } from '../theme/theme'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  sendMsgText: {
    maxWidth: '500px',
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
        Get In Touch
      </Typography>
      <Typography className={classes.sendMsgText} color='textPrimary' variant='h4'>
        I am currently looking for my next oppertunity. If you would like to get in touch with me click the button below to send me an email!
      </Typography>
      <ContactButton />
    </div>
  )
}