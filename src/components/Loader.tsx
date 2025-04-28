import { useEffect, useState } from "react";
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
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="banter-loader">
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
        </div>
      </div>
    </div>
  );
}
