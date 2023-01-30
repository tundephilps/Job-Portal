import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Job from './Job'
import JobData from './JobData'


const JobData = [

  {
      id: "1",
      role: "Software Engineer",
      image: "../images/logo1.jpg",
      location: "New York, USA",
      duration: "FullTime",
      salary: "$1200",
      deadline: "01 Jan, 2001"
  },
  {
   
      id: "2",
      role: "Marketing Manager",
      
      image: "../images/logo2.jpg",
      location: "Manchester",
      duration: "Contract",
      salary: "$3000",
      deadline: "01 March, 2045"
  
  },
  {
   
      id: "3",
      role: "Product Designer",
      
      image: "../images/logo3.jpg",
      location: "London",
      duration: "FullTime",
      salary: "$2200",
      deadline: "23 March, 2024"
  
  },
  
  {
   
      id: "4",
      role: "Creative Director",
      image: "../images/logo4.jpg",
      location: "Sydney Austrialia",
      duration: "FullTime",
      salary: "$4200",
      deadline: "28 June, 2024"
  
  },
  
  {
   
      id: "5",
      role: "Wordpress Developer",
      image: "../../images/logo5.jpg",
      location: "Lagos",
      duration: "Contract",
      salary: "$2200",
      deadline: "23 March, 2024"
  
  },
]


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

export default function BasicTabsss() {

  const [value, setValue] = React.useState(0);
  
  const [state, setState] = useState(JobData);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleBtns=(e)=>{
    let word=e.target.value;


    if(word === 'All') {
      setState(JobData)
    }
    else if(word==='FullTime'){
      const filtered = JobData.filter(item=>item.
        kind==='FullTime');

        setState(filtered);
    }

    else if(word==='Contract'){
      const filtered = JobData.filter(item=>item.
        kind==='Contract');

        setState(filtered);
    }
  }

  const [items] = useState(JobData)

  return (
    <Box sx={{ width: "100%" }} class="mb-5">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} class=" d-inline-flex justify-content-center border-bottom mb-5">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab value="All"  label="All" {...a11yProps(0)} />
          <Tab value="FullTime" onClick={handleBtns} label="Full Time" {...a11yProps(1)} />
          <Tab value="Contract" onClick={handleBtns} label="Contract" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       
      <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                  
            {
                    items.map((item) =>{
                        return <Job key={item.id} item={item} />
                    })
                }
                  
                    <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                </div>
            </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          state.map((item) =>(
            <Job key={item.id} item={item} />
          ))
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
