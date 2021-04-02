import React from 'react';
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
      height: 100,
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
      color: `${theme.palette.secondary.contrastText}`,
      display: 'flex',
      justifyContent: 'center',
    },
    skillIcon: {
      height: '100%',
      width: '100%',
      mixBlendMode: 'screen',
    }
  }),
);

export default function LanguageTiles() {
  const classes = useStyles(theme);

  return (
    <Grid container justify="center" spacing={0}>
      {skills.map((skill, index) => (
        <Grid item key={index} xs={4}>
          <div className={classes.paper}>
            <>
              <img src={skill.icon} alt={`${skill.title} Icon`} className={classes.skillIcon}/>
              {/* <Typography variant='h4' className={classes.skill}>
                {skill.title}
              </Typography> */}
            </>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}