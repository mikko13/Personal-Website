import React from "react";

const GradientBackground: React.FC = () => {
  return (
    <div
      className="absolute -right-64 top-1/4 w-96 h-96 rounded-full opacity-10"
      style={{
        background: "radial-gradient(circle, rgba(0,128,128,0.4) 0%, rgba(219,234,254,0.1) 70%)",
        filter: "blur(70px)",
        zIndex: -1,
      }}
    ></div>
  );
};

export default GradientBackground;
