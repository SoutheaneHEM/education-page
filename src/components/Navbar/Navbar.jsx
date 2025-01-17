import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={toggle ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="heropage" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-280} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about-page" smooth={true} offset={-150} duration={500}>
            About us
          </Link>{" "}
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>{" "}
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-400} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
