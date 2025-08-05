import React from "react";

interface SkillIconProps {
  children: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ children }) => {
  return (
    <div className="cursor-pointer w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-800 group-hover:bg-teal-800 group-hover:text-white transition-colors">
      {children}
    </div>
  );
};

export default SkillIcon;
