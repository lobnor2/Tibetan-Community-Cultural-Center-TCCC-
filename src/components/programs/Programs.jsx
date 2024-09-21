import React from "react";
import "./programs.css";
import Writing from "../../assets/images/student_writing_tibetan_pic.png";
import Tashi from "../../assets/images/tashi_soepa_pic.png";
const Programs = () => {
  return (
    <div className="program_container">
      <div className="program1">
        <img src={Writing} className="program1_pic" />

        <div className="program1_right_des">
          <div className="program1_heading">
            Ready To Help You <br />
            Learn
            <span className="greenText"> Tibetan Language</span>
          </div>
          <div className="program1_description">
            Lorem ipsum dolor sit amet, consectur adipiscing elit. Risus
            dignissim faucibus id sit consequat. Vivamus quam senectus vitae
            dolor ac.
          </div>

          <button className="learn">Learn Tibetan Language</button>
        </div>
      </div>
      {/* program 2 */}
      <div className="program2">
        <img src={Tashi} className="program2_pic" />

        <div className="program2_right_des">
          <div className="program2_heading">
            Ready To Help You Learn <br />
            <span className="greenText">Tibetan Traditional Arts</span>
          </div>
          <div className="program2_description">
            Lorem ipsum dolor sit amet, consectur adipiscing elit. Risus
            dignissim faucibus id sit consequat. Vivamus quam senectus vitae
            dolor ac.
          </div>

          <button className="learn">Learn Traditional Arts</button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
