import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    technologies: string[];
    repoLink?: string;
    icon: React.ReactNode;
  }[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} delay={index * 0.1} />
      ))}
    </div>
  );
};

export default ProjectList;
