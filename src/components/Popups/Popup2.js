import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page2 from "../images/page2.png"






const Popup2 = () => {


    let navigate = useNavigate();

  return (
    <div>
    <div className='portfolio-popup'>
        
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
    <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
                <div className='pp-thumbnail'>
                <img src={page2} alt="pp-thumbnail" />
                </div>
    <h3>Golf Course Project</h3>
            </div>
    <div className="pp-body">
        <div className='description'>
    <p>A Golf Course themed Web page built for Black Minorities, A Beautiful landing page that took me a lot of time 
        and effort to design...  </p>
        </div>
        <div className='general-info'>
    <ul>
        <li>Created - <span>4 Dec 2020</span></li>
        <li>Technologies used - <span>HTML, Sass, Javascript, React </span></li>
        <li>Role - <span>Front End</span></li>
        <li>View Online - <span><a href='https://black-golf-tundephilps.vercel.app/'>https://black-golf-tundephilps.vercel.app/</a></span>
        <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/Black-Golf' id='icons' alt="View Code"><BsGithub /></a>
    </div>
        </li>
    </ul>
        </div>
    </div>
        </div>
    
    </div>
    </div>
    </div>
  )
}

export default Popup2;