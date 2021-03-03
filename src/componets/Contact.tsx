import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ContactButton from './ContactButton'

const useStyles = makeStyles((theme) => ({

}))


export default function Contact () {
  const classes = useStyles()

  return (
    <>
    <Typography color='primary' variant='h2'>
      Send Me a Message
    </Typography>
    <Typography color='primary' variant='h4'>
      I am currently looking for oppertunities as of March 2021. Please Contact me via email to get in touch!
    </Typography>
    <ContactButton />
  </>
  )
}