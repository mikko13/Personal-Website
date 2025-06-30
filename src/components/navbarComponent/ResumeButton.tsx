import React from "react";
import Resume from "../../assets/resume.pdf";
import { FileUser } from "lucide-react";

const ResumeButton: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = Resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Samaniego_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-teal-800 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-md cursor-pointer"
    >
      <div className="flex gap-2">
        <div>
          <FileUser size={24} />
        </div>
        <div>Résumé</div>
      </div>
    </button>
  );
};

export default ResumeButton;
