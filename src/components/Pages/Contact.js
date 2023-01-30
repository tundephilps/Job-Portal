import React, { useState } from 'react'
import { TiSocialFacebook,TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineArrowLeft } from "react-icons/ai";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {


    let navigate = useNavigate();


    const [openAlert, setOpenAlert] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
    
        setOpenAlert(false);
    };
    


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ydux1ps', 'template_2phbtna', form.current, 'hEB8pmBeT3g3jM52c')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section className='contact-section sec-padding'>
        <button className='btn' id="close"  href onClick={() => {navigate("/");}} alt="back"><AiOutlineArrowLeft  /></button>
<div className='container'>
    <div className='row'>
        <div className='section-title'>
            <h2>Contact Me</h2>


        </div>

    </div>
<div className='row'>
    <div className='contact-form' 
    //ease-in-out-quad
    data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out-quad" data-aos-duration="600">
        <form  ref={form} onSubmit={sendEmail}>
            <div className='row'>
                <div className='input-group'>
                    <input type="text" placeholder='Name' className='input-control' required name="user_name" />
                </div>
                <div className='input-group'>
                    <input type="email" placeholder='Email' className='input-control' required name="user_email" />
                </div>
                <div className='input-group'>
                    <input type="text" placeholder='Subject' className='input-control' required />
                </div>
                <div className='input-group'>
                    <textarea type="text" placeholder='Message' className='input-control' required name="message"  />
                </div>
                <div className='submit-btn'>
                    <button  className='btn' type="submit" value="Send" onClick={()=>setOpenAlert(true)}>Send Message</button>
                <Snackbar open={openAlert} autoHideDuration={6000}  onClose={handleClose}>
                    <Alert onClose={handleClose}  severity="success">
                        Message Sent
                    </Alert>
                </Snackbar>
                </div>
            
            </div>
        </form>
    </div>
<div className='contact-info'
 data-aos='fade-down'
 data-aos-duration='2000'
 data-aos-delay='1200'
>
    <div className='contact-info-item'>
        <h3>Email</h3>
            <p>tundephilps@gmail.com</p>
    </div>
    <div className='contact-info-item'>
        <h3>Phone</h3>
            <p>+44*********</p>
    </div><div className='contact-info-item'>
        <h3>Follow Me</h3>
        <div className='=social-links'
         
        >
            <a href='https://facebook.com/tundephilps' id='icons'><TiSocialFacebook /></a>
            <a href='/##' id='icons'
            data-aos="slide-left"
            data-aos-duration="300"
            data-aos-delay='300'
            
            ><TiSocialInstagram /></a>
            <a href='/##' id='icons'
            data-aos="slide-left"
            data-aos-duration="700"
            data-aos-delay='600'
            ><TiSocialTwitter /></a>
            <a href='/##' id='icons'
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay='900'
            ><TiSocialYoutube /></a>
            <a href='https://github.com/tundephilps' id='icons'
            data-aos="slide-left"
            data-aos-duration="1300"
            data-aos-delay='1200'
            ><BsGithub /></a>
            
        </div>
            <p></p>
    </div>
</div>
</div>
</div>
    </section>
  )
}

export default Contact