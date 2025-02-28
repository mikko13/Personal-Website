import React, { useEffect, useRef, useState } from "react";
import Particle from "./Particle";

interface ParticlesProps {
  canvas: HTMLCanvasElement | null;
}

const Particles: React.FC<ParticlesProps> = ({ canvas }) => {
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 120 });
  const [fps, setFps] = useState(0);
  const fpsRef = useRef({ frames: 0, lastTime: performance.now() });

  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const screenArea = canvas.width * canvas.height;
    const numberOfParticles = Math.min(Math.floor(screenArea / 10000), 150);

    const particlesArray: Particle[] = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas));
    }
    particlesRef.current = particlesArray;

    const updateFPS = () => {
      fpsRef.current.frames++;
      const now = performance.now();
      if (now - fpsRef.current.lastTime >= 1000) {
        setFps(fpsRef.current.frames);
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = now;
      }
    };

    const connectParticles = (
      ctx: CanvasRenderingContext2D,
      particles: Particle[],
      canvas: HTMLCanvasElement
    ) => {
      const maxDistance = Math.min(canvas.width, canvas.height) * 0.23;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < maxDistance * maxDistance) {
            const opacity = 1 - Math.sqrt(distance) / maxDistance;
            ctx.strokeStyle = `hsla(180, 100%, 30%, ${opacity * 0.2})`;
            ctx.lineWidth = opacity * 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#f0f9ff");
      gradient.addColorStop(1, "#e5e7eb");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update(canvas, mouseRef.current);
        particle.draw(ctx);
      });

      connectParticles(ctx, particlesArray, canvas);

      updateFPS();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canvas]);

  return (
    <>
      {import.meta.env.VITE_NODE_ENV === "development" && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          FPS: {fps}
        </div>
      )}
    </>
  );
};

export default Particles;
