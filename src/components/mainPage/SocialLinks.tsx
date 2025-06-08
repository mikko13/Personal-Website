import React from "react";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center md:justify-start">
      <a
        href="https://github.com/mikko13"
        className="text-gray-600 hover:text-teal-800 transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="www.linkedin.com/in/mikkosamaniego"
        className="text-gray-600 hover:text-teal-800 transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://www.facebook.com/mikko13samaniego"
        className="text-gray-600 hover:text-teal-800 transition-colors"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://www.instagram.com/mikkowww13/"
        className="text-gray-600 hover:text-teal-800 transition-colors"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
