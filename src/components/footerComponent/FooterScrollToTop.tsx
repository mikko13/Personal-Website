import React from "react";
import { ChevronUp } from "lucide-react";

const FooterScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer absolute right-8 bottom-8 bg-teal-600 hover:bg-teal-500 p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default FooterScrollToTop;
