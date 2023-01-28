import React from "react";
import Accordions from "./Accordions";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <header>
        <div>
          <h2>We're Accepting applications!</h2>
          <p>
            Fill the form, attach your latest CV and portfolio to get listed
          </p>
        </div>
      </header>

      <main className="maincontainer">
        <Accordions />
      </main>
    </>
  );
};

export default Profile;
