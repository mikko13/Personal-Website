import React from "react";

const ContactHeader: React.FC = () => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-blue-600 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities? I'd love to
        hear from you.
      </p>
    </div>
  );
};

export default ContactHeader;
