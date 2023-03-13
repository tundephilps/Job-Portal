import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="scroll-checkpoint">
      <div className="container">
        <div className="title">
          <h1>
            Latest <br />
            <span>Design</span> <br />
            Blog <br />
          </h1>
        </div>
        <div className="posts">
          <div className="post1">
            <div className="blog-post-img">
              <div className="date">
                <h1>24</h1>
                <small>DEC, 23</small>
              </div>
            </div>
            <div id="new">
              <h2>New Things Coming</h2>
              <p id="para">
                ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
                elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc
                at neque.
              </p>
            </div>
          </div>
          <div className="post2">
            <div className="blog-post-img">
              <div className="date">
                <h1>03</h1>

                <small>DEC, 23</small>
              </div>
            </div>
            <div id="new">
              <h2>New Things Coming</h2>
              <p id="para">
                ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
                elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc
                at neque. Curabitur tincidunt metus at purus gravida, vel
                porttitor
              </p>
            </div>
          </div>
          <div className="post3">
            <div className="blog-post-img">
              <div className="date">
                <h1>14</h1>
                <small>NOV, 23</small>
              </div>
            </div>
            <div id="new">
              <h2>New Design</h2>
              <p>
                ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
                elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc
                at neque. Curabitur tincidunt metus at purus gravida, vel
                porttitor
              </p>
            </div>
          </div>
          <div className="post4">
            <div className="blog-post-img">
              <div className="date">
                <h1>24</h1>
                <small>DEC, 23</small>
              </div>
            </div>
            <div id="p">
              <h2>New Things Coming</h2>
              <p>
                ultricies. Aliquam erat volutpat. Nunc consequat, nunc vitae
                elementum mattis, ex nunc tempus erat, eget accumsan nunc nunc
                at neque. Curabitur tincidunt metus at purus gravida, vel
                porttitor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
