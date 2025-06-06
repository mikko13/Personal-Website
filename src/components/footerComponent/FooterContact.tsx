import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const FooterContact: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
        Contact Me
      </h3>
      <ul className="space-y-2 md:space-y-3">
        <li className="flex items-center gap-2">
          <Mail size={16} className="flex-shrink-0 text-teal-400" />
          <a
            href="mailto:samaniegomikko@gmail.com"
            className="hover:text-teal-300 transition truncate"
          >
            samaniegomikko@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={16} className="flex-shrink-0 text-teal-400" />
          <span className="truncate">Manila, Metro Manila, Philippines</span>
        </li>
        <li className="flex items-center gap-2">
          <Phone size={16} className="flex-shrink-0 text-teal-400" />
          <a
            href="tel:+639063642928"
            className="hover:text-teal-300 transition"
          >
            +63 906 364 2928
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
