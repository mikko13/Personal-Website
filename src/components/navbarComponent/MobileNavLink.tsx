import React from "react";

interface MobileNavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick, handleSmoothScroll }) => {
  return (
    <a href={href} onClick={(e) => { handleSmoothScroll(e, href); onClick(); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
      {label}
    </a>
  );
};

export default MobileNavLink;
