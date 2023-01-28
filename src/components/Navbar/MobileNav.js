import React, { useState } from 'react'
import "./Navbar.scss"

function MobileNav({options}) {

  const [showOptions, setShowOptions] = useState(false);
 const handleClick = () => {
  setShowOptions(!showOptions);
 }
 
 return (<div className='mobile'>
          
    <button onClick={handleClick} type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
            </button>
           

 {showOptions && (
     <div class="navbar-collapse" id="navbarCollapse" style={{position: "absolute", right: "70%", padding: "1rem"}} >
     <div class="navbar-nav ms-auto p-4 p-lg-0">
         <a href="index.html" class="nav-item nav-link active">Home</a>
         <a href="about.html" class="nav-item nav-link">About</a>
         <div class="nav-item dropdown">
             <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
             <div class="dropdown-menu rounded-0 m-0">
                 <a href="job-list.html" class="dropdown-item">Job List</a>
                 <a href="job-detail.html" class="dropdown-item">Job Detail</a>
             </div>
         </div>
         <div class="nav-item dropdown">
             <a href="/#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
             <div class="dropdown-menu rounded-0 m-0">
                 <a href="/#" class="dropdown-item">Job Category</a>
                 <a href="/#" class="dropdown-item">Testimonial</a>
                 <a href="/#" class="dropdown-item">404</a>
             </div>
         </div>
         <a href="/Contact" class="nav-item nav-link">Contact</a>
     </div>
     <a href="" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i class="fa fa-arrow-right ms-3"></i></a>
 </div>

 )}      
  </div>  );
}

export default MobileNav;