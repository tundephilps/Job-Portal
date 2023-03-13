import React from "react";
import banner from "../../images/banner.jpg";
import { Nav2 } from "./Nav2";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <div className="relative lg:h-[100vh] sm:h-[70vh] ">
      <img
        src={banner}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />

      <div className="relative bg-gray-900 bg-opacity-75 h-full ">
        <div className="h-full   py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-[3rem] md:px-24 lg:px-6 lg:py-20  ">
          <div className="h-full  flex flex-col items-center justify-between xl:flex-row lg:px-7 pt-7">
            <div className="w-full  max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="text-white">
                Welcome To The{" "}
                <span>
                  Award <br /> Winning
                </span>{" "}
                Agency{" "}
              </h1>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <div className="buttons">
                <a href="#" class="btn">
                  Get Started
                </a>

                <a href="#" class="btn-secondary text-white">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
