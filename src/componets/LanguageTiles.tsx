import React from 'react';
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles';
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
      width: 100,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
    },
    control: {
      padding: theme.spacing(2),
    },
    skill: {
      color: `${theme.palette.secondary.contrastText}`,
      display: 'flex',
      justifyContent: 'center',
    }
  }),
);

export default function LanguageTiles() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles(theme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {skills.map((skill, index) => (
            <Grid key={index} >
              <Paper className={classes.paper}>
                <Typography variant='h4' className={classes.skill}>
                  {skill.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}