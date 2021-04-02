import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { skills } from '../config'
import { theme } from '../theme/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 120,
      backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
    },
    control: {
      padding: theme.spacing(2),
    },
    skill: {
      color: `${theme.palette.primary.contrastText}`,
      display: 'flex',
      justifyContent: 'center',
    },
    skillIcon: {
      height: '100px',
      width: '100%',
      mixBlendMode: 'screen',
      '&:hover': {
        transform: 'translateY(-8px)',
      },
    },
  }),
);

export default function LanguageTiles() {
  const classes = useStyles(theme);
  const [showText, setShowText] = useState("")

  return (
    <Grid container justify="center" spacing={0} style={{ marginTop: '15px' }}>
      {skills.map((skill, index) => (
        <Grid item key={index} xs={4} style={{ height: '140px' }}>
          <div className={classes.paper}>
            <>
              <img src={skill.icon} alt={`${skill.title} Icon`} className={classes.skillIcon} onMouseOver={() => setShowText(skill.title)} onMouseLeave={() => setShowText("")}/>
              {showText === skill.title && 
              <Typography variant='h4' className={classes.skill} 
              style={skill.title === 'Ruby on Rails' ? { marginTop: '-10px' } : { marginTop: '-5px' } }>
                {skill.title}
              </Typography>}
            </>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}