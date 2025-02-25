import React from "react";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    technologies: string[];
    repoLink?: string;
    icon: React.ReactNode;
  };
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in bg-white flex flex-col h-full"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-teal-800 text-white p-2 rounded-lg">
          {project.icon}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-teal-50 text-teal-800 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.repoLink && (
          <div className="mt-auto">
            <a
              href={project.repoLink}
              className="text-teal-800 hover:text-teal-600 flex items-center gap-1 text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} /> Repository
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
