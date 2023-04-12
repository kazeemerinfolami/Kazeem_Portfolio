import React from "react";
import { ProjectSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";
import screenshot from "../../assets/images/Screenshot 2023-04-11 at 01.36.44.png";

function ProjectSection() {
  return (
    <ProjectSectionStyles>
      <p>
        <h1>Projects</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam .
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
              voluptatum laborum numquam .
            </h2>
          </li>
        </ul>
      </section>
    </ProjectSectionStyles>
  );
}

export default ProjectSection;
