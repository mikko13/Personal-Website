import React from "react";

const AboutMessage: React.FC = () => {
  return (
    <div
      className="mt-12 p-6 rounded-xl shadow-md bg-gradient-to-r from-teal-50 to-blue-50 animate-fade-in"
      style={{ animationDelay: "0.8s" }}
    >
      <h3 className="text-2xl font-bold text-center text-teal-800 mb-4">
        Beyond the Screen
      </h3>
      <p className="text-gray-600 text-center">
        I enjoy unwinding by playing video games, exploring new game mechanics,
        and immersing myself in rich story-driven adventures. I also like
        watching tech and gaming content, trying out new gadgets, and staying
        updated with the latest in the gaming world. When I need a break from
        the screen, I hang out with friends, listen to music, or hunt for the
        perfect cup of coffee.
      </p>
    </div>
  );
};

export default AboutMessage;
