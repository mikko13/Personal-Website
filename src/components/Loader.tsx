import React, { useEffect, useState } from "react";
import { Code, Terminal } from "lucide-react";
import "./Loader.css";

export default function Loader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300); // Container appears
    const timer2 = setTimeout(() => setStage(2), 800); // Background glow effect
    const timer3 = setTimeout(() => setStage(3), 1200); // Icons appear
    const timer4 = setTimeout(() => setStage(4), 1600); // Start continuous animations

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* Container with advanced animation */}
        <div
          className={`relative h-24 w-24 flex items-center justify-center
            bg-gradient-to-br from-teal-600 to-teal-800 rounded-full overflow-hidden shadow-lg
            transition-all duration-700
            ${stage >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            ${stage >= 4 ? "animate-pulse" : ""}`}
        >
          {/* Top light reflection */}
          <div className="absolute opacity-20 top-0 left-0 right-0 h-1/2 bg-white rounded-t-md"></div>

          {/* Animated glow effect */}
          <div
            className={`absolute inset-0 bg-teal-400 rounded-full filter blur-xl
              transition-all duration-1000
              ${stage >= 2 ? "opacity-30" : "opacity-0"}
              ${stage >= 4 ? "animate-ping opacity-20" : ""}`}
          ></div>

          {/* Background Code icon */}
          <Code
            className={`text-teal-100 absolute w-12 h-12
              transition-all duration-500 delay-100
              ${stage >= 3 ? "opacity-20" : "opacity-0"}
              ${stage >= 4 ? "animate-spin-slow" : ""}`}
            style={{ animationDuration: "8s" }}
          />

          <Terminal
            className={`text-teal-100 w-10 h-10 z-10
              transition-all duration-500 delay-200
              ${stage >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-0"}
              ${stage >= 4 ? "animate-bounce-subtle" : ""}`}
            strokeWidth={2.5}
          />
        </div>
      </div>
    </div>
  );
}
