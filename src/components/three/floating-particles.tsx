"use client";

import { useMemo } from "react";

type Particle = {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
  color: string;
};

function createSeededRandom(seed: number) {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    const palette = ["#00ffff", "#7c3aed", "#14f195", "#ffffff"];
    const random = createSeededRandom(20240604);

    return Array.from({ length: 48 }, (_, index) => ({
      left: `${random() * 100}%`,
      top: `${random() * 100}%`,
      size: `${random() * 6 + 2}px`,
      delay: `${random() * 6}s`,
      duration: `${random() * 10 + 8}s`,
      color: palette[index % palette.length],
    }));
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${index}`}
          className="absolute rounded-full blur-[0.2px] animate-pulse"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: 0.35,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: `0 0 18px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
}
