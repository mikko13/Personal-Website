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
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
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