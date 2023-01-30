import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page5 from "../images/page5.png"





const Popup5 = () => {


    let navigate = useNavigate();

    return (
      
<div className='portfolio-popup'>
    
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
<div className='pp-inner'>
    <div className='pp-content'>
        <div className='pp-header'>
            <div className='pp-thumbnail'>
            <img src={page5} alt="pp-thumbnail" />
            </div>
<h3>Business Page</h3>
        </div>
<div className="pp-body">
    <div className='description'>
<p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
    </div>
    <div className='general-info'>
<ul>
    <li>Created - <span>4 Dec 2020</span></li>
    <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
    <li>Role - <span>Front End</span></li>
    <li>View Online - <span><a href='https://single-page-app1-three.vercel.app/'>https://single-page-app1-three.vercel.app/</a></span>
    <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/MultiPage-App1' id='icons' alt="View Code"><BsGithub /></a>
    </div>
    </li>
</ul>
    </div>
</div>
    </div>

</div>
</div>

  )
}

export default Popup5;