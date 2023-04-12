import React from "react";
import Baselayout from "../../components/Baselayout";

import {
  BottomImage,
  ProjectPageStyles,
  Sec1ImageContainer,
  TopImage,
} from "../../components/Baselayout/BaseLayoutStyles";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";

function LandingPage() {
  return (
    <Baselayout showNoMedia="yes">
      <ProjectPageStyles>
        <Sec1ImageContainer className="buttonClassName">
          <TopImage className="topImage" />
          <div>
            <h1>Explore my space</h1>
          </div>
        </Sec1ImageContainer>
        <AboutMeSection />
        <Sec1ImageContainer className="buttonClassName">
          <BottomImage className="buttomImage" />
        </Sec1ImageContainer>
        <ExperienceSection />
        <ProjectSection />
      </ProjectPageStyles>
    </Baselayout>
  );
}

export default LandingPage;
