import React from 'react';
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage';
import About from './components/About';
//import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Popup from './components/Popups/Popup';
//import Header from './components/Header';
import "./App.css"

//import aos (animate on scroll)
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

    useEffect(() => {
        Aos.init({
          duration: 2000,
          delay: 200,
        }
        
        );
      });
  

    return (<div>
  <Router>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Portfolio" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Popup/:id" element={<Popup />} />
            </Routes>
            </Router>
          
          
    </div>  );
}

export default App;

 /*
<Router>
<Header />
<Routes>
                <Route path="/" element={<Fullpage />} />
               
               </Routes>
           
        </Router>       
   
        <Footer />*/


    /*    
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelectorAll(".header").classList.toggle("active");
}
*/