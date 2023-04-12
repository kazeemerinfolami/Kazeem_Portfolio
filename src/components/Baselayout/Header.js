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
        <a href="https://docs.google.com/document/d/1Leu7bKJ_6W1S-Ozu47Hv6q9Usz9kFlL_AhNG1Kf81xU/edit?usp=sharing">
          <div>Download cv</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
