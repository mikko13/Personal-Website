import React from "react";
import SkillIcon from "./SkillIcon";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, description }) => {
  return (
    <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100/70 group animate-fade-in bg-[#eff8ff] bg-[-webkit-radial-gradient(circle,_#eff8ff_0%,_#ffffff_100%)] bg-[radial-gradient(circle,_#eff8ff_0%,_#ffffff_100%)]">
      <div className="flex items-center mb-4">
        <SkillIcon>{icon}</SkillIcon>
        <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 cursor-pointer">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100/80 text-teal-800 rounded-full text-sm font-medium group-hover:bg-teal-50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
