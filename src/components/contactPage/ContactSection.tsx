import React from "react";
import ContactHeader from "./ContactHeader";
import ContactGrid from "./ContactGrid";

const ContactSection: React.FC = () => {
  return (
    <div
      className="px-4 sm:px-6 py-20 max-w-4xl mx-auto relative z-10"
      id="contact"
    >
      <ContactHeader />
      <ContactGrid />
      <div
        className="absolute -left-64 bottom-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,128,128,0.4) 0%, rgba(219,234,254,0.1) 70%)",
          filter: "blur(70px)",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default ContactSection;
