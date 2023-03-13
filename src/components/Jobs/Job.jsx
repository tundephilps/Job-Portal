import React from "react";
import { useNavigate } from "react-router-dom";
import blog2 from "../../images/blog2.jpg";
const Job = ({
  item: {
    id,
    role,
    image,
    company,
    location,
    duration,
    salary,
    deadline,
    type,
  },
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div class="bg-white shadow-xl rounded-lg overflow-hidden w-[15] lg:w-[70%]">
        <div
          className="bg-cover bg-center h-16 p-4 flex justify-end items-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">
            DFW <span class="tracking-normal">--</span> SEA
          </p>
        </div>
        <div class="px-4 pb-3 pt-4 border-b border-gray-300 bg-gray-100 flex justify-between">
          <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
            TSA: <span class="font-normal">{duration}</span>
          </div>
          <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
            Location: <span class="font-normal text-green-600">{location}</span>
          </div>
        </div>
        <div class="p-4 text-gray-700 flex lg:justify-between justify-center items-start">
          <div>
            <p class="lg:text-3xl sm:text-1xl text-gray-900 leading-none my-1">
              {role}
            </p>
            <p class="text-xs w-56">{company}</p>
            <p class="text-sm w-56">{type}</p>
          </div>
          <div
            href
            onClick={() => {
              navigate(`/JobDetails/${id}`);
            }}
            class="leading-loose bg-green-500 text-white p-2 px-6  rounded-lg uppercase text-xs tracking-wider cursor-pointer "
          >
            Apply
          </div>
        </div>
        <div class="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600">
          <div class="flex items-center">
            <p>
              <span class="text-sm pr-1">Priority</span>{" "}
              <span class="text-gray-900 font-bold">C</span>
            </p>
          </div>
          <div class="flex items-center">
            <p>
              <span class="text-sm pr-1">Deadline</span>{" "}
              <span class="text-gray-900 font-bold">{deadline}</span>
            </p>
          </div>
          <div class="flex items-center">
            <p>
              <span class="text-sm pr-1">Salary/Month</span>{" "}
              <span class="text-gray-900 font-bold">{salary}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;

/*  <div className="w-[100%] p-4 mb-4">
      <div className="flex flex-row gap-4 justify-between">
        <div className="col-span-6  flex items-center ">
          <img
            className="flex flex-shrink-0 rounded-[10px] h-[80px] w-[80px]"
            src={image}
            alt=""
            //style={{ width: "80px", height: "80px" }}
          />
          <div class="text-start ">
            <h5 class="mb-3">{role}</h5>
            <span class="text-truncate me-3">
              <i class="fa fa-map-marker-alt text-primary me-2"></i>
              {location}
            </span>
            <span class="text-truncate me-3">
              <i class="far fa-clock text-primary me-2"></i>
              {duration}
            </span>
            <span class="text-truncate me-0">
              <i class="far fa-money-bill-alt text-primary me-2"></i>
              {salary}
            </span>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
          <div class="d-flex mb-3">
            <a class="btn btn-light btn-square me-3" href="/#">
              <i class="far fa-heart text-primary"></i>
            </a>
            <a
              class="btn btn-primary"
              href
              onClick={() => {
                navigate(`/JobDetails/${id}`);
              }}
            >
              Apply Now
            </a>
          </div>
          <small class="text-truncate">
            <i class="far fa-calendar-alt text-primary me-2"></i>DeadLine:{" "}
            {deadline}
          </small>
        </div>
      </div>
    </div>
   */

/*
     <div
        class="job-listing"
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "#fff",
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          padding: "2em",
          alignItems: "center",
          boxShadow: "0 10px 6px -6px #777",
          borderLeft: ".3em solid hsla(180, 38%, 37%, 1)",
          borderRadius: "6px 0px 0px 6px",
        }}
      >
        <div class="text-section">
          <p>
            <img
            src={}
              style={{
                fontSize: ".8rem",
                fontWeight: "700",
                color: "hsla(180, 31%, 55%, 1)",
              }}
              class="Ps"
        
            />{" "}
            <span
              style={{
                fontWeight: "700",
                textTransform: "uppercase",
                fontSize: ".7rem",
                background: "hsla(180, 31%, 55%, 1)",
                padding: ".5em",
                color: "#fff",
                borderRadius: ".8em",
                textAlign: "center",
                marginLeft: "2em",
                paddingLeft: ".7em",
                paddingRight: ".7em",
              }}
              class="New"
            >
              New!
            </span>{" "}
            <span
              style={{
                color: "#fff",
                background: "#000",
                padding: ".5em",
                borderRadius: ".8em",
                fontWeight: "700",
                textTransform: "uppercase",
                fontSize: ".7rem",
                marginLeft: ".5em",
                paddingRight: ".7em",
                paddingLeft: ".7em",
              }}
              class="feat"
            >
              featured
            </span>
          </p>
          <p style={{ fontWeight: "700", marginTop: ".8em" }} class="role">
            Senior Frontend Developer
          </p>
          <p
            style={{
              marginTop: ".5em",
              color: "hsl(180, 8%, 52%)",
              fontWeight: "500",
            }}
            class="more-info"
          >
            <span style={{ fontWeight: "500" }} class="date">
              1d ago
            </span>{" "}
            <span class="work-duration">Full time</span>{" "}
            <span class="location">USA only</span>
          </p>
        </div>
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{
              display: "inline-block",
              marginRight: ".5em",
              fontWeight: "700",
              color: "hsla(180, 31%, 55%, 1)",
              background: "hsl(180, 31%, 95%)",
              padding: ".5em",
              fontSize: ".8rem",
            }}
          >
            Frontend
          </li>
          <li
            style={{
              display: "inline-block",
              marginRight: ".5em",
              fontWeight: "700",
              color: "hsla(180, 31%, 55%, 1)",
              background: "hsl(180, 31%, 95%)",
              padding: ".5em",
              fontSize: ".8rem",
            }}
          >
            Senior
          </li>
          <li
            style={{
              display: "inline-block",
              marginRight: ".5em",
              fontWeight: "700",
              color: "hsla(180, 31%, 55%, 1)",
              background: "hsl(180, 31%, 95%)",
              padding: ".5em",
              fontSize: ".8rem",
            }}
          >
            HTML
          </li>
          <li
            style={{
              display: "inline-block",
              marginRight: ".5em",
              fontWeight: "700",
              color: "hsla(180, 31%, 55%, 1)",
              background: "hsl(180, 31%, 95%)",
              padding: ".5em",
              fontSize: ".8rem",
            }}
          >
            CSS
          </li>
          <li
            style={{
              display: "inline-block",
              marginRight: ".5em",
              fontWeight: "700",
              color: "hsla(180, 31%, 55%, 1)",
              background: "hsl(180, 31%, 95%)",
              padding: ".5em",
              fontSize: ".8rem",
            }}
          >
            JavaScript
          </li>
        </ul>
      </div>
    
    */
