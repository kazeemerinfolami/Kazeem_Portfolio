import React from "react";
import { ExperienceSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";
import expImg from "../../assets/images/IMG_0358 2.jpeg";

function ExperienceSection() {
  return (
    <ExperienceSectionStyles>
      <h1>Experience</h1>
      <section>
        <img src={expImg} alt="expImg" />
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam .
        </h2>
      </section>
    </ExperienceSectionStyles>
  );
}

export default ExperienceSection;
