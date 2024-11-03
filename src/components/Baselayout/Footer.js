import React, { useState } from "react";
import myImage from "../../assets/images/IMG_4278.jpeg";
import MediaSection from "../../Pages/LandingPage/MediaSection";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./BaseLayoutStyles";

function Footer({ showNoMedia }) {
  const currentYear = new Date().getFullYear();
  const [switchMedia, setSwitchMedia] = useState("hobbies");

  const handleSwitchMedia = (sth) => {
    setSwitchMedia(sth);
  };

  return (
    <footer>
      {showNoMedia === "yes" ? (
        <MediaSection switchMedia={switchMedia} />
      ) : null}
      <h6>
        <article>
          <div>
            <aside>
              <p>
                <img src={myImage} alt="myImage" />
                <h2>
                  Feel free to follow me on any social media believe me I'm not
                  boring
                </h2>
              </p>
              <ul>
                <li>
                  <a href="https://www.instagram.com/kazeemerin/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/erinfolamibolaji">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kazeem-erinfolami-974739190/">
                    <LinkedinIcon />
                  </a>
                </li>
              </ul>
            </aside>
            {showNoMedia === "yes" ? (
              <main>
                <ul onMouseOver={() => handleSwitchMedia("hobbies")}>
                  <h1
                    style={
                      switchMedia === "hobbies"
                        ? {
                            color: "#696867",
                          }
                        : null
                    }
                  >
                    Hobbies
                  </h1>
                  <li>Problem Solving</li>
                  <li>Music</li>
                  <li>Teamwork</li>
                  <li>Continuous Learning</li>
                </ul>
                <ul onMouseOver={() => handleSwitchMedia("vul")}>
                  <h1
                    style={
                      switchMedia === "vul"
                        ? {
                            color: "#696867",
                          }
                        : null
                    }
                  >
                    Volunteers
                  </h1>
                  <li>TFG</li>
                  <li>Monerce</li>
                  <li>Medcob</li>
                </ul>
                <ul onMouseOver={() => handleSwitchMedia("sth")}>
                  <h1
                    style={
                      switchMedia === "sth"
                        ? {
                            color: "#696867",
                          }
                        : null
                    }
                  >
                    Languages
                  </h1>
                  <li>English</li>
                  <li>Yoruba</li>
                </ul>
              </main>
            ) : null}
          </div>
          <h5> @{currentYear} Kazeem B Erinfolami</h5>
        </article>
      </h6>
    </footer>
  );
}

export default Footer;
