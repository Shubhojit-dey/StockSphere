import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom fixed-top"
        style={{ backgroundColor: "#FFF", height: "9%" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" style={{ width: "25%" }}></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex " role="search">
              <ul className="navbar-nav navstyle mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ marginBottom: "5%" }} className="pb-5"></div>
    </>
  );
}

export default Navbar;
