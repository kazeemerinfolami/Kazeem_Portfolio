import React, { useState } from "react";
import { AboutMeSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";

function AboutMeSection() {
  const [switchSection, setSwitchSection] = useState("aboutComp");

  const handleSwitchSection = (intialValue) => {
    setSwitchSection(intialValue);
  };
  return (
    <AboutMeSectionStyles>
      <h1>About Me</h1>
      <section>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam .
        </h2>
        <ul>
          <li
            className={switchSection === "aboutMe" ? "activeSection" : null}
            onClick={() => handleSwitchSection("aboutMe")}
          >
            About me
          </li>
          <li
            className={switchSection === "aboutLang" ? "activeSection" : null}
            onClick={() => handleSwitchSection("aboutLang")}
          >
            Tools
          </li>
          <li
            className={switchSection === "aboutComp" ? "activeSection" : null}
            onClick={() => handleSwitchSection("aboutComp")}
          >
            Companies
          </li>
        </ul>
        <div>
          <p>
            {switchSection === "aboutMe" ? (
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam .
              </h6>
            ) : switchSection === "aboutLang" ? (
              <h6>
                aboutLang Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam .
              </h6>
            ) : switchSection === "aboutComp" ? (
              <h6>
                aboutComp Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam .
              </h6>
            ) : null}
          </p>
        </div>
      </section>
    </AboutMeSectionStyles>
  );
}

export default AboutMeSection;
