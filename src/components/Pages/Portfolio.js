import React from 'react';
import Header from './Header';
import page1 from "./images/page1.png";
import page2 from "./images/page2.png"

import page6 from "./images/page6.png"
import page3 from "./images/page3.png"
import page4 from "./images/page4.png"
import page5 from "./images/page5.png"
import page7 from "./images/page7.png"
import page8 from "./images/page8.png"

//import port2 from "./images/port2.jpg";
//import port3 from "./images/port3.jpg";
//import port4 from "./images/port4.jpg";
//import port5 from "./images/port5.jpg";
//import port6 from "./images/port6.jpg";
//import {CgClose} from "react-icons/cg";
import { useNavigate } from 'react-router';



const Portfolio = () => {
    let navigate = useNavigate();


  return ( <>    <section className='portfolio-section sec-padding'>
       <Header />
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h2>Recent Work</h2>
                </div>
            </div>
            <div className='row'>
                <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page1} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Crypto Web App</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup1");}}>View project</button>
                


                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>

                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page7} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Movie WebApp</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup7");}}>View project</button>
                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>A Cinema Trailer and Movie Review WebApp, built with complex Algorithms and Real Time movie data of the latest Hollywood
        Movies and TV series </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>11 April 2022</span></li>
                            <li>Technologies used - <span>Html, Css, Javascript, React</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>https://github.com/tundephilps/CInema-App</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
            

<div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page8} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>University Website </h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup8");}}>View project</button>
                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>A university web app that includes a Students Forum,
         Price and Checkout Page for payment of tution, 
         a staff management software that edits and deletes records of staffs,
         a Quiz App., Accoridion for FAQ and Login page... All in one. </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>17 June 2022</span></li>
                            <li>Technologies used - <span>Html, Css, Javascript, React, Redux Toolkit</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>https://github.com/tundephilps/CInema-App</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
            
            
            
                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page2} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Golf Course WebPage</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup2");}}>View project</button>
              
            
                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
            
            
                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page3} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Hotel website</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup3");}}>View project</button>
                

                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
            
            
            
                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page4} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Landing Page</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup4");}}>View project</button>
               
                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page5} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Business Page</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup5");}}>View project</button>
                

                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
                  <div className='portfolio-item'>
                    <div className='portfolio-item-thumbnail'>
        <img src={page6} alt="port" />
                    </div>
                    <h3 className='portfolio-item-title'>Landing Page 2</h3>
                <button type='button' className='btn view-project-btn' href onClick={() => {navigate("/Popup6");}}>View project</button>
                
                <div className='portfolio-item-details'>
                    <div className='description'>
                    <p>to uplift the design of their projects in the shortest time span. 
    The code is well commented and a pleasure to work with
    Lucian amazes me with the creativity and variations he introduces to 
    every template of his. He not only makes them look professional  </p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>4 Dec 2020</span></li>
                            <li>Technologies used - <span>Html, Css</span></li>
                            <li>Role - <span>Front End</span></li>
                            <li>View Online - <span><a href='/#' target={'_blank'}>www.github.com</a></span></li>
                        
                        </ul>
                    </div>
                </div>
                  </div>
                  
        </div>
        </div>
    </section>
</>

  )
}

export default Portfolio;



/*
portfolio items details pop up

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemsDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemsDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

document.querySelector(".pp-body").innerHTML =
portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
*/