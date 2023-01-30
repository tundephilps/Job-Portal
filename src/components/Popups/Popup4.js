import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page4 from "../images/page4.png"





const Popup4 = () => {


    let navigate = useNavigate();

  return (

<div className='portfolio-popup'>
    
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
<div className='pp-inner'>
    <div className='pp-content'>
        <div className='pp-header'>
            <div className='pp-thumbnail'>
            <img src={page4} alt="pp-thumbnail" />
            </div>
<h3>App landing page</h3>
        </div>
<div className="pp-body">
    <div className='description'>
<p>A complex Landing page, with Multiple design patterns and reuseable templates and components </p>
    </div>
    <div className='general-info'>
<ul>
    <li>Created - <span>4 Dec 2020</span></li>
    <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
    <li>Role - <span>Front End</span></li>
    <li>View Online - <span><a href='https://single-page-app3-psi.vercel.app/'>https://single-page-app3-psi.vercel.app/</a></span>
    <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/SinglePageApp3' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup4;