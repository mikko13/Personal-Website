import { useEffect, useState } from "react";

export default function Loader() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 600);
    const timer2 = setTimeout(() => setPhase(2), 1200);
    const timer3 = setTimeout(() => setPhase(3), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div
          className={`w-32 h-32 bg-teal-800 rounded-lg transform rotate-45 transition-all duration-700 ease-in-out
            ${phase >= 1 ? "scale-100" : "scale-0"}`}
        ></div>

        <div
          className={`absolute top-1/2 left-1/2 w-24 h-24 bg-[#edf2fc] rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-700 ease-in-out delay-100
            ${phase >= 2 ? "scale-100" : "scale-0"}`}
        ></div>

        <div
          className={`absolute top-1/2 left-1/2 w-6 h-6 bg-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out delay-200
            ${phase >= 3 ? "scale-100 pulse-animation" : "scale-0"}`}
        ></div>
      </div>
    </div>
  );
}
