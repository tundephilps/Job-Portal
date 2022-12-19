import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Job from './Job'
import JobData from './JobData'


function TabPanel(props) {




  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = React.useState(0);
  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [items] = useState(JobData)

  return (
    <Box sx={{ width: "100%" }} class="mb-5">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} class=" d-inline-flex justify-content-center border-bottom mb-5">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="All" {...a11yProps(0)} />
          <Tab   label="Full Time" {...a11yProps(1)} />
          <Tab label="Contract" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">

      <TabPanel value={value} index={0}>
       
                  
            {
                    items.map((item) =>{
                        return <Job key={item.id} item={item} />
                    })
                }
                  

      </TabPanel>
      <TabPanel value={value} index={1}>
           Not Classified Yet     
      </TabPanel>
      <TabPanel value={value} index={2}>
            Not yet Avaliable    
      </TabPanel>
      <a class="btn btn-primary py-3 px-5" href="/#">Browse More Jobs</a>
                </div>
            </div>

    </Box>
  );
}
