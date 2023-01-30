import React, { Component } from 'react';
import "./Header.css";

//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
//import { useNavigate } from 'react-router';
import { BsList } from "react-icons/bs"
import { MdCancel } from "react-icons/md"





class Header extends Component {
    
    constructor(props) {
      super(props);
      this.state={
        show: true,
      }
    }
    state = {  }
    render()
    
    { 



      return (<>
    

        <nav className="navbar navbar-expand-lg fixed-top"
          data-aos='fade-down'
          data-aos-duration='2000'
          data-aos-delay='900'
        >
          <div className="container">
            <a className="navbar-brand text-info" href='/' id='sign'>My Portfolio</a>
    <button className="navbar-toggler border border-info text-info"
     onClick={ ()=>{ this.setState({show: !this.state.show})}} id="click">
       {this.state.show ? <BsList /> : <MdCancel />}
       
        
     </button> 
  
    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
      <ul className="navbar-nav ms-auto" id='click'>
        <li className="nav-item">
        <a href="/"  className="nav-link text-light" style={{color: "blue"}}Link to="/">Home</a> 
        </li>
        <li className="nav-item">
        <a className="nav-link text-light" href="/About" Link to="/About">About Me</a> 
        </li>
        <li className="nav-item">
        <a className="nav-link text-light" href="/Portfolio" Link to="/Project">Projects</a> 
        </li>
        
        <li className="nav-item">
        <a className="nav-link text-light" href="/Contact" Link to="/Contact">Contact Me</a> 
        </li>
        
      </ul>
    </div>
          </div>
        </nav>
    
        </>  );
    }
  }

  export default Header;

  
/*

function Header() {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state={
                show: true,
              }
         
        }
        state = {  }

        render() {
            return < {...this.props} />
        }
    }
}
class Header extends Component {
    
    constructor(props) {
      super(props);
      this.state={
        show: true,
      }
    }
    state = {  }
    render()
    
    
    { 
      return (<>
    





















/*
const Header = () => {




  return (


    )
}

export default Header;


 /*
    <header className='header'>
        <div className='container'>
            <div className='row flex-end'>
                <button type='button' className='nav-toggler'>
                    <span></span>
                </button>
<nav className='nav'>
    <div className='nav-inner'  id='text'>
        <ul>
            <li  id='text'><a href='/##' className='nav-item'>Home</a></li>
            <li><a href='/##' className='nav-item'>About</a></li>
            <li><a href='/##' className='nav-item'>Portfolio</a></li>
            <li><a href='/##' className='nav-item'>Contact</a></li>
         </ul>

    </div>

</nav>
            </div>

        </div>

    </header>
 


*/

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