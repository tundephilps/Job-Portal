import {
  Call,
  DesktopMac,
  DesktopWindowsOutlined,
  GpsFixed,
  LocationCity,
  LocationOn,
  Mail,
} from "@mui/icons-material";
import React from "react";
import contact from "../../images/contact.jpg";

const Contact = () => {
  return (
    <section id="contact" className="scroll-checkpoint">
      <div className="container">
        <div>
          <h1>
            How To <br />
            <span>Find Us</span> <br />
          </h1>
          <div className="contact-method">
            <span className="material-symbols-outlined">
              <LocationOn style={{ fontSize: "5rem" }} />
            </span>
            <div>
              <h3>Address</h3>
              <p>
                succeed in this role within the company I’m excited about this
                job opportunity, as it would allow me to gain more real world{" "}
              </p>
            </div>
          </div>

          <div className="contact-method">
            <span className="material-symbols-outlined">
              <Call style={{ fontSize: "5rem" }} />
            </span>
            <div>
              <h3>Call Us</h3>
              <p>+123 456 7891</p>
              <p>+123 456 7891</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="material-symbols-outlined">
              <Mail style={{ fontSize: "5rem" }} />
            </span>
            <div>
              <h3>Email</h3>
              <p>optimumrecruiters@gmail.com</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="material-symbols-outlined">
              <DesktopWindowsOutlined style={{ fontSize: "5rem" }} />
            </span>
            <div>
              <h3>website</h3>
              <p>www.optimumrecruiters.com</p>
            </div>
          </div>
        </div>
        <img src={contact} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
