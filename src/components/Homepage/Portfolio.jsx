import React from "react";
import product1 from "../../images/product1.jpg";

import construction from "../../images/construction.jpg";
import blog1 from "../../images/blog1.jpg";
import marketing from "../../images/marketing.jpeg";
import productdesign from "../../images/productdesign.jpg";

import blog2 from "../../images/blog2.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="scroll-checkpoint">
      <img src={product1} className="img1" alt="product" />
      <img src={construction} className="img2" alt="product" />

      <img src={blog1} className="img3" alt="product" />
      <div className="title">
        <h1>
          Our <br />
          <span>Career</span> <br />
          Gallery <br />
        </h1>
      </div>
      <img src={productdesign} className="img4" alt="product" />
      <img src={marketing} className="img5" alt="product" />
      <img src={blog2} className="img6" alt="product" />
      <div className="modal"></div>
    </section>
  );
};

export default Portfolio;
