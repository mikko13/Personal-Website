import React from "react";
import { ArrowRight } from "lucide-react";
import RoleTyping from "./RoleTyping";
import SocialLinks from "./SocialLinks";
import ProfileImage from "./ProfileImage";
import FadeInSection from "../fadeinComponents/FadeIn";

const Main: React.FC = () => {
  const roles = [
    "Junior IT Student",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
  ];

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
    <div className="px-6 py-10 md:py-28 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <FadeInSection>
            <div className="inline-block px-3 py-1 mb-6 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              Available for new projects
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-teal-800 to-blue-600 bg-clip-text text-transparent">
              Hi, I'm Mikko
            </h1>
            <RoleTyping roles={roles} />
          </FadeInSection>

          <div className="flex justify-center md:hidden mb-10 mt-[-70px]">
            <FadeInSection delay={200}>
              <ProfileImage />
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transforming ideas into elegant, functional digital solutions. I
              specialize in building modern web applications with a focus on
              performance, accessibility, and exceptional user experiences.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
                className="bg-teal-800 text-white px-8 py-3 rounded-lg text-lg hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-lg"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="border-2 border-teal-800 text-teal-800 px-8 py-3 rounded-lg text-lg hover:bg-teal-50 transition-colors flex items-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={500}>
            <SocialLinks />
          </FadeInSection>
        </div>

        <div className="hidden md:block">
          <FadeInSection delay={200}>
            <ProfileImage />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Main;
