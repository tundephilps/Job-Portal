import React, { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import ProjectData from "./ProjectData";

const Projects = () => {
  const [items] = useState(ProjectData);

  return (
    <>
      <section className="portfolio-section sec-padding">
        <Header />
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            {items.map((item) => {
              return <Project key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
