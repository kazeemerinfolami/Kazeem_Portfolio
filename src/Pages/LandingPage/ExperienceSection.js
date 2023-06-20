import React from "react";
import { ExperienceSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";
import expImg from "../../assets/images/IMG_0358 2.jpeg";

function ExperienceSection() {
  return (
    <ExperienceSectionStyles>
      <h1>Experience</h1>
      <section>
        <img src={expImg} alt="expImg" />
        <p>
          <h2>
            I have had the opportunity to work on diverse projects, where I have
            showcased my expertise in both frontend and backend development.
            From building captivating user interfaces, designing efficient
            server-side functionalities
          </h2>
          <h2>
            One of the highlights of my journey as a software developer was my
            experience at Northcoders, where I underwent an intensive coding
            boot camp. There, I gained valuable knowledge in pair programming,
            test-driven development (TDD), and agile methodologies. This
            training has equipped me with the tools to consistently deliver
            high-quality code and contribute effectively to team collaborations.
          </h2>
          <h2>
            I am particularly proud of my contributions to projects such as the
            COVID Data Visualizer, where I collaborated with a colleague to
            develop a platform that allows users to view COVID-19 test cases for
            specific countries or the entire world. Additionally, I worked on
            the NC News platform, building both the frontend and backend
            functionalities, enabling users to access and interact with articles
            seamlessly.
          </h2>
          <h2>
            With a strong commitment to continuous learning, I regularly update
            my skills and stay up-to-date with the latest industry trends and
            technologies. This drive for growth enables me to provide
            cutting-edge solutions and stay ahead in the ever-evolving field of
            software development.
          </h2>
        </p>
      </section>
    </ExperienceSectionStyles>
  );
}

export default ExperienceSection;
