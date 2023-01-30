import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page3 from "../images/page3.png"





const Popup3 = () => {


    let navigate = useNavigate();

  return (
    <div className='portfolio-popup'>
        
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
    <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
                <div className='pp-thumbnail'>
                <img src={page3} alt="pp-thumbnail" />
                </div>
    <h3>Hotel Website</h3>
            </div>
    <div className="pp-body">
        <div className='description'>
    <p>A project made for a 5star hotel to uplift the design of their Business in the shortest time span. 
        The code is well implemented and a pleasure to work with the staffs
         amazes me with the creativity and variations introduced. I not only make them look professional 
         but also Advertise there services to the fullest </p>
        </div>
        <div className='general-info'>
    <ul>
        <li>Created - <span>4 Dec 2020</span></li>
        <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
        <li>Role - <span>Front End</span></li>
        <li>View Online - <span><a href='https://hotel-kohl.vercel.app/'>https://hotel-kohl.vercel.app/</a></span>
        <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/Hotel-WebApp' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup3;