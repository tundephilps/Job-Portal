import React from "react";
import Accordions from "./Accordions";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <div id="Nav">
        <div>
          <h2>We're Accepting applications!</h2>
          <p>
            Fill the form, attach your latest CV and portfolio to get listed
          </p>
        </div>
      </div>

      <div className="maincontainer">
        <Accordions />
      </div>
    </>
  );
};

export default Profile;
