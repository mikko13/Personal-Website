import React from "react";

const NavLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 relative">
        <div className="absolute inset-0 bg-teal-800 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-2 bg-white rounded-sm transform rotate-45"></div>
        <div className="absolute inset-4 bg-teal-600 rounded-sm transform rotate-45"></div>
      </div>
      <span className="ml-3 text-xl font-bold bg-gradient-to-r from-teal-800 to-teal-600 bg-clip-text text-transparent">
        Mikko.dev
      </span>
    </div>
  );
};

export default NavLogo;
