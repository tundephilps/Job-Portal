import React from 'react'
import { useNavigate } from 'react-router-dom';

const Job = ({ item: { id, role, image, location, duration, salary, deadline }}) => {

    const navigate = useNavigate();

  return (
    <div class="job-item p-4 mb-4" style={{width: "100%"}}>
    <div class="row g-4">
        <div class="col-sm-12 col-md-8 d-flex align-items-center">
            <img class="flex-shrink-0 img-fluid border rounded" src={image} alt="" style={{width: "80px", height: "80px"}} />
            <div class="text-start ps-4">
                <h5 class="mb-3">{role}</h5>
                <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{location}</span>
                <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{duration}</span>
                <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{salary}</span>
            </div>
        </div>
        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div class="d-flex mb-3">
                <a class="btn btn-light btn-square me-3" href="/#"><i class="far fa-heart text-primary"></i></a>
                <a class="btn btn-primary" href onClick={() => {navigate(`/JobDetails/${id}`);}}>Apply Now</a>
            </div>
            <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>DeadLine: {deadline}</small>
        </div>
    </div>
</div>

  )
}

export default Job