import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const FooterSocial: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/mikko13samaniego"
        className="hover:text-teal-300 transition"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://github.com/mikko13"
        className="hover:text-teal-300 transition"
        aria-label="Github"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.instagram.com/mikkowww13/"
        className="hover:text-teal-300 transition"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href="www.linkedin.com/in/mikkosamaniego"
        className="hover:text-teal-300 transition"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

export default FooterSocial;
