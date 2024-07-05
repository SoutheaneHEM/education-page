import React from "react";
import "../Hero/Hero.css";
import black_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container" id="heropage">
      <div className="hero-text">
        <h1>We ensure to provide best education for a better world</h1>
        <p>
          Our cutting edge curriculumn is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">
          Explore More <img src={black_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
