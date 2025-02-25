import React, { useState, useCallback } from "react";
import Canvas from "./Canvas";
import Particles from "./Particles";

const Background: React.FC = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  const handleCanvasReady = useCallback((canvasElement: HTMLCanvasElement) => {
    setCanvas(canvasElement);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas onCanvasReady={handleCanvasReady} />
      {canvas && <Particles canvas={canvas} />}
    </div>
  );
};

export default Background;
