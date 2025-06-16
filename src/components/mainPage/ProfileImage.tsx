import React from "react";
import { Code, Briefcase } from "lucide-react";
import ProfilePicture from "../../assets/profilePic2.png";

const ProfileImage: React.FC = () => {
  return (
    <div className="relative mt-12 md:mt-0">
      <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-400 shadow-xl flex items-center justify-center">
        <div className="absolute -top-3 mr-60 w-12 h-12 rounded-lg bg-teal-800 flex items-center justify-center text-white">
          <Code size={24} />
        </div>
        <div className="absolute -bottom-3 ml-60 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
          <Briefcase size={24} />
        </div>
        <div className="w-56 h-58 rounded-xl bg-white p-2">
          <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
            <img src={ProfilePicture} alt="profile" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
