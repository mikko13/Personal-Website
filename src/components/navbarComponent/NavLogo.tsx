import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png"

const NavLogo = () => {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center">
      <div 
        className={`cursor-pointerh-10 w-17 relative flex items-center justify-center overflow-hidden transform transition-all duration-300 ${mounted ? 'scale-100' : 'scale-0'} ${hovered ? 'rotate-9' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={Logo}/>
      </div>
    </div>
  );
};

export default NavLogo;