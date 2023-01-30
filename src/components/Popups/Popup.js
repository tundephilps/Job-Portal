import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProjectData from "../Pages/ProjectData";
import { AiOutlineArrowLeft } from "react-icons/ai";
//import page1 from "../images/page1.png";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router";

const Popup = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = ProjectData.find((item) => item.id == parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <div className="portfolio-popup">
          <button
            className="btn"
            id="close"
            href
            onClick={() => {
              navigate("/Portfolio");
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          <div className="pp-inner">
            <div className="pp-content">
              <div className="pp-header">
                <div className="pp-thumbnail">
                  <img src={item.image} alt="pp-thumbnail" />
                </div>
                <h3>{item.title}</h3>
              </div>
              <div className="pp-body">
                <div className="description">
                  <p>{item.description}</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>{item.date}</span>
                    </li>
                    <li>
                      Technologies used - <span>{item.tech} </span>
                    </li>
                    <li>
                      Role - <span>Front End</span>
                    </li>
                    <li>
                      View Online -{" "}
                      <span>
                        <a href={item.Link}>{item.Link}</a>
                      </span>
                      <div className="=social-links">
                        Source Code -{" "}
                        <a href={item.sourcecode} id="icons" alt="View Code">
                          <BsGithub />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Not Avaliable</h1>
      )}
    </>
  );
};

export default Popup;
