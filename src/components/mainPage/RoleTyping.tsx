import React, { useState, useEffect } from "react";

interface RoleTypingProps {
  roles: string[];
}

const RoleTyping: React.FC<RoleTypingProps> = ({ roles }) => {
  const [currentRole, setCurrentRole] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentText = roles[roleIndex];

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const typingTimeout = setTimeout(() => {
      setCurrentRole(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <div className="relative h-16 mb-8 flex justify-center items-center md:block w-full">
      <p className="text-2xl md:text-3xl text-gray-700 font-medium absolute transition-opacity duration-500">
        I am a <span className="text-teal-700 font-bold">{currentRole}</span>
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default RoleTyping;
