import React from "react";
import myImage from "../../assets/images/IMG_4278.jpeg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  // Extract the current page's pathname
  const pathname = location.pathname;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={myImage} alt="myImage" />
          </li>
          <li>
            <Link to="/" style={pathname === "/" ? { color: "#000" } : null}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={pathname === "/contact" ? { color: "#000" } : null}
            >
              Contact
            </Link>
          </li>
        </ul>
        <a href="https://docs.google.com/document/d/1W-U5DsewabGf7nUhV9z2W3Q0S11MRUEZozo5niYIZSQ/edit?usp=sharing">
          <div>Download cv</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
