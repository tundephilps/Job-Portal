import {
  AddBox,
  Business,
  BusinessCenter,
  DesignServices,
  DesignServicesOutlined,
  Engineering,
  GifBox,
  GifTwoTone,
  Language,
  MedicalInformation,
  MedicalServices,
  MiscellaneousServices,
} from "@mui/icons-material";
import React, { useState } from "react";
import { FiPackage } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="scroll-checkpoint">
      <div className="container">
        <div className="title">
          <h1>
            Our <br />
            <span>Special</span> <br />
            Services <br />
          </h1>
        </div>
        <div className="items">
          <div>
            <span className="material-symbols-outlined">
              <Language style={{ fontSize: "5rem" }} />
            </span>
            <h3>Web Design</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <Engineering style={{ fontSize: "5rem" }} />
            </span>
            <h3>Engineering</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <DesignServices style={{ fontSize: "5rem" }} />
            </span>
            <h3>Wireframing</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <MiscellaneousServices style={{ fontSize: "5rem" }} />
            </span>
            <h3>Services</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <MedicalServices style={{ fontSize: "5rem" }} />
            </span>
            <h3>Medicine</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi.
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <BusinessCenter style={{ fontSize: "5rem" }} />
            </span>
            <h3>App Design</h3>
            <p>
              ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
              elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc at
              neque. Curabitur tincidunt metus at purus gravida, vel porttitor
              velit pulvinar. Nulla facilisi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
