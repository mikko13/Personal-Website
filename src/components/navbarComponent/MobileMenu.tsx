import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const menuItems = [
    { href: "#", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden relative">
      <button
        className="text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
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

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-10"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 rounded-lg shadow-xl bg-white overflow-hidden z-20 origin-top-right"
            >
              <nav className="py-2">
                {menuItems.map((item) => (
                  <MobileNavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={() => setIsMenuOpen(false)}
                    handleSmoothScroll={handleSmoothScroll}
                  />
                ))}
                <div className="px-4 py-3 border-t border-gray-100">
                  <ResumeButton />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
