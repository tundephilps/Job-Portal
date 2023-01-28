import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Job from './Job'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//import JobData from './JobData'


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

//Material ui tAB fUNCTIONALITY
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



export default function BasicTab() {

  
  const navigate = useNavigate();

  const [state, setState] = useState(JobData);

  const [value, setValue] = React.useState(0);

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
        duration==='FullTime');

        setState(filtered);
    }

    else if (word==='Contract'){
      const filtered = JobData.filter(item=>item.
        duration==='Contract');

        setState(filtered);
    }
  }

  return (
    <Box sx={{ width: "100%" }} class="mb-5">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} class=" d-inline-flex justify-content-center border-bottom mb-5">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} value="All" onClick={handleBtns} > <Button value="All" onClick={handleBtns} /></Tab>
          <Tab value="FullTime" onClick={handleBtns}  label="Full Time" {...a11yProps(1)}><button value="FullTime" onClick={handleBtns} style={{zIndex: "99"}}>Fulltime</button> </Tab>
          <Tab value="Contract" onClick={handleBtns} label="Contract" {...a11yProps(2)}><button /></Tab>
        </Tabs>
      </Box>
      
       
      <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">

                
   
                {
          state.map((item) =>(
            <div class="job-item p-4 mb-4" style={{width: "100%"}} key={item.id}>
            <div class="row g-4">
                <div class="col-sm-12 col-md-8 d-flex align-items-center">
                    <img class="flex-shrink-0 img-fluid border rounded" src={item.image} alt="" style={{width: "80px", height: "80px"}} />
                    <div class="text-start ps-4">
                        <h5 class="mb-3">{item.role}</h5>
                        <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{item.location}</span>
                        <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{item.duration}</span>
                        <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{item.salary}</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href onClick={() => {navigate(`/JobDetails`);}}>Apply Now</a>
                    </div>
                    <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>DeadLine: {item.deadline}</small>
                </div>
            </div>
        </div>
        
          ))
        }


                    <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                </div>
            </div>
            
      
     </Box>
  );
}
