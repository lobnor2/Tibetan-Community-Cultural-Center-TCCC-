import React from "react";
import "./media.css";
import Book from "../../assets/images/tibetan_enclopedia.png";
import Dance from "../../assets/images/tibetan_man_dancing.png";
import Camera from "../../assets/images/man_recording.png";
const Media = () => {
  return (
    <div className="media_container">
      <div className="media1">
        <img src={Book} className="media_pic" />
        <div className="media_heading">Tibetan Encyclopedia</div>
        <div className="media_description">
          Search for Tibetan words and grammers that you find unusual
        </div>
        <button>View Encyclepedia</button>
      </div>
      <div className="media2">
        <img src={Dance} className="media_pic" />
        <div className="media_heading">Gallery</div>
        <div className="media_description">
          Photos and videos of school's campus, classroms, cultural events, and
          student actibites.
        </div>
        <button>View Gallery</button>
      </div>
      <div className="media3">
        <img src={Camera} className="media_pic" />
        <div className="media_heading">Audio and Video Resources</div>
        <div className="media_description">
          Share audio recordings of Tibetan language lessons, traditional music,
          chants and spoken-word literature.
        </div>
        <button>View Audio and Video</button>
      </div>
    </div>
  );
};

export default Media;
