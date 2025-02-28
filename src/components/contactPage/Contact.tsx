import React from "react";
import ContactSection from "./ContactSection";
import FadeIn from "../fadeinComponents/FadeIn";

const Contact: React.FC = () => {
  return (
    <FadeIn>
      <ContactSection />
    </FadeIn>
  );
};

export default Contact;
