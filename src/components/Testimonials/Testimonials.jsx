import "./Testimonials.css";
import React, { useRef } from "react";
import next_arrow from "../../assets/next-icon.png";
import back_arrow from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img
        src={next_arrow}
        alt=""
        className="next-arrow"
        onClick={slideForward}
      />
      <img
        src={back_arrow}
        alt=""
        className="back-arrow"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jennifer Lawfer</h3>
                  <span>Wahsington DC</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                accusamus neque rem fugit possimus ipsa quo ratione dolore quia
                amet. Temporibus impedit aut animi. Exercitationem reprehenderit
                quas ipsam eligendi consequatur.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jennifer Lawfer</h3>
                  <span>Wahsington DC</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                accusamus neque rem fugit possimus ipsa quo ratione dolore quia
                amet. Temporibus impedit aut animi. Exercitationem reprehenderit
                quas ipsam eligendi consequatur.
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jennifer Lawfer</h3>
                  <span>Wahsington DC</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                accusamus neque rem fugit possimus ipsa quo ratione dolore quia
                amet. Temporibus impedit aut animi. Exercitationem reprehenderit
                quas ipsam eligendi consequatur.
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jennifer Lawfer</h3>
                  <span>Wahsington DC</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                accusamus neque rem fugit possimus ipsa quo ratione dolore quia
                amet. Temporibus impedit aut animi. Exercitationem reprehenderit
                quas ipsam eligendi consequatur.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
