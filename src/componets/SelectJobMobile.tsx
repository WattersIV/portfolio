import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { devJobs, otherJobs, volunteering} from '../config'
import { theme } from '../theme/theme'
import { useScreenSize } from '../hooks/useScreenSize';


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
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    fontSize: '10px',
    backgroundColor: 'transparent',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '250px',
    marginTop: '10px',
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
    '&:focus': {
      outline: 'none',
      border: '1px solid white',
    },
  },
  whiteText: {
    color: `${theme.palette.text.primary}`,
    '&:focus': {
      outline: 'none',
      border: '1px solid white',
    },
  },
  appBar: {
    '.MuiPaper-root': {
      backgroundColor: 'transparent',      
    },
    '.MuiAppBar-colorDefault' : {
      backgroundColor: 'transparent',
    },
    '& svg': {
      fill: `${theme.palette.secondary.main}`,
    }
  }
}));

export default function SelectJobMobile(props: any) {
  const classes = useStyles(theme);
  const { isMobile } = useScreenSize()
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
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          aria-label="Companies I've worked for"
          className={classes.tabs}
        >
        {jobsToRender.map((job, index) => {
          return (
            <Tab
            key={index}
            label={job.company}
            style={{ fontSize: '12px' }} 
            {...a11yProps(index)} 
            className={value === index ? classes.whiteText : classes.grayText}/>
          )
        })}
        </Tabs>
      </AppBar>
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