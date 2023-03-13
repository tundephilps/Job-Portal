import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import JobData from "./JobData";

import { useNavigate } from "react-router";

import { FilledInput, Modal } from "@mui/material";
import BasicModal from "./BasicModal";

//import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const JobDetails = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = JobData.find((item) => item.id == parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <div>
          <div class="md:grid grid-cols-3 gap-8 h-[100%] p-[2rem]  ">
            <div class="col-span-2 ">
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    width: "100%",
                  }}
                >
                  <img
                    style={{
                      flexShrink: "0",
                      width: "70px",
                      height: "80px",
                      border: "0.2px light",
                      borderRadius: "10px",
                    }}
                    src={item.image}
                    alt=""
                  />
                  <div
                    style={{
                      position: "relative",
                      padding: "10px",
                      marginLeft: "14px",
                      maxWidth: "full",
                    }}
                  >
                    <h2 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>
                      {item.role}
                    </h2>
                    <span
                      class="text-truncate me-3"
                      style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        marginTop: "3px",
                        marginBottom: "3px",
                        width: "100%",
                      }}
                    >
                      <i
                        class="fa fa-map-marker-alt  "
                        style={{
                          marginRight: "7px",
                          color: "blue",
                        }}
                      ></i>
                      {item.location}
                    </span>
                    <span class="text-truncate me-3">
                      <i
                        class="far fa-clock "
                        style={{
                          marginRight: "7px",
                          paddingLeft: "15px",
                          fontWeight: "900",
                          color: "blue",
                        }}
                      ></i>
                      {item.duration}
                    </span>
                    <span class="text-truncate me-0">
                      <i
                        class="far fa-money-bill-alt "
                        style={{
                          marginRight: "7px",
                          paddingLeft: "15px",
                          color: "blue",
                        }}
                      ></i>
                      {item.salary}
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "4rem" }}>
                  <h2 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
                    Job description
                  </h2>
                  <p>
                    Dolor justo tempor duo ipsum accusam rebum gubergren erat.
                    Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum
                    elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero
                    labore invidunt dolor sed, eirmod dolore amet aliquyam
                    consetetur lorem, amet elitr clita et sed consetetur dolore
                    accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed
                    lorem sea magna. Rebum vero dolores dolores elitr vero
                    dolores magna, stet sea sadipscing stet et. Est voluptua et
                    sanctus at sanctus erat vero sed sed, amet duo no diam clita
                    rebum duo, accusam tempor takimata clita stet nonumy rebum
                    est invidunt stet, dolor.
                  </p>
                  <h4
                    style={{
                      marginBottom: "1.5rem",
                      fontSize: "2rem",
                      marginTop: "3rem",
                    }}
                  >
                    Responsibility
                  </h4>
                  <p>
                    Magna et elitr diam sed lorem. Diam diam stet erat no est
                    est. Accusam sed lorem stet voluptua sit sit at stet
                    consetetur, takimata at diam kasd gubergren elitr dolor
                  </p>
                  <ul class="list-none pl-4" style={{ paddingTop: "1.3rem" }}>
                    <li>
                      <i
                        class="fa fa-angle-right "
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Dolor justo tempor duo ipsum accusam
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Elitr stet dolor vero clita labore gubergren
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Rebum vero dolores dolores elitr
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Est voluptua et sanctus at sanctus erat
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Diam diam stet erat no est est
                    </li>
                  </ul>
                  <h4
                    style={{
                      marginBottom: "1.5rem",
                      fontSize: "2rem",
                      marginTop: "3rem",
                    }}
                  >
                    Qualifications
                  </h4>
                  <p>
                    Magna et elitr diam sed lorem. Diam diam stet erat no est
                    est. Accusam sed lorem stet voluptua sit sit at stet
                    consetetur, takimata at diam kasd gubergren elitr dolor
                  </p>
                  <ul class="list-none pl-4" style={{ paddingTop: "1.3rem" }}>
                    <li>
                      <i
                        className="fa fa-angle-right  me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Dolor justo tempor duo ipsum accusam
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Elitr stet dolor vero clita labore gubergren
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Rebum vero dolores dolores elitr
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Est voluptua et sanctus at sanctus erat
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-right text-primary me-2"
                        style={{ color: "blue", paddingRight: "8px" }}
                      ></i>
                      Diam diam stet erat no est est
                    </li>
                  </ul>
                </div>

                <div class="" style={{ paddingTop: "2.4rem" }}>
                  <h4 class="mb-4" style={{ fontSize: "1.3rem" }}>
                    Apply For The Job
                  </h4>
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <FilledInput
                          type="text"
                          placeholder="Your Name"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div>
                        <FilledInput
                          type="email"
                          placeholder="Your Email"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <div class="col-12 col-sm-6">
                        <FilledInput
                          type="text"
                          class="form-control"
                          placeholder="Portfolio Website"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <FilledInput
                          type="file"
                          class="form-control bg-white"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div>
                        <textarea
                          class="form-control"
                          rows="7"
                          placeholder="Coverletter"
                          style={{
                            width: "100%",
                            marginTop: "20px",
                            border: "1px solid",
                            padding: "10px",
                          }}
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <BasicModal />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div className="col-lg-4">
                <div
                  className="bg-slate-300 rounded p-5 mb-4 wow slideInUp"
                  data-wow-delay="0.1s"
                >
                  <h4 class="mb-4 text-3xl">Job Summary</h4>
                  <p>
                    <i class="fa fa-angle-right text-blue-800 px-3"></i>
                    Published On: 01 Jan, 2045
                  </p>
                  <p>
                    <i class="fa fa-angle-right  text-blue-800 px-3"></i>
                    Vacancy: 123 Position
                  </p>
                  <p>
                    <i class="fa fa-angle-right  text-blue-800 px-3"></i>Job
                    Nature: Full Time
                  </p>
                  <p>
                    <i class="fa fa-angle-right  text-blue-800 px-3"></i>
                    Salary: {item.salary}
                  </p>
                  <p>
                    <i class="fa fa-angle-right  text-blue-800 px-3"></i>
                    Location: {item.location}
                  </p>
                  <p class="m-0">
                    <i class="fa fa-angle-right  text-blue-800 px-3"></i>Dead
                    Line: {item.deadline}
                  </p>
                </div>
                <div
                  className="bg-slate-300 rounded p-5 py-[2rem] mt-[3rem]"
                  data-wow-delay="0.1s"
                >
                  <h4 class="mb-4 text-3xl">Company Detail</h4>
                  <p class="m-0">
                    Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum
                    sadipscing elitr vero dolores. Lorem dolore elitr justo et
                    no gubergren sadipscing, ipsum et takimata aliquyam et rebum
                    est ipsum lorem diam. Et lorem magna eirmod est et et
                    sanctus et, kasd clita labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1
          style={{
            textAlign: "center",
            justifyContent: "center",
            lineHeight: "50vh",
          }}
        >
          Apply for a Job First
        </h1>
      )}
    </>
  );
};

export default JobDetails;
