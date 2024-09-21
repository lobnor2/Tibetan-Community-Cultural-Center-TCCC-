import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_para1">
        Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis nunc
        pharetra arcu lectus nisl. risus hendrerit consequat aliquet erat
        ullamcorper diam. Tortor vulputate sed aecenas rhocus viverra purus.
      </div>
      <div className="footer_links">
        <div>
          <div className="timings">
            Feel free to call us in working hours Wed-Sun(8:00 - 16:00). Our
            team will be happy to help answer your queries
          </div>
          <div className="mobileno">+1(335) 000-000</div>
          <div className="footer_social">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="footer_link">
          <div className="footer_company">Company</div>
          <div>Home</div>
          <div>About Us</div>
          <div>Programs</div>
        </div>
        <div className="footer_link">
          <div className="footer_courses">Courses</div>
          <div>Tibetan Language</div>
          <div>Tibetan History</div>
          <div>Tibetan Performing Arts</div>
          <div>Kids classes</div>
        </div>
        <div>
          <div className="footer_subscribe">Subscribe To Newsletter</div>
          <div>
            <input placeholder="Enter your email" className="footer_input" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer_privacy">
        <div className="footer_copyright">
          Copyright © 2023 Passang | Design by Tenzin Passang
        </div>
        <div className="footer_terms">Terms of Use | Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
