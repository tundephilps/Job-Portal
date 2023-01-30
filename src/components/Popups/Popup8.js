import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page8 from "../images/page8.png"






const Popup8 = () => {


    let navigate = useNavigate();

  return (
    <div>
    <div className='portfolio-popup'>
        
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
    <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
                <div className='pp-thumbnail'>
                <img src={page8} alt="pp-thumbnail" />
                </div>
    <h3>Educational Website</h3>
            </div>
    <div className="pp-body">
        <div className='description'>
    <p>A university web app that includes a Students Forum,
         Price and Checkout Page for payment of tution, 
         a staff management software that edits and deletes records of staffs,
         a Quiz App., Accoridion for FAQ and Login page... All in one.</p>
        </div>
        <div className='general-info'>
    <ul>
        <li>Created - <span>17 June 2022</span></li>
        <li>Technologies used - <span>HTML, Css, Javascript, React, Redux Toolkit </span></li>
        <li>Role - <span>Front End</span></li>
        <li>View Online - <span><a href='https://university-brown.vercel.app/'>https://university-brown.vercel.app/</a></span>
        <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/Educational-WebApp' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup8;