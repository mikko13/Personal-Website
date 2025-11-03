import React from "react";
import AboutGridItem from "./AboutGridItem";
import { BookOpen, Award, Users, User, Briefcase } from "lucide-react";

const AboutGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* My Journey */}
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

      {/* Education */}
      <AboutGridItem
        icon={<BookOpen size={24} className="mr-2" />}
        title="Education"
        content={
          <>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                Bachelor of Science in Information Technology
              </h4>
              <p className="text-gray-600">
                University of Santo Tomas, 2022–2026
              </p>
              <p className="text-gray-600 mt-2">
                Specialized in Web and Mobile Development
              </p>
            </div>
            <div className="border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">Senior High School</h4>
              <p className="text-gray-600">San Beda University, 2020–2022</p>
              <p className="text-gray-600 mt-2">
                Science, Technology, Engineering, and Mathematics (STEM)
              </p>
            </div>
          </>
        }
        animationDelay="0.2s"
      />

      {/* Work Experience */}
      <AboutGridItem
        icon={<Briefcase size={24} className="mr-2" />}
        title="Work Experience"
        content={
          <>
            <div className="border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                Procter & Gamble Philippines, Inc.
              </h4>
              <p className="text-gray-600">Information Technology Intern</p>
              <p className="text-gray-600 italic">Jan 2026 – Present</p>
            </div>
          </>
        }
        animationDelay="0.3s"
      />

      {/* Org Experience */}
      <AboutGridItem
        icon={<Users size={24} className="mr-2" />}
        title="Org Experience"
        content={
          <>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                UST Cisco Networking Academy Gateway - CICS
              </h4>
              <p className="text-gray-600">Team Communications Staff</p>
              <p className="text-gray-600 italic">Oct 2025 – May 2026</p>
            </div>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                AWS Learning Club - UST
              </h4>
              <p className="text-gray-600">Technical Committee Staff</p>
              <p className="text-gray-600 italic">Oct 2025 – May 2026</p>
            </div>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">TOMCAT-UST</h4>
              <p className="text-gray-600">Assistant Director</p>
              <p className="text-gray-600 mb-4 italic">Apr 2024 – May 2024</p>
              <p className="text-gray-600">Technical Committee Staff</p>
              <p className="text-gray-600 italic">Dec 2023 – May 2024</p>
            </div>
            <div className="mb-4 border-l-2 border-teal-200 pl-4">
              <h4 className="font-bold text-gray-800">
                UST-Society of Information Technology Enthusiasts
              </h4>
              <p className="text-gray-600">Associate Team Head</p>
              <p className="text-gray-600 italic">Oct 2022 – May 2023</p>
            </div>
          </>
        }
        animationDelay="0.4s"
      />

      {/* Achievements */}
      <AboutGridItem
        icon={<Award size={24} className="mr-2" />}
        title="Achievements"
        content={
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <div className="min-w-4 h-4 bg-teal-200 rounded-full mt-1.5 mr-3"></div>
              <p>Dean's Lister, 2022 – Present</p>
            </li>
          </ul>
        }
        animationDelay="0.6s"
      />
    </div>
  );
};

export default AboutGrid;
