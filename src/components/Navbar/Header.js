import React from "react";
import MobileNav from "./MobileNav";
import "./Navbar.scss";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="/#"
        class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 class="m-0 text-primary">Optimum Recruiter</h1>
      </a>
      <MobileNav />
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" class="nav-item nav-link active">
            Home
          </a>
          <div class="nav-item dropdown">
            <a
              href="/#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </a>
            <div class="dropdown-menu rounded-0 m-0">
              <a href="/JobList" class="dropdown-item">
                Job List
              </a>
              <a href="/JobDetails/:id" class="dropdown-item">
                Job Detail
              </a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="/#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div class="dropdown-menu rounded-0 m-0">
              <a href="/#" class="dropdown-item">
                Job Category
              </a>
              <a href="/#" class="dropdown-item">
                404
              </a>
            </div>
          </div>
          <a href="/Contact" class="nav-item nav-link">
            Contact
          </a>
        </div>
        <a
          href="/Profile"
          class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Upload Profile<i class="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
