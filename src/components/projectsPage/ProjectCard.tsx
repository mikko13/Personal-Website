import React, { useState, useEffect } from "react";
import { Github, X } from "lucide-react";

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
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setFadeIn(true), 10);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setFadeIn(false);
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  useEffect(() => {
    if (showModal && !imageLoaded) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({
          width: img.width,
          height: img.height,
        });
        setImageLoaded(true);
      };
      img.src = project.image;
    }
  }, [showModal, project.image, imageLoaded]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [showModal]);

  const calculateResponsiveDimensions = () => {
    if (!imageLoaded) {
      return {};
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxModalWidth = viewportWidth * 0.9;
    const maxModalHeight = viewportHeight * 0.85;

    const aspectRatio = imageDimensions.width / imageDimensions.height;

    let width, height;

    if (
      imageDimensions.width > maxModalWidth ||
      imageDimensions.height > maxModalHeight
    ) {
      const widthRatio = maxModalWidth / imageDimensions.width;
      const heightRatio = maxModalHeight / imageDimensions.height;

      const scaleFactor = Math.min(widthRatio, heightRatio);

      width = Math.floor(imageDimensions.width * scaleFactor);
      height = Math.floor(imageDimensions.height * scaleFactor);
    } else {
      width = imageDimensions.width;
      height = imageDimensions.height;
    }

    if (aspectRatio > 3) {
      width = Math.min(width, maxModalWidth);
      height = width / aspectRatio;
    } else if (aspectRatio < 0.33) {
      height = Math.min(height, maxModalHeight);
      width = height * aspectRatio;
    }

    const modalPadding = 32;

    return {
      width: `${width}px`,
      height: `${height}px`,
      maxWidth: `${maxModalWidth - modalPadding}px`,
      maxHeight: `${maxModalHeight - modalPadding}px`,
    };
  };

  return (
    <>
      <div
        className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in bg-white flex flex-col h-full"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={openModal}
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

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 bg-opacity-60 backdrop-blur-sm"
          style={{ opacity: fadeIn ? 1 : 0 }}
          onClick={closeModal}
        >
          <div
            className="bg-teal-50 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 relative"
            style={{
              transform: fadeIn ? "scale(1)" : "scale(0.95)",
              ...calculateResponsiveDimensions(),
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors shadow-md z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {imageLoaded ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <div className="flex items-center justify-center p-12">
                <div className="w-12 h-12 border-4 border-teal-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
