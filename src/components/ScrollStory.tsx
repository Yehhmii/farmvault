"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frames = [
  {
    id: 1,
    label: "Step 01",
    title: "Birds roam. Data flows.",
    body: "As your flock moves through the day, FarmVault captures activity patterns, feed consumption, and behavioral signals automatically.",
    stat: { value: "2,400", label: "Birds tracked" },
    accent: "Poultry Activity",
  },
  {
    id: 2,
    label: "Step 02",
    title: "Every grain accounted for.",
    body: "Feed intake events trigger live inventory updates. No manual entries. No missed batches. The system learns your feed cycles within a week.",
    stat: { value: "96%", label: "Feed efficiency" },
    accent: "Feed Intelligence",
  },
  {
    id: 3,
    label: "Step 03",
    title: "Inventory: always current.",
    body: "Chicken packs, egg cartons, input stock — all tracked with batch precision. Get alerts before you run short, not after.",
    stat: { value: "320", label: "Units live" },
    accent: "Stock Control",
    cards: [
      { title: "Chicken", sub: "Frozen Packs", inventory: "220 units" },
      { title: "Eggs", sub: "Dozen crates", inventory: "100 units" },
    ],
  },
  {
    id: 4,
    label: "Step 04",
    title: "Supply lines, made visible.",
    body: "Know your supply status before your buyers ask. FarmVault shows demand signals, chain health, and market pressure in a single view.",
    stat: { value: "90%", label: "Supply score" },
    accent: "Supply Status",
    supply: { status: "Excellent", score: "90%" },
  },
  {
    id: 5,
    label: "Step 05",
    title: "Revenue you can read.",
    body: "From total sales to market demand, your financial pulse is always visible. Spot your best week, your worst, and what to do next.",
    stat: { value: "₦1.2M", label: "Monthly revenue" },
    accent: "Revenue Dashboard",
    revenue: { total: "₦322M", farm: "$1.2M", demand: "High" },
  },
  {
    id: 6,
    label: "Step 06",
    title: "The whole picture. Always.",
    body: "Inventory, supply, and revenue converge in a single dashboard. Make decisions with confidence — not guesswork.",
    stat: { value: "100%", label: "Visibility" },
    accent: "Full Overview",
  },
];

