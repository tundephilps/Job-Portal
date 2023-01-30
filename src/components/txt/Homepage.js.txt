import React from 'react'
import { useNavigate } from 'react-router';
import Header from './Header';
import suit from "./images/suit.jpg";

const Homepage = () => {

  let navigate = useNavigate();

  return (
    <section className='home-section align-items-center'>
      <Header />
      <div className='bg-circles'>
      <div className='circle-1'></div>
      <div className='circle-2'></div>
      <div className='circle-3'></div>
      <div className='circle-4'></div>

      </div>

        <div className='container'>
<div className='row align-items-center'>
<div className='home-text'
data-aos='fade-right'
data-aos-delay='600'
>
<p>Hello, I'm</p>
<h1>Tunde Akinola Philps</h1>
<h2>frontend Web developer</h2>
<a href onClick={() => {navigate("/About");}} className='btn'>More about me</a>

<a href onClick={() => {navigate("/Portfolio");}} className='btn'>Portfolio</a>
</div>
<div className='home-img' 
data-aos='fade-left'
data-aos-delay='600'
>
<div className='img-box'>
  <img src={suit}  alt="profile" />

</div>
</div>
</div>

        </div>


    </section>
  )
}

export default Homepage;