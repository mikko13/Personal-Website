import React from "react";
import MobileNavLink from "./MobileNavLink";
import ResumeButton from "./ResumeButton";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  handleSmoothScroll: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  handleSmoothScroll,
}) => {
  return (
    <div className="md:hidden relative">
      <button
        className="text-gray-700 p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative flex justify-center items-center">
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transition-all duration-200 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white overflow-hidden z-20 origin-top-right transition-all duration-200">
          <MobileNavLink
            href="#"
            label="Home"
            onClick={() => setIsMenuOpen(false)}
            handleSmoothScroll={handleSmoothScroll}
          />
          <MobileNavLink
            href="#skills"
            label="Skills"
            onClick={() => setIsMenuOpen(false)}
            handleSmoothScroll={handleSmoothScroll}
          />
          <MobileNavLink
            href="#about"
            label="About"
            onClick={() => setIsMenuOpen(false)}
            handleSmoothScroll={handleSmoothScroll}
          />
          <MobileNavLink
            href="#projects"
            label="Projects"
            onClick={() => setIsMenuOpen(false)}
            handleSmoothScroll={handleSmoothScroll}
          />
          <MobileNavLink
            href="#contact"
            label="Contact"
            onClick={() => setIsMenuOpen(false)}
            handleSmoothScroll={handleSmoothScroll}
          />
          <div className="ml-4 mb-3 text-sm">
            <ResumeButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
