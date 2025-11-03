import React from "react";
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  Users,
} from "lucide-react";
import SkillCard from "./SkillCard";
import GradientBackground from "./GradientBackground";
import FadeInSection from "../fadeinComponents/FadeIn";

const Skills: React.FC = () => {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto relative z-10" id="skills">
      <FadeInSection>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-blue-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed expertise across various technologies, allowing me to
            build complete, scalable applications from front to back — while
            maintaining a strong foundation in software engineering,
            collaboration, and problem-solving.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <FadeInSection delay={100}>
          <SkillCard
            icon={<Layout />}
            title="Frontend Development"
            skills={[
              "ReactJS",
              "TypeScript",
              "TailwindCSS",
              "AngularJS",
              "JavaScript",
              "VueJS",
              "Figma",
            ]}
            description="Creating responsive, accessible, and performant user interfaces with modern frameworks and tools."
          />
        </FadeInSection>

        {/* Backend */}
        <FadeInSection delay={200}>
          <SkillCard
            icon={<Server />}
            title="Backend Development"
            skills={[
              "Java",
              "Python",
              "C#",
              "PHP",
              "ExpressJS",
              "ASP.NET (MVC)",
              "NodeJS",
              "Laravel",
              "C++",
            ]}
            description="Building robust server-side applications and APIs that power seamless user experiences."
          />
        </FadeInSection>

        {/* Databases */}
        <FadeInSection delay={300}>
          <SkillCard
            icon={<Database />}
            title="Database & Storage"
            skills={[
              "MongoDB",
              "MySQL",
              "MariaDB",
              "PostgreSQL",
              "Firebase",
              "HeidiSQL",
            ]}
            description="Designing efficient data models and storage solutions for various application needs."
          />
        </FadeInSection>

        {/* Mobile */}
        <FadeInSection delay={400}>
          <SkillCard
            icon={<Smartphone />}
            title="Mobile Development"
            skills={["React Native", "Kotlin"]}
            description="Developing cross-platform mobile applications with native-like performance and feel."
          />
        </FadeInSection>

        {/* Hard Skills */}
        <FadeInSection delay={500}>
          <SkillCard
            icon={<Wrench />}
            title="Hard Skills"
            skills={[
              "Software Engineering",
              "Database Management",
              "API Integration",
              "UI/UX Design",
              "Software Debugging",
              "Version Control (Git)",
              "Quality Assurance",
              "Cloud Services",
              "Agile & Waterfall Methodologies",
              "Project Management",
            ]}
            description="Technical expertise supporting full software development lifecycles and team collaboration."
          />
        </FadeInSection>

        {/* Soft Skills */}
        <FadeInSection delay={600}>
          <SkillCard
            icon={<Users />}
            title="Soft Skills"
            skills={[
              "Communication",
              "Collaboration",
              "Problem-Solving",
              "Critical Thinking",
              "Adaptability",
              "Continuous Learning",
              "Time Management",
              "Attention to Detail",
              "Teamwork",
              "Conflict Resolution",
            ]}
            description="Strong interpersonal and analytical skills enabling effective teamwork and leadership in dynamic environments."
          />
        </FadeInSection>
      </div>

      <GradientBackground />
    </div>
  );
};

export default Skills;
