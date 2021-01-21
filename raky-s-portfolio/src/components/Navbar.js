import React from "react";
import mypropic from "../assets/profilpic023134.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={mypropic} alt="logo" /> Raky-S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ml-auto">
              <a className="nav-link" href="#">
                home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                about me
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                portfolio
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                hard skills
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
