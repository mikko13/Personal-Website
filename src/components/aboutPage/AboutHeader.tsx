import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-blue-600 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A passionate developer with a knack for creating innovative solutions
        and a continuous learner in the ever-evolving tech landscape.
      </p>
    </div>
  );
};

export default AboutHeader;
