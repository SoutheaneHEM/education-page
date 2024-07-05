import "./AboutPage.css";
import React from "react";
import aboutimage from "../../assets/about.png";
import Playicon from "../../assets/play-icon.png";

const AboutPage = ({ setPlayVideo }) => {
  return (
    <div className="about-page">
      <div className="about-left">
        <img src={aboutimage} alt="" className="aboutimage" />
        <img
          src={Playicon}
          alt=""
          className="playicon"
          onClick={() => {
            setPlayVideo(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam
          eum temporibus voluptatem. Soluta nobis assumenda, expedita quo
          corporis libero, autem recusandae dolor qui adipisci labore, eum odio
          fuga repellat?Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt
          animi cumque deserunt sed consequatur voluptate commodi, ab error
          debitis laboriosam suscipit ipsum nesciunt porro natus doloremque
          voluptatem at reprehenderit. rem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor ullam eum temporibus voluptatem. Soluta nobis
          assumenda, expedita quo corporis libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus
          nemo sit itaque iste nesciunt, eius debitis enim magnam vel dolor
          molestias ipsa dolorem illum hic incidunt quia! Impedit, Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
