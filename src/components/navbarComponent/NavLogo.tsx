import { Code, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const NavLogo = () => {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Animation on initial load
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center">
      <div 
        className={`h-10 w-10 relative flex items-center justify-center overflow-hidden transform transition-all duration-300 ${mounted ? 'scale-100' : 'scale-0'} ${hovered ? 'rotate-3' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500 ${hovered ? 'filter-none' : 'filter brightness-95'}`}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={hovered ? "#0d9488" : "#14b8a6"} />
              <stop offset="100%" stopColor={hovered ? "#134e4a" : "#115e59"} />
            </linearGradient>
            
            <animate 
              attributeName="opacity" 
              values="0.9;1;0.9" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </defs>
          
          <polygon 
            points="20,20 100,100 20,180" 
            fill="url(#gradient)" 
            className={`transition-transform duration-500 ${hovered ? 'origin-center' : ''}`}
          >
            <animate 
              attributeName="points" 
              values="20,20 100,100 20,180; 25,25 100,100 25,175; 20,20 100,100 20,180" 
              dur={hovered ? "1.5s" : "3s"} 
              repeatCount="indefinite" 
            />
          </polygon>
          
          <polygon 
            points="180,20 100,100 180,180" 
            fill="url(#gradient)"
            className={`transition-transform duration-500 ${hovered ? 'origin-center' : ''}`}
          >
            <animate 
              attributeName="points" 
              values="180,20 100,100 180,180; 175,25 100,100 175,175; 180,20 100,100 180,180" 
              dur={hovered ? "1.5s" : "3s"} 
              repeatCount="indefinite" 
            />
          </polygon>
        </svg>
      </div>
      <div className={`ml-3 flex flex-col transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        <span 
          className={`text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent tracking-wide transition-all duration-300 ${hovered ? 'tracking-wider' : ''}`}
        >
          Mikko
        </span>
      </div>
    </div>
  );
};

export default NavLogo;