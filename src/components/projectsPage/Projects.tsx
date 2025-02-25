import React, { useState } from "react";
import { Github } from "lucide-react";
import ProjectList from "./ProjectList";
import FilterButton from "./FilterButton";
import projects from "./ProjectsData";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto relative z-10" id="projects">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-blue-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in building modern web applications.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {["all", "frontend", "backend", "database", "Non-IT Related"].map(
          (filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          )
        )}
      </div>

      {/* Project List */}
      <ProjectList projects={filteredProjects} />

      {/* GitHub Link */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Want to see more of my work?</p>
        <a
          href="https://github.com/mikko13"
          className="inline-flex items-center gap-2 bg-teal-800 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md"
        >
          <Github size={20} />
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
