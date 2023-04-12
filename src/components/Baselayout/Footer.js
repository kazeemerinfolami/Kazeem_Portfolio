import React, { useState } from "react";
import myImage from "../../assets/images/IMG_4278.jpeg";
import MediaSection from "../../Pages/LandingPage/MediaSection";

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
                  <a href="#/">hgsggs </a>
                </li>

                <li>
                  <a href="#/">hgsggs </a>
                </li>
                <li>
                  <a href="#/">hgsggs </a>
                </li>
              </ul>
            </aside>
            <main>
              <ul onMouseOver={() => handleSwitchMedia("hobbies")}>
                <h1>Hobbies</h1>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
              </ul>
              <ul onMouseOver={() => handleSwitchMedia("vul")}>
                <h1>Volunteers</h1>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
              </ul>
              <ul onMouseOver={() => handleSwitchMedia("sth")}>
                <h1>Languages</h1>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
                <li>hdhsh</li>
              </ul>
            </main>
          </div>
          <h5> @{currentYear} Kazeem E</h5>
        </article>
      </h6>
    </footer>
  );
}

export default Footer;
