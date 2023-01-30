import React from 'react'
import about1 from "../../images/about-1.jpg"
import about2 from "../../images/about-2.jpg"
import about3 from "../../images/about-3.jpg"
import about4 from "../../images/about-4.jpg"



const About = () => {
  return (
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="row g-0 about-bg rounded overflow-hidden">
                    <div class="col-6 text-start">
                        <img class="img-fluid w-100" src={about1} alt="" />
                    </div>
                    <div class="col-6 text-start">
                        <img class="img-fluid" src={about2} style={{width: "85%", marginTop: "15%"}} alt="" />
                    </div>
                    <div class="col-6 text-end">
                        <img class="img-fluid" src={about3} style={{width: "85%"}} alt="" />
                    </div>
                    <div class="col-6 text-end">
                        <img class="img-fluid w-100" src={about4} alt="" />
                    </div>
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 class="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                <a class="btn btn-primary py-3 px-5 mt-3" href="/#">Read More</a>
            </div>
        </div>
    </div>
</div>

  )
}

export default About;