import React from "react";
import ContactInfoList from "./ContactInfoList";
import ContactForm from "./ContactForm";

const ContactGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-1">
        <ContactInfoList />
      </div>
      <div
        className="col-span-1 md:col-span-2 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactGrid;
