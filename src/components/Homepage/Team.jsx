import React from "react";
import person1 from "../../images/person1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";

const Team = () => {
  return (
    <section id="our-team" className="scroll-checkpoint">
      <div className="container">
        <div className="title">
          <h1>
            Creative <br />
            <span>Team</span> <br />
            Members <br />
          </h1>
        </div>
        <div className="team">
          <div>
            <img src={person1} alt="person" />
            <h2>Julia Sanchez</h2>
            <h3>Graphics Designer</h3>
            <p>ywexwsxsiuxusoxosbxosbxosbxosbxjo sbxosbxosbxosbxjo</p>
          </div>

          <div>
            <img src={person2} alt="person" />
            <h2>ola kunle</h2>
            <h3>Graphics Designer</h3>
            <p>ywbosbxsuobuosbuob</p>
          </div>

          <div>
            <img src={person3} alt="person" />
            <h2>Morgan Smith</h2>
            <h3>Graphics Designer</h3>
            <p>ywosbxjobosbxsuobuosbuob</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
