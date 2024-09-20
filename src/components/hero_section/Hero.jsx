import React from "react";
import HeroPic from "../../assets/images/student_group_pic.png";
import "./hero.css";
const hero = () => {
  return (
    <div className="hero">
      <img src={HeroPic} className="hero_group_pic" />
    </div>
  );
};

export default hero;
