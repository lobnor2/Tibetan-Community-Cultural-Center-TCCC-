import React from "react";
import "./testimony.css";
import Testi from "../../assets/images/testimonial_girl.png";

const Testimony = () => {
  return (
    <div className="testimony_container">
      <div className="testimony_heading">What People Say</div>
      <div className="testimony_main">
        <div className="testimony_left">
          <div className="testimony_testimony">TESTIMONY</div>
          <div className="test_heading">What They Say About Us</div>
          <div className="testimony_description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            facilisis metus sed luctus posuere. Mauris interdum lectus venenatis
            ligula porta, at condimentum est commodo. Vivamus vel justo tempor,
            condimentum eros id, lobortis tellus. Ut finibus purus justo.
            Pellentesque enim ex, finibus in elit quis, facilisis aliquam
            ligula. Donec mattis lorem."
          </div>
          <div className="testimony_name">Rizqi Assegaf</div>
          <div className="testimony_address">Student At Tutorify</div>
        </div>
        <img src={Testi} className="testimony_pic" />
      </div>
    </div>
  );
};

export default Testimony;
