import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { devJobs, otherJobs, volunteering} from '../config'
import { theme } from '../theme/theme'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{
        width: '750px',
      }}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '400px',
    backgroundColor: 'transparent',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '250px',
  },
  companyText: {
    color: `${theme.palette.text.primary}`,
  },
  companyLink: {
    display: 'inline',
    color: `${theme.palette.secondary.main}`,
  },
  grayText: {
    color: `${theme.palette.text.secondary}`,
  },
}));

export default function SelectJob(props: any) {
  const classes = useStyles(theme);
  const { jobs, value, setValue } = props
  const jobsToRender = jobs === 'Dev Jobs' 
  ? devJobs 
  : jobs === 'Other Jobs' 
  ? otherJobs 
  : volunteering 

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} key={1}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Companies I've worked for"
        className={classes.tabs}
      >
        {jobsToRender.map((job, index) => {
          return (
            <Tab
            key={index}
            label={job.company} 
            {...a11yProps(index)} 
            className={classes.grayText}/>
          )
        })}
      </Tabs>
      {jobsToRender.map((job, index) => {
        return (
        <TabPanel value={value} index={index} key={index}>
          <Typography className={classes.companyText} variant='h3' align='center' style={{ fontWeight: 'bold' }}>
            {job.title} at {' '}
            {job.link ? (
            <a href={`${job.link}`} target="_blank" rel="noreferrer">
              <Typography className={classes.companyLink} variant='h3' align='center' >
                {job.company}
              </Typography>
            </a>
            ) : (
              <Typography color='textPrimary' variant='h3' align='center' style={{ display: 'inline' }} >
                {job.company}
              </Typography>
            )} 
          </Typography>
          <Typography className={classes.grayText} variant='subtitle1' align='center'>
            {job.start} - {job.end}
          </Typography>
          <br />
          <br />
          {job.keyPoints.map((point, index) => {
            return (
              <Typography className={classes.grayText} variant='h4' align='left' key={index}>
                - {point}
                <br />
                <br />
              </Typography>
            )
          })}
        </TabPanel>
        )
      })}
    </div>
  );
}