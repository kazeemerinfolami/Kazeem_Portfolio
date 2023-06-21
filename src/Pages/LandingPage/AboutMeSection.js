import React, { useState } from "react";
import { AboutMeSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";

function AboutMeSection() {
  const [switchSection, setSwitchSection] = useState("aboutLang");

  const handleSwitchSection = (intialValue) => {
    setSwitchSection(intialValue);
  };
  return (
    <AboutMeSectionStyles>
      <h1>About Me</h1>
      <section>
        <h2>
          Welcome to my website portfolio! I'm Kazeem Erinfolami, a
          self-motivated software developer with a master's degree in computing
          from the University of Sunderland. With a passion for creating
          exceptional user experiences, I specialize in building robust and
          visually appealing web applications.
        </h2>
        <h2>
          Throughout my career, I have honed my skills in frontend development
          using technologies such as React, HTML, Redux, CSS, Material UI, and
          Bootstrap. On the backend, I am proficient in Node.js, Express, and
          Firebase. I also have experience with testing using Jest and working
          with databases like MySQL and MongoDB.
        </h2>
        <h2>
          I have a strong track record of making significant contributions to
          various projects. From developing an innovative platform (Monace) for
          online-to-offline commerce. Built an engaging web applications like
          the COVID Data Visualizer and NC News. I am driven to deliver
          high-quality solutions.
        </h2>
        <h2>
          Beyond technical skills, I possess essential soft skills including
          adaptability, problem-solving, attention to detail, and a commitment
          to continuous learning. These qualities enable me to collaborate
          effectively in teams and contribute to project success.
        </h2>
        <h2>
          I invite you to explore my portfolio and witness the outcomes of my
          dedication to creating seamless, user-centric applications. Feel free
          to reach out if you have any questions or would like to discuss
          potential collaborations. Let's bring your ideas to life through
          software development!
        </h2>
        <aside>
          <li
            className={switchSection === "aboutLang" ? "activeSection" : null}
            onClick={() => handleSwitchSection("aboutLang")}
          >
            Skils
          </li>
          <li
            className={switchSection === "aboutComp" ? "activeSection" : null}
            onClick={() => handleSwitchSection("aboutComp")}
          >
            Companies
          </li>
          <li
            className={switchSection === "education" ? "activeSection" : null}
            onClick={() => handleSwitchSection("education")}
          >
            Education
          </li>
        </aside>
        <div>
          <p>
            {switchSection === "education" ? (
              <h6>
                University of Sunderland | Msc Computing | Merit | Sep 2021 -
                Sep 2022
              </h6>
            ) : switchSection === "aboutLang" ? (
              <h6>
                HTML | CSS | JavaScript | TypeScript | TDD - Jest | MySQL |
                MongoDB | OOP | GitHub | Agile Methodology
              </h6>
            ) : switchSection === "aboutComp" ? (
              <h6>
                Northcoders | Monerce | Medcob Inc | Turon Technologies | Tech
                for Good inc
              </h6>
            ) : null}
          </p>
        </div>
      </section>
    </AboutMeSectionStyles>
  );
}

export default AboutMeSection;
