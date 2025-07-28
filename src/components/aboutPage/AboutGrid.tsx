import React from "react";
import AboutGridItem from "./AboutGridItem";
import { BookOpen, Award, Users, User } from "lucide-react";

const AboutGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AboutGridItem
        icon={<User size={24} className="mr-2" />}
        title="My Journey"
        content={
          <>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm Mikko, a dedicated software engineer with a passion for
              creating elegant, user-centered digital experiences. My journey in
              tech began during my college years when I discovered my love for
              problem-solving through code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, I specialize in full-stack development, with a particular
              focus on creating responsive web applications that deliver
              exceptional user experiences while maintaining clean, efficient
              codebases.
            </p>
          </>
        }
      />
      <AboutGridItem
        icon={<BookOpen size={24} className="mr-2" />}
        title="Education"
        content={
          <>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-gray-600">University Santo Tomas, 2022-2026</p>
              <p className="text-gray-600 mt-2">
                Specialized in Web and Mobile Development
              </p>
            </div>
            <div className="border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">Senior High School</h4>
              <p className="text-gray-600">San Beda University, 2020-2022</p>
              <p className="text-gray-600 mt-2">
                Science, Technology, Engineering, and Mathematics (STEM)
              </p>
            </div>
          </>
        }
        animationDelay="0.2s"
      />
      <AboutGridItem
        icon={<Users size={24} className="mr-2" />}
        title="Org Experience"
        content={
          <>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">Assistant Director</h4>
              <p className="text-gray-600">TOMCAT-UST, 2024</p>
            </div>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">Associate Team Head</h4>
              <p className="text-gray-600">
                UST-Society of Information Technology Ethusiasts, 2022
              </p>
            </div>
          </>
        }
        animationDelay="0.4s"
      />
      <AboutGridItem
        icon={<Award size={24} className="mr-2" />}
        title="Achievements"
        content={
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <div className="min-w-4 h-4 bg-teal-200 rounded-full mt-1.5 mr-3"></div>
              <p>Dean's Lister, 2022-2025</p>
            </li>
          </ul>
        }
        animationDelay="0.6s"
      />
    </div>
  );
};

export default AboutGrid;
