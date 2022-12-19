import React from 'react'

import BasicTabs from './BasicTabs';


const JobList = (props) => {

    //const [items] = useState(JobData)

  

  return (
    <div class="container-xxl py-5 w-100%">
    <div class="container">
        <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                <BasicTabs />


        </div>
    </div>
</div>

  )
}

export default JobList