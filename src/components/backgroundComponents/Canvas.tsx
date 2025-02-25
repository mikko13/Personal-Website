import React, { useRef, useEffect } from "react";

interface CanvasProps {
  onCanvasReady: (canvas: HTMLCanvasElement) => void;
}

const Canvas: React.FC<CanvasProps> = ({ onCanvasReady }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    onCanvasReady(canvas);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [onCanvasReady]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default Canvas;
