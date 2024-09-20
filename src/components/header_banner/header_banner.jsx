import React from "react";
import "./header_banner.css";
import Logo from "../../assets/images/Tccc_Logo.png";

const Nav = () => {
  return (
    <div className="header_banner">
      <img
        src={Logo}
        className="header_banner_logo"
        style={{ width: "100px", height: "70px" }}
      />
      <div className="header_banner_slogan">
        Promoting Tibetan Language, Culture and Identity
      </div>
    </div>
  );
};

export default Nav;
