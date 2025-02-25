import React from "react";
import FooterNavigation from "./FooterNavigation";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterScrollToTop from "./FooterScrollToTop";

const FooterContent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Mikko L. Samaniego</h2>
          <p className="max-w-md text-gray-200">
            Creating innovative solutions for tomorrow's challenges. My mission
            is to build technology that makes a difference in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <FooterNavigation handleSmoothScroll={handleSmoothScroll} />
          <FooterContact />
        </div>
      </div>

      <div className="border-t border-white/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Mikko. All rights reserved.
            </p>
          </div>

          <FooterSocial />
        </div>
      </div>

      <FooterScrollToTop />
    </div>
  );
};

export default FooterContent;
