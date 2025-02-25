import React from "react";

interface FooterNavigationProps {
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => void;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  handleSmoothScroll,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Navigation</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="hover:text-teal-300 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
            className="hover:text-teal-300 transition"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="hover:text-teal-300 transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="hover:text-teal-300 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hover:text-teal-300 transition"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
