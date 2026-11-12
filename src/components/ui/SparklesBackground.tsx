"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  shape: "circle" | "bar" | "sparkle";
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  alpha: number;
  alphaSpeed: number;
  baseAlpha: number;
}

const COLORS = [
  "#2563EB", // Royal Blue
  "#0EA5E9", // Sky Cyan
  "#8B5CF6", // Purple
  "#EC4899", // Pink
  "#F59E0B", // Amber Gold
  "#10B981", // Emerald Green
  "#EF4444", // Coral Red
  "#6366F1", // Indigo
];

export function SparklesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for subtle interactive "antigravity" repulsion
    const mouse = { x: -1000, y: -1000, radius: 120 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Generate ~60-80 dynamic colorful particles
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 16000), 50), 90);
    const particles: Particle[] = [];

    const shapes: ("circle" | "bar" | "sparkle")[] = [
      "circle",
      "circle",
      "bar",
      "bar",
      "sparkle",
    ];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.45; // 0.45 to 0.90
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 2.2, // 2.2px to 5.2px
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6 - 0.2, // gentle natural float
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.03,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        alphaSpeed: (Math.random() * 0.012 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Antigravity mouse repulsion (particles gently drift away from cursor)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 3;
          p.y += Math.sin(angle) * force * 3;
        }

        // Regular floating motion
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Twinkle / pulse opacity
        p.alpha += p.alphaSpeed;
        if (p.alpha > p.baseAlpha + 0.2 || p.alpha < p.baseAlpha - 0.25 || p.alpha < 0.2) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Boundary wrap
        if (p.x < -25) p.x = width + 25;
        if (p.x > width + 25) p.x = -25;
        if (p.y < -25) p.y = height + 25;
        if (p.y > height + 25) p.y = -25;

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0.15, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "bar") {
          // Antigravity-style mini confetti slit
          const w = p.size * 2.8;
          const h = p.size * 0.9;
          ctx.beginPath();
          ctx.roundRect
            ? ctx.roundRect(-w / 2, -h / 2, w, h, 2)
            : ctx.rect(-w / 2, -h / 2, w, h);
          ctx.fill();
        } else if (p.shape === "sparkle") {
          // 4-point star sparkle
          const r = p.size * 2.0;
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.quadraticCurveTo(0, 0, r, 0);
          ctx.quadraticCurveTo(0, 0, 0, r);
          ctx.quadraticCurveTo(0, 0, -r, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
