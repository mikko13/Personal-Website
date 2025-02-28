import React from "react";
import AboutSection from "./AboutSection";
import FadeIn from "../fadeinComponents/FadeIn";

const About: React.FC = () => {
  return (
    <FadeIn>
      <AboutSection />
    </FadeIn>
  );
};

export default About;
