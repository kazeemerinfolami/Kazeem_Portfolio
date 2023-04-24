import React from "react";
import { ProjectSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";
import screenshot from "../../assets/images/Screenshot 2023-04-20 at 10.50.08.png";

function ProjectSection() {
  return (
    <ProjectSectionStyles>
      <p>
        <h1>Projects</h1>
        <h2>
          I have worked on a variety of impressive projects throughout my
          career, demonstrating my ability to deliver high-quality solutions.
          During my internship at Northcoders, I collaborated with
          cross-functional teams to develop industry-driven web applications
          using JavaScript, Node, and React. I sketched out the flow of the NC
          News application's functionality during the project planning wireframe
          phase and built a platform using React.js and Node.js that allowed
          users to access the web app as a logged-in user or anonymously. I also
          built a backend REST API using MySQL as the database to store, delete,
          and update pieces of information. In my role as a frontend developer
          for Medcob Inc., I independently developed a fully functional
          front-end web application that helped consumers identify accredited
          medical, pharmacy, and diagnostic facilities. I also built
          user-friendly front-end applications such as an LMS and a "Cooperative
          Web App" for Turon Technologies. With a strong track record of
          successfully delivering projects and improving website performance, I
          have demonstrated their expertise in developing high-quality web
          applications.
        </h2>
      </p>
      <section>
        <ul>
          <li>
            <div>
              <img src={screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Medcob</h4>
              <h6>
                <a href="#/">visit</a>
              </h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam .
            </h2>
          </li>
          <li>
            <div>
              <img src={screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Medcob</h4>
              <h6>
                <a href="#/">visit</a>
              </h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </h2>
          </li>
          <li>
            <div>
              <img src={screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Medcob</h4>
              <h6>
                <a href="#/">visit</a>
              </h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </h2>
          </li>
          <li>
            <div>
              <img src={screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Medcob</h4>
              <h6>
                <a href="#/">visit</a>
              </h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </h2>
          </li>
        </ul>
      </section>
    </ProjectSectionStyles>
  );
}

export default ProjectSection;
