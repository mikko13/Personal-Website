import React from "react";
import FooterContent from "./FooterContent";
import FooterWave from "./FooterWave";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-blue-800 text-white py-12 relative z-10">
      <FooterContent />
      <FooterWave />
    </footer>
  );
};

export default FooterSection;
