/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Particle } from "./Particle";

interface ParticlesProps {
  canvas: HTMLCanvasElement | null;
}

const Particles: React.FC<ParticlesProps> = ({ canvas }) => {
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100);

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "#e5e7eb");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      connectParticles(ctx, particlesArray, canvas);

      particlesArray.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    const connectParticles = (
      ctx: CanvasRenderingContext2D,
      particles: Particle[],
      canvas: HTMLCanvasElement
    ) => {
      const maxDistance = 100;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(0, 128, 128, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    particlesRef.current = particlesArray;
    animate();
  }, [canvas]);

  return null;
};

export default Particles;
