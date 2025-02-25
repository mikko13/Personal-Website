import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, active, onClick }) => {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`relative text-base font-medium transition-colors ${
        active ? "text-teal-800" : "text-gray-700 hover:text-teal-800"
      }`}
    >
      {label}
    </a>
  );
};

export default NavLink;