function FloatingCard({ frame }: { frame: typeof frames[0] }) {
  if (frame.cards) {
    return (
      <div className="flex gap-3 mt-4">
        {frame.cards.map((c) => (
          <div key={c.title} className="glass-card p-4 flex-1">
            <div className="font-mono text-xs mb-1" style={{ color: "#C8993A" }}>{c.title}</div>
            <div className="font-body text-xs mb-2" style={{ color: "rgba(245,240,232,0.5)" }}>{c.sub}</div>
            <div className="font-display font-bold text-xl" style={{ color: "#F5F0E8" }}>{c.inventory}</div>
          </div>
        ))}
      </div>
    );
  }
  if (frame.supply) {
    return (
      <div className="glass-card p-4 mt-4 flex items-center justify-between">
        <div>
          <div className="font-mono text-xs mb-1" style={{ color: "#C8993A" }}>Supply Status</div>
          <div className="font-display font-bold text-2xl" style={{ color: "#F5F0E8" }}>{frame.supply.status}</div>
        </div>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-bold"
          style={{ background: "rgba(200,153,58,0.15)", border: "2px solid #C8993A", color: "#C8993A" }}
        >
          {frame.supply.score}
        </div>
      </div>
    );
  }
  if (frame.revenue) {
    return (
      <div className="glass-card p-4 mt-4">
        <div className="font-mono text-xs mb-2" style={{ color: "#C8993A" }}>Revenue Dashboard</div>
        <div className="font-display font-bold text-3xl mb-3" style={{ color: "#F5F0E8" }}>₦1.2M</div>
        <div className="h-10 mb-3 relative overflow-hidden rounded">
          <svg viewBox="0 0 200 40" className="w-full h-full">
            <path
              d="M0 35 C20 30, 40 20, 60 22 C80 24, 100 15, 120 10 C140 5, 160 18, 180 12 L200 8 L200 40 L0 40 Z"
              fill="rgba(200,153,58,0.2)"
            />
            <path
              d="M0 35 C20 30, 40 20, 60 22 C80 24, 100 15, 120 10 C140 5, 160 18, 180 12 L200 8"
              fill="none"
              stroke="#C8993A"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="flex gap-4 text-xs font-mono">
          <div><div style={{ color: "rgba(245,240,232,0.4)" }}>Total</div><div style={{ color: "#F5F0E8" }}>{frame.revenue.total}</div></div>
          <div><div style={{ color: "rgba(245,240,232,0.4)" }}>Farm Rev</div><div style={{ color: "#F5F0E8" }}>{frame.revenue.farm}</div></div>
          <div><div style={{ color: "rgba(245,240,232,0.4)" }}>Demand</div><div style={{ color: "#C8993A" }}>{frame.revenue.demand}</div></div>
        </div>
      </div>
    );
  }
  return null;
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match the extracted frames (1280x720)
    canvas.width = 1280;
    canvas.height = 720;

    const frameCount = 100;
    const currentFrame = (index: number) =>
      `/frames/frame_${(index + 1).toString().padStart(4, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (images[imageSeq.frame]) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // We do a simple drawImage since we made the canvas exactly 1280x720
        ctx.drawImage(images[imageSeq.frame], 0, 0, canvas.width, canvas.height);
      }
    };

    images[0].onload = render;

    const ctxGsap = gsap.context(() => {
      // Scrub image sequence with scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          imageSeq.frame = Math.round(self.progress * (frameCount - 1));
          render();
        },
      });

      // Animate text panels on scroll
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;
        gsap.fromTo(
          panel,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctxGsap.revert();
  }, []);

  return (
    <section
      id="scroll-story"
      ref={containerRef}
      className="relative"
      style={{ background: "#0D1F0F" }}
    >
      {/* Sticky video replacement (Canvas) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(13,31,15,0.82) 0%, rgba(13,31,15,0.4) 50%, rgba(13,31,15,0.1) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{ background: "linear-gradient(to bottom, transparent, #0D1F0F)" }}
        />
        {/* Top edge vignette to blend with hero */}
        <div
          className="absolute top-0 left-0 right-0 h-40 z-10"
          style={{ background: "linear-gradient(to bottom, #0D1F0F, transparent)" }}
        />
        {/* AI Insight Floating Card */}
        <div className="absolute top-[85%] -translate-y-1/2 right-8 hidden lg:flex flex-col gap-4 max-w-[280px] z-20">
          <div
            className="p-5 rounded-2xl backdrop-blur-xl"
            style={{
              background: "rgba(13,31,15,0.45)",
              border: "1px solid rgba(200,153,58,0.25)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#gemini-grad-story)" />
                <path d="M5 4L5.8 6.2L8 7L5.8 7.8L5 10L4.2 7.8L2 7L4.2 6.2L5 4Z" fill="url(#gemini-grad-story)" />
                <defs>
                  <linearGradient id="gemini-grad-story" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C8993A" />
                    <stop offset="1" stopColor="#E8C874" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C8993A" }}>Market Signal</div>
            </div>
            <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.85)" }}>
              Peak demand identified in region. Suggesting +20% output reallocation.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll panels — positioned over the sticky video */}
      <div
        className="relative"
        style={{ marginTop: "-100vh" }}
      >
        {frames.map((frame, i) => (
          <div
            key={frame.id}
            className="min-h-screen flex items-center"
          >
            <div
              ref={(el) => { panelsRef.current[i] = el; }}
              className="max-w-7xl mx-auto px-6 w-full"
            >
              <div className="max-w-md">
                {/* Step label */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-px"
                    style={{ background: "#C8993A" }}
                  />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>
                    {frame.label}
                  </span>
                </div>

                {/* Accent tag */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                  style={{
                    background: "rgba(200,153,58,0.1)",
                    border: "1px solid rgba(200,153,58,0.25)",
                    color: "#C8993A",
                  }}
                >
                  {frame.accent}
                </div>

                {/* Title */}
                <h2
                  className="font-display font-bold mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    color: "#F5F0E8",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {frame.title}
                </h2>

                {/* Body */}
                <p
                  className="font-body text-base leading-relaxed mb-6"
                  style={{ color: "rgba(245,240,232,0.6)" }}
                >
                  {frame.body}
                </p>

                {/* Big stat */}
                <div
                  className="p-4 rounded-2xl mb-1"
                  style={{
                    background: "rgba(13,31,15,0.6)",
                    border: "1px solid rgba(200,153,58,0.2)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="font-display font-bold text-4xl gold-shimmer">{frame.stat.value}</div>
                  <div className="font-mono text-xs mt-1" style={{ color: "rgba(245,240,232,0.45)" }}>
                    {frame.stat.label}
                  </div>
                </div>

                {/* Optional extra card */}
                <FloatingCard frame={frame} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
