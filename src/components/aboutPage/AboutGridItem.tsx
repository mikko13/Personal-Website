import React from "react";

interface AboutGridItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  animationDelay?: string;
}

const AboutGridItem: React.FC<AboutGridItemProps> = ({
  icon,
  title,
  content,
  animationDelay,
}) => {
  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: animationDelay || "0s" }}
    >
      <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center">
        {icon} {title}
      </h3>
      {content}
    </div>
  );
};

export default AboutGridItem;
