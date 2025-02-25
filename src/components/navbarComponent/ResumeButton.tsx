import React from "react";
import Resume from "../../assets/resume.pdf"

const ResumeButton: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = Resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mikko_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-teal-800 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-md cursor-pointer"
    >
      Resume
    </button>
  );
};

export default ResumeButton;
