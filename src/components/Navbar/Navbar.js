import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { RiAlarmWarningLine } from "react-icons/ri";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="nav"
      style={{
        backgroundColor: ` ${!scrollY ? "transparent" : "black"}`,
      }}
    >
      <div className="nav-left">
        <a href="/">
          <img className="nav-logo" src="/assets/logo.png" alt="Netflix" />
        </a>
        <a href="#" className="nav-left-links">
          Home
        </a>
        <a href="#" className="nav-left-links">
          TV Shows
        </a>
        <a href="#" className="nav-left-links">
          Movies
        </a>
        <a href="#" className="nav-left-links">
          Recently Added
        </a>
        <a href="#" className="nav-left-links">
          My List
        </a>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-right-icon">
          <FaSearch />
        </a>
        <a href="#" className="nav-right-links">
          KIDS
        </a>
        <a href="#" className="nav-right-links">
          DVD
        </a>
        <a href="#" className="nav-right-icon">
          <RiAlarmWarningLine />
        </a>
        <a href="#">
          <img
            className="user-logo"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="User"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
