import React from "react";
import NavLink from "./NavLink";
import ResumeButton from "./ResumeButton";

interface NavLinksProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleSmoothScroll }) => {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      <NavLink href="#" label="Home" active={true} onClick={handleSmoothScroll} />
      <NavLink href="#skills" label="Skills" onClick={handleSmoothScroll} />
      <NavLink href="#about" label="About" onClick={handleSmoothScroll} />
      <NavLink href="#projects" label="Projects" onClick={handleSmoothScroll} />
      <NavLink href="#contact" label="Contact" onClick={handleSmoothScroll} />
      <ResumeButton />
    </div>
  );
};

export default NavLinks;
