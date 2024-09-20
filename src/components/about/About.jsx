import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_tccc">
        <div className="about_heading">
          About TCCC (Tibetan Community Cultural Center)
        </div>
        <div className="about_description">
          The Tibetan Canadian Cultural Centre was acquired and established on
          October 17, 2007 (the auspicious day when His Holiness the Dalai Lama
          received the US congressional Gold Medal - the highest civilian
          award). Currently the Centre offers a variety of programs and services
          which is open to everyone.
        </div>
      </div>
      <div className="about_details">
        <div className="about_programs">
          <div className="details_no">450 +</div>
          <div className="details_description">Programs Held</div>
        </div>
        <div className="about_memberships">
          <div className="details_no">960 +</div>
          <div className="details_description">Memberships</div>
        </div>
        <div className="about_events">
          <div className="details_no">702 +</div>
          <div className="details_description">Events</div>
        </div>
        <div className="about_weedings">
          <div className="details_no">72 +</div>
          <div className="details_description">Weedings</div>
        </div>
      </div>
    </div>
  );
};

export default About;
