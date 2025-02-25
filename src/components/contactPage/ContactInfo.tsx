import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  content,
  link,
}) => {
  return (
    <a
      href={link}
      className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group"
      target={title === "Location" ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-800 mr-4 group-hover:bg-teal-800 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </a>
  );
};

export default ContactInfo;
