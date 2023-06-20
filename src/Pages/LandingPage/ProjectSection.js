import React from "react";
import { ProjectSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";
import Medcob_screenshot from "../../assets/images/Screenshot 2023-04-20 at 10.50.08.png";
import Agrol_screenshot from "../../assets/images/Agrol screenshot.png";
import klasha_screenshot from "../../assets/images/Klasha screenshot.png";
import Monace_screenshot from "../../assets/images/Monace screenshot.png";

function ProjectSection() {
  return (
    <ProjectSectionStyles>
      <p>
        <h1>Projects</h1>
        <h2>
          Welcome to the Projects section, Here you'll get an in-depth look at
          the exciting software development projects I have been involved in.
          Each project showcases my skills, expertise, and commitment to
          delivering high-quality solutions.
        </h2>
      </p>
      <section>
        <ul>
          <li>
            <div>
              <img src={Medcob_screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Medcob</h4>
              <h6>
                <a
                  href="https://athealth-fe.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Page
                </a>
              </h6>
              At Medcob Inc is a platform that help consumers identify
              accredited medical, pharmacy, and diagnostic facilities.
            </h2>
          </li>
          <li>
            <div>
              <img src={Monace_screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Monace</h4>
              <h6>
                <a href="#/">Still in production</a>
              </h6>
              Monerce is an innovative platform that changes commerce in areas
              with limited internet access. The online-to-offline platform
              enables transactions via text messaging and USSD-based banking
              apps. Monerce prioritise accessibility, security, and
              user-friendly services, aiming to connect businesses and customers
              seamlessly without requiring mobile apps.
            </h2>
          </li>
          <li>
            <div>
              <img src={Agrol_screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>Agrol</h4>
              <h6>
                <a href="#/" rel="noreferrer" target="_blank">
                  View Page
                </a>
              </h6>
              Agrol is a Market Place deal with Organic and agricultural Food
              Creates Investment Opportunity for small investors.
            </h2>
          </li>
          <li>
            <div>
              <img src={klasha_screenshot} alt="expImg" />
            </div>
            <h2>
              <h4>klasha</h4>
              <h6>
                <a
                  href="https://klasha-omega.vercel.app/home.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Page
                </a>
              </h6>
              klasha is a simple users dashbord, where a user can access his/her
              balance, manage customers and view the currect exchange rate.
            </h2>
          </li>
        </ul>
      </section>
    </ProjectSectionStyles>
  );
}

export default ProjectSection;
