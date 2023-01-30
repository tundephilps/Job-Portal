import React from "react";
import carousel1 from "../../images/carousel-1.jpeg";
import carousel2 from "../../images/carousel-2.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <div class="container-fluid p-0" style={{ height: "90vh" }}>
        <div class="owl-carousel header-carousel position-relative">
          <Swiper
            className="mySwiper"
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div class="owl-carousel-item position-relative">
                <img
                  class="img-fluid"
                  src={carousel1}
                  alt=""
                  style={{ width: "100%", height: "90vh" }}
                />
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(43, 57, 64, .5)" }}
                >
                  <div class="container">
                    <div class="row justify-content-start">
                      <div class="col-10 col-lg-8">
                        <h1 class="display-3 text-white animated slideInDown mb-4">
                          Find The Perfect Job That You Deserved
                        </h1>
                        <p class="fs-5 fw-medium text-white mb-4 pb-2">
                          Vero elitr justo clita lorem. Ipsum dolor at sed stet
                          sit diam no. Kasd rebum ipsum et diam justo clita et
                          kasd rebum sea elitr.
                        </p>
                        <a
                          href="/#"
                          class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        >
                          Search A Job
                        </a>
                        <a
                          href="/#"
                          class="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                        >
                          Find A Talent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="owl-carousel-item position-relative">
                <img
                  class="img-fluid"
                  src={carousel2}
                  alt=""
                  style={{ width: "100%", height: "90vh" }}
                />
                <div
                  class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(43, 57, 64, .5)" }}
                >
                  <div class="container">
                    <div class="row justify-content-start">
                      <div class="col-10 col-lg-8">
                        <h1 class="display-3 text-white animated slideInDown mb-4">
                          Find The Best Startup Job That Fit You
                        </h1>
                        <p class="fs-5 fw-medium text-white mb-4 pb-2">
                          Vero elitr justo clita lorem. Ipsum dolor at sed stet
                          sit diam no. Kasd rebum ipsum et diam justo clita et
                          kasd rebum sea elitr.
                        </p>
                        <a
                          href="/JobList"
                          class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        >
                          Search A Job
                        </a>
                        <a
                          href="/#"
                          class="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                        >
                          Find A Talent
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        class="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ padding: "35px" }}
      >
        <div class="container">
          <div class="row g-2">
            <div class="col-md-10">
              <div class="row g-2">
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Keyword"
                  />
                </div>
                <div class="col-md-4">
                  <select class="form-select border-0">
                    <option select>Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-select border-0">
                    <option select>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <button class="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
