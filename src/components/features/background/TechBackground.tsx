import { useEffect, useRef } from "react";

/**
 * TechBackground
 * A dependency-free animated "circuit / neural network" background.
 * Nodes drift slowly and draw connecting lines when close together,
 * over a faint animated grid with a slow scanning glow.
 *
 * Usage:
 *   <div className="relative min-h-screen bg-[#05070a]">
 *     <TechBackground />
 *     <main className="relative z-10">...</main>
 *   </div>
 */
export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    };

    let nodes: Node[] = [];
    let animationId = 0;

    const NODE_COLOR = "56, 189, 248"; // sky-400, rgb
    const LINE_COLOR = "56, 189, 248";
    const LINK_DIST = 170;
    const SPEED = 0.18;

    function resize() {
      const el = canvas as HTMLCanvasElement;
      width = el.clientWidth;
      height = el.clientHeight;
      el.width = width * dpr;
      el.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // density scales with area, capped for perf
      const targetCount = Math.min(140, Math.floor((width * height) / 11000));
      nodes = Array.from({ length: targetCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 1.5 + 0.8,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      // update + draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${NODE_COLOR}, 0.8)`;
        ctx!.fill();
      }

      // draw links between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.25;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      // draw a single static frame, no animation loop
      step();
      cancelAnimationFrame(animationId);
    } else {
      animationId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070a]"
    >
      {/* Static grid */}
      <div className="tech-grid" />

      {/* Slow diagonal scan glow */}
      <div className="tech-scan" />

      {/* Node network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Vignette so edges stay calm */}
      <div className="tech-vignette" />

      <style>{`
        .tech-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56, 189, 248, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 85%);
        }

        .tech-scan {
          position: absolute;
          inset: -20%;
          background: linear-gradient(
            115deg,
            transparent 40%,
            rgba(56, 189, 248, 0.06) 50%,
            transparent 60%
          );
          animation: scan-move 10s linear infinite;
        }

        @keyframes scan-move {
          0%   { transform: translate(-15%, -15%); }
          100% { transform: translate(15%, 15%); }
        }

        .tech-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 35%, #05070a 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-scan {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}