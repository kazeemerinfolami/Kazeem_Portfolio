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
          I am a software developer with two years of experience in mobile and
          desktop programming. I'm passionate about designing and developing
          high-quality user interfaces that meet rigorous standards. I have
          collaborated with cross-functional teams and delivered quality
          projects across diverse industries. I am committed to staying
          up-to-date with the latest front-end technologies and frameworks and
          continuously improving my skills through ongoing learning and
          certifications. I have an MSc in Computing from the University of
          Sunderland and a Software Development Bootcamp certification from
          Northcoders.
        </h2>
        <aside>
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
        </aside>
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
                <ul>
                  <li>HTML | </li>
                  <li>CSS | </li>
                  <li>JavaScript | </li>
                  <li>TypeScript | </li>
                  <li>Jest | </li>
                  <li>MySQL | </li>
                  <li>MongoDB | </li>
                  <li>OOP | </li>
                  <li>GitHub | </li>
                  <li>Agile Methodology</li>
                </ul>
              </h6>
            ) : switchSection === "aboutComp" ? (
              <h6>
                <ul>
                  <li>Northcoders | </li>
                  <li>Monerce | </li>
                  <li>Medcob Inc | </li>
                  <li>Turon Technologies | </li>
                  <li>Tech for Good inc </li>
                </ul>
              </h6>
            ) : null}
          </p>
        </div>
      </section>
    </AboutMeSectionStyles>
  );
}

export default AboutMeSection;
