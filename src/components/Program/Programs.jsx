import React from "react";
import "./Program.css";
import Image1 from "../../assets/program-1.png";
import Image2 from "../../assets/program-2.png";
import Image3 from "../../assets/program-3.png";
import caption1 from "../../assets/program-icon-1.png";
import caption2 from "../../assets/program-icon-2.png";
import caption3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program-image">
        <img src={Image1} alt="" />
        <div className="caption">
          <img src={caption1} alt="" />
          <p>Undergraduate Degree</p>
        </div>
      </div>
      <div className="program-image">
        <img src={Image2} alt="" />
        <div className="caption">
          <img src={caption2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program-image">
        <img src={Image3} alt="" />
        <div className="caption">
          <img src={caption3} alt="" />
          <p>Post-Graduate Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
