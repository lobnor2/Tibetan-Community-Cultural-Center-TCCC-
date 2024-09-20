import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar_menu">
        <div>Home</div>
        <div>About Us</div>
        <div>Courses</div>
        <div>Library</div>
        <div>Events</div>
      </div>
      <div className="navbar_button">
        <button>Contribute</button>
      </div>
    </div>
  );
};

export default Nav;
