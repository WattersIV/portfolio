import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { devJobs, otherJobs, volunteering} from '../config'

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
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '400px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '250px',
  },
}));

export default function VerticalTabs({jobs}: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const jobsToRender = jobs === 'Dev Jobs' 
  ? devJobs 
  : jobs === 'Other Jobs' 
  ? otherJobs 
  : volunteering 

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
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
            <Tab label={job.company} {...a11yProps(index)} />
          )
        })}
      </Tabs>
      {jobsToRender.map((job, index) => {
        return (
        <TabPanel value={value} index={index}>
          <Typography color='primary' variant='h3' align='center'>
            {job.title} at {' '}
            {job.link ? (
            <a href={`${job.link}`} target="_blank" rel="noreferrer">
              {job.company}
            </a>
            ) : (
              job.company
            )} 
          </Typography>
          <Typography color='primary' variant='subtitle1' align='center'>
            {job.start} - {job.end}
          </Typography>
          <br />
          <br />
          {job.keyPoints.map((point) => {
            return (
              <Typography variant='h4' color='primary' align='left'>
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