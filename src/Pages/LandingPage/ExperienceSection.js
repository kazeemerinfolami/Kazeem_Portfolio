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
          With two years of experience in the field, I have developed expertise
          in building high-quality user interfaces and optimising solutions. I
          have worked on a range of projects across diverse industries,
          including medical platforms and learning management systems. I have a
          Master's degree in computing from the University of Sunderland and
          have completed relevant certifications in software development. I am
          committed to staying up-to-date with the latest front-end technologies
          and frameworks, and I thrive in dynamic environments. With a proven
          track record of delivering quality projects and collaborating
          effectively with cross-functional teams.
        </h2>
      </section>
    </ExperienceSectionStyles>
  );
}

export default ExperienceSection;
