import {
  AirportShuttle,
  BikeScooter,
  PedalBike,
  PedalBikeOutlined,
  PedalBikeRounded,
  PedalBikeSharp,
  Rocket,
  RocketLaunch,
} from "@mui/icons-material";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="scroll-checkpoint">
      <div className="container">
        <div className="title">
          <h1>
            Our <br />
            <span>Pricing</span> <br />
            Plan <br />
          </h1>
        </div>
        <div className="tables">
          <div>
            <span className="material-symbols-outlined ">
              <PedalBikeRounded style={{ fontSize: "5rem" }} />
            </span>
            <h2>Basic</h2>
            <h3>Pricing Plane</h3>
            <p>
              Donec non lobortis mi. Praesent vel elementum odio. Etiam vel nibh
              in odio fringilla sollicitudin sed vel eros. Vestibulum vel
              faucibus
            </p>
            <h1 className="price">$50</h1>
            <a href="#" className="btn">
              Purchase
            </a>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <AirportShuttle style={{ fontSize: "5rem" }} />
            </span>
            <h2>Pro</h2>
            <h3>Pricing Plan</h3>
            <p>
              Donec non lobortis mi. Praesent vel elementum odio. Etiam vel nibh
              in odio fringilla sollicitudin sed vel eros. Vestibulum vel
              faucibus
            </p>
            <h1 className="price">$100</h1>
            <a href="#" className="btn">
              Purchase
            </a>
          </div>
          <div>
            <span className="material-symbols-outlined">
              <RocketLaunch style={{ fontSize: "5rem" }} />
            </span>
            <h2>Enterprise</h2>
            <h3>Pricing Plan</h3>
            <p>
              Donec non lobortis mi. Praesent vel elementum odio. Etiam vel nibh
              in odio fringilla sollicitudin sed vel eros. Vestibulum vel
              faucibus
            </p>
            <h1 className="price">$200</h1>
            <a href="#" className="btn">
              Purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
