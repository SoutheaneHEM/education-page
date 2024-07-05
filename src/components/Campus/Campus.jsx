import "./Campus.css";
import React from "react";
import campusimg1 from "../../assets/gallery-1.png";
import campusimg2 from "../../assets/gallery-2.png";
import campusimg3 from "../../assets/gallery-3.png";
import campusimg4 from "../../assets/gallery-4.png";
import whitearrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="campus-gallery">
        <img src={campusimg1} alt="" />
        <img src={campusimg2} alt="" />
        <img src={campusimg3} alt="" />
        <img src={campusimg4} alt="" />
      </div>
      <div className="btn btn-dark">
        See More <img src={whitearrow} alt="" />
      </div>
    </div>
  );
};

export default Campus;
