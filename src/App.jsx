import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Program/Programs";
import Title from "./components/Title/Title";
import AboutPage from "./components/About/AboutPage";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <AboutPage setPlayVideo={setPlayVideo} />
      </div>
      <div className="second-container">
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
      </div>
      <div className="container">
        <Title subTitle="Testimonials" title="What students says" />
        <Testimonials />
      </div>
      <div className="second-container">
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
      </div>
      <div className="container">
        <Footer />
      </div>
      <VideoPlayer playState={playVideo} setPlayVideo={setPlayVideo} />
    </div>
  );
};

export default App;
