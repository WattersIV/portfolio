import { makeStyles } from '@material-ui/core/styles'
import { theme } from '../theme/theme'
import anime from 'animejs/lib/anime.es.js';
import React, { useState, useEffect } from 'react'
import logo from '../pictures/IV.svg'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: `${theme.palette.primary.main}`,
    height: '100vh',
  },
  spotLight: {
    background: 'radial-gradient(10px 10px at 50% 50% , transparent 0, transparent 150px, rgba(0, 0, 0, 0.5) 65px)',
    height: '100%',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    bottom: '0px',
  },
  letters: {
    opacity: 1,
    width: '100px',
    position: 'absolute',
    right: '25px',
    top: '45px',
    opacity: 0,
  },
  droplet: {
    position: 'absolute',
    left: '5px',
  },
  logoContainer: {
    position: "absolute",
    left: 'calc(50% - 80px)',
    top: 'calc(50% - 70px)',
    opacity: 1,
  }
}))

export default function Loader() {
  const classes = useStyles(theme)
  const animate = () => {
    const loader = anime.timeline({
      complete: () => console.log('DONE'),
    });

    loader
      .add({
        targets: '#path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#letters',
        delay: 500,
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
  }
  useEffect(() => {
    animate();
  }, []);

  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.spotLight}></div> */}
      <div className={classes.logoContainer} id='logo'>
        <Droplet />
        {/* <img src={circle} alt='circle' className={classes.circle} id='circle' /> */}
        <img src={logo} alt='logo' className={classes.letters} id='letters' />
      </div>
    </div>
  )
}


const Droplet = () => {
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="150px" height="150px" viewBox="0 0 196.096 196.096" style={{ enableBackground: "new 0 0 196.096 196.096", overflow: 'visible' }}
      xmlSpace="preserve">
      <g>
        <g>
          <path id='path' fill='#0a192f' stroke='#64ffda' strokeWidth='6' d="M96.103,0.799c-3.025,3.166-74.198,77.98-74.198,119.158c0,41.99,34.156,76.139,76.143,76.139
			c42.001,0,76.143-34.153,76.143-76.139c0-41.178-71.171-115.993-74.198-119.158C98.972-0.267,97.114-0.267,96.103,0.799z"/>
        </g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  )
}