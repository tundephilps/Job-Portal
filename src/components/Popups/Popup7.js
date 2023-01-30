import React from 'react'

import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import page7 from "../images/page7.png"






const Popup7 = () => {


    let navigate = useNavigate();

  return (
    <div>
    <div className='portfolio-popup'>
        
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
    <div className='pp-inner'>
        <div className='pp-content'>
            <div className='pp-header'>
                <div className='pp-thumbnail'>
                <img src={page7} alt="pp-thumbnail" />
                </div>
    <h3>Movie App</h3>
            </div>
    <div className="pp-body">
        <div className='description'>
    <p>A Cinema Trailer and Movie Review WebApp, built with complex Algorithms and Real Time movie data of the latest Hollywood
        Movies and TV series </p>
        </div>
        <div className='general-info'>
    <ul>
        <li>Created - <span>12 April 2022</span></li>
        <li>Technologies used - <span>HTML, Sass, Javascript, React </span></li>
        <li>Role - <span>Front End</span></li>
        <li>View Online - <span><a href='https://optimum-cinema.vercel.app/'>https://optimum-cinema.vercel.app/</a></span>
        <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/CInema-App' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup7;