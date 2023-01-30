import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import page1 from "../images/page1.png";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router';



const Popup1 = () => {

    
    let navigate = useNavigate();
  return (


    
        
<div className='portfolio-popup'>
<button className='btn' id="close"  href onClick={() => {navigate("/Portfolio");}}><AiOutlineArrowLeft /></button>
<div className='pp-inner'>

    <div className='pp-content'>
        <div className='pp-header'>
            <div className='pp-thumbnail'>
            <img src={page1} alt="pp-thumbnail" />
            </div>
<h3>CryptoCurrency Tracker</h3>
        </div>
<div className="pp-body">
    <div className='description'>
<p>A CryptoCurrency Tracking App that shows live data of all Current Market Prices of trending Crypto coins, all built from 
    the scratch and fully responsive for mobile devices. 
     </p>
    </div>
    <div className='general-info'>
<ul>
    <li>Created - <span>4 Dec 2020</span></li>
    <li>Technologies used - <span>HTML, Css, Javascript, React </span></li>
    <li>Role - <span>Front End</span></li>
    <li>View Online - <span><a href='https://optimum-crypto.vercel.app/'>https://optimum-crypto.vercel.app/</a></span>
    <div className='=social-links'>
       Source Code -  <a href='https://github.com/tundephilps/Optimum-Crypto' id='icons' alt="View Code"><BsGithub /></a>
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

export default Popup1;