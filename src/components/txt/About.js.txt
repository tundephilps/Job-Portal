import React from 'react'
import tie from "./images/tie.jpg"
import { useNavigate } from 'react-router';
import Header from './Header';
//import Tabs  from "flowbite-react"



const About = () => {

    let navigate = useNavigate();

  return (
    <section className='about-section sec-padding'>
        <Header />
<div className='container'>
    <div className='row'>
        <div className='section-title'>
            <h2>About Me</h2>

        </div>

    </div>
<div className='row'>
<div className='about-img'>
<div className='img-box'
data-aos='fade-right'
data-aos-delay='600'
>
<img src={tie} alt="suit" />
</div>
</div>
<div className='about-text'
data-aos="flip-left" data-aos-delay="100"
>
    <p>I am a meticulous Front-End React.js Developer from Nigeria Currently based in Lagos with over 2years of front end experience,
         and a passion for coding, Web Development and a firm believer in client satisfaction coupled with optimal user’s experience.
         Am open to any avaliable remote oppourtunities,
         In return I would offer my full commitment and be a pleasant, friendly addition to your team. 
    </p>
    <h3>skills</h3>
<div className='skills'>
<div className="skill-item"
 data-aos='fade-left'
 data-aos-delay='300'
>html</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='500'
>css</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='700'
>Javascript</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='900'
>Bootstrap</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='1100'
>Tailwind CSS</div>

<div className="skill-item"
data-aos='fade-left'
data-aos-delay='1300'
>Material UI</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='1500'
>React</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='1700'
>Redux</div>

<div className="skill-item"
data-aos='fade-left'
data-aos-delay='1900'
>Figma</div>
<div className="skill-item"
data-aos='fade-left'
data-aos-delay='2100'
>Github</div>
<div className="skill-item" style={{color: "red"}}
data-aos='fade-left'
data-aos-delay='2300'
>Firebase</div>
<div className="skill-item" style={{color: "red"}}
data-aos='fade-left'
data-aos-delay='2500'
>DevOps</div>
</div>
<div className='about-tabs'>


    <button type="button" class='tab-item active' data-target="#education">Experience</button>
    <button type="button" class='tab-item' data-target="#experience">Education</button>
</div>
<div className='tab-content' id="education">
<div className='timeline'>
    <div className='timeline-item'>
<span className='date'>2008 - 2012</span>
<h4>BSc in Accounting - <span>Ekiti State University, Nigeria</span> </h4>
<p> An Accounting Degree with a profesional qualification as a Certified Accoutant</p>
    </div>
    <div className='timeline-item'>
<span className='date'>2019 - 2021</span>
<h4> Cyber Security Analyst Certification - <span>GIZ (GERMAN)</span> </h4>
<p> An hands on Bootcamp training on the Advisory aspect of cybersecurity  </p>
    </div>
    <div className='timeline-item'>
<span className='date'>2020 - 2021</span>
<h4>Software Engineering  - <span>Decagon Insititute </span> </h4>
<p> A Bootcamp with major focus on HTML, CSS, Javascript and Front-End FrameWorks

</p>
    </div>
    <div className='timeline-item'>
<span className='date'>Currently</span>
<h4>Dev Ops Engineering - <span> Lamar Cloud Submitt, Texas USA </span> </h4>
<p>Advanced training on Linux Administration, AWS, DevOps and Networking.</p>
    </div>


</div>
</div>


<div className='tab-content active' id="experience">
    <div className='timeline'>
        
        <div className='timeline-item'>
            <span className='date'>Currently</span>
            <h4>Web developer - <span>Freelance (Fiverr, UpWork)</span></h4>
            <p>To build and uplift the Websites of clients projects in the shortest time span, 
                 Using Web Technologies to provide not only cool landing pages but also makes
                  them look professional to increase sales and brand optimization.   </p>
        </div>
        <div className='timeline-item'>
            <span className='date'>May 2020 - June 2022</span>
            <h4>FrontEnd Developer - <span>Afroot Design Dublin</span></h4>
            <p> Designed and implemented web applications along with 3rd-party software integrations as a web team liaison for all Clients projects..</p>
            <p> Designing Webpages using HTML, CSS, Javascript and React.js for Clients.</p>
             <p>Converting Figma and Adobe XD Designs and Mockups into Hard Coded Web Pages using React.js</p> 
            <p> Led development team of developers to create GitHub pages, which allows all new and existing customers to have their repositories hosted.</p>
        </div>
    </div>
</div>

<a href='/##' className='btn'>Download CV</a>
<a href onClick={() => {navigate("/Contact");}}  className='btn'>Contact Me</a>

</div>
</div>
</div>

    </section>
  )
}

export default About;


window.onload = function(){
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) =>{
if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
}
});
}