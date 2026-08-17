import { useRef } from "react";
import heroImage from "@/assets/hero.png";

/**
 * ProfileCard — a HUD-style photo card with:
 *  - mouse-tracked 3D tilt
 *  - a glow that follows the cursor
 *  - animated corner brackets
 *  - a scan-line sweep on hover
 */
export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // normalized -0.5 to 0.5
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateY = px * 14; // left/right tilt
    const rotateX = -py * 14; // up/down tilt

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <div className="relative mx-auto w-full max-w-sm [perspective:1200px] lg:mx-0">
      {/* ambient glow behind the whole card */}
      <div className="absolute inset-0 -z-10 scale-95 rounded-2xl bg-sky-400/20 blur-2xl" />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="profile-card group relative overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-sm"
      >
        {/* photo */}
        <img
          src={heroImage}
          alt="Adonis Billy Regodon"
          className="aspect-[4/5] w-full object-cover"
          draggable={false}
        />

        {/* cursor-following spotlight */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 profile-card-glow" />

        {/* scan-line sweep, only animates on hover */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="profile-card-scan" />
        </div>

        {/* corner brackets */}
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        {/* status label */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg border border-sky-400/20 bg-[#05070a]/70 px-3 py-2 backdrop-blur-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            Adonis.dev
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-sky-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Online
          </span>
        </div>
      </div>

      <style>{`
        .profile-card {
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          --mx: 50%;
          --my: 50%;
          transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out, border-color 0.3s ease;
        }

        .profile-card:hover {
          border-color: rgba(56, 189, 248, 0.5);
        }

        .profile-card-glow {
          background: radial-gradient(
            180px circle at var(--mx) var(--my),
            rgba(56, 189, 248, 0.25),
            transparent 70%
          );
        }

        .profile-card-scan {
          position: absolute;
          inset-inline: 0;
          height: 40%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(56, 189, 248, 0.18),
            transparent
          );
          transform: translateY(-120%);
          transition: transform 0.1s;
        }

        .group:hover .profile-card-scan {
          animation: scan-sweep 1.6s ease-in-out infinite;
        }

        @keyframes scan-sweep {
          0%   { transform: translateY(-120%); }
          100% { transform: translateY(320%); }
        }

        .corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: rgba(56, 189, 248, 0.9);
          opacity: 0;
          transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
        }

        .group:hover .corner {
          opacity: 1;
          width: 24px;
          height: 24px;
        }

        .corner-tl { top: 8px; left: 8px; border-top: 2px solid; border-left: 2px solid; }
        .corner-tr { top: 8px; right: 8px; border-top: 2px solid; border-right: 2px solid; }
        .corner-bl { bottom: 8px; left: 8px; border-bottom: 2px solid; border-left: 2px solid; }
        .corner-br { bottom: 8px; right: 8px; border-bottom: 2px solid; border-right: 2px solid; }
      `}</style>
    </div>
  );
}