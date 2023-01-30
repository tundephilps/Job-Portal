import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page6 from "../images/page6.png"




const Popup6 = () => {


    let navigate = useNavigate();

  return (
      
<div className='portfolio-popup'>
    
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
<div className='pp-inner'>
    <div className='pp-content'>
        <div className='pp-header'>
            <div className='pp-thumbnail'>
            <img src={page6} alt="pp-thumbnail" />
            </div>
<h3>App landing page</h3>
        </div>
<div className="pp-body">
    <div className='description'>
<p>Landing Page with a fasinating Telecom based theme </p>
    </div>
    <div className='general-info'>
<ul>
    <li>Created - <span>4 Dec 2020</span></li>
    <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
    <li>Role - <span>Front End</span></li>
    <li>View Online - <span><a href='https://single-page-app2-three.vercel.app/'>https://single-page-app2-three.vercel.app/</a></span>
    <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/SinglePageApp2' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup6;