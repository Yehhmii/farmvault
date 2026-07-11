"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="#C8993A" strokeWidth="1.5" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="#C8993A" strokeWidth="1.5" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="#C8993A" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5" stroke="#C8993A" strokeWidth="1.5" />
        <path d="M20 18v2l1.5 1" stroke="#C8993A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Live Inventory Grid",
    body: "See every product category — from live birds to frozen packs to egg flats — in a live-updating grid. Drill into batches, expiry windows, and per-unit cost.",
    tag: "Inventory",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 C8 12, 12 16, 16 8 C20 0, 22 10, 25 6" stroke="#C8993A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="4" cy="20" r="2" fill="#C8993A" />
        <circle cx="16" cy="8" r="2" fill="#C8993A" />
        <circle cx="25" cy="6" r="2" fill="#C8993A" />
      </svg>
    ),
    title: "Revenue Analytics",
    body: "Monthly, weekly, or daily views of farm income. Compare against your cost baseline and see which product lines carry your margins.",
    tag: "Finance",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3 L25 9 L25 19 L14 25 L3 19 L3 9 Z" stroke="#C8993A" strokeWidth="1.5" />
        <path d="M14 3 L14 25 M3 9 L25 9 M3 19 L25 19" stroke="#C8993A" strokeWidth="0.8" opacity="0.4" />
        <circle cx="14" cy="14" r="3" stroke="#C8993A" strokeWidth="1.5" />
      </svg>
    ),
    title: "Supply Chain Monitor",
    body: "Track input suppliers, delivery schedules, and chain disruptions. Know when your feed supplier is running thin before it hits your birds.",
    tag: "Supply",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22 L6 16 M11 22 L11 10 M16 22 L16 14 M21 22 L21 6" stroke="#C8993A" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 24 L24 24" stroke="#C8993A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Market Demand Signals",
    body: "Regional demand indexes from live market data. Know before the weekend rush whether to hold stock or push to buyers.",
    tag: "Market",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#C8993A" strokeWidth="1.5" />
        <path d="M14 8 L14 14 L18 17" stroke="#C8993A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6 L10 10" stroke="#C8993A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M22 6 L18 10" stroke="#C8993A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Flock Health Timeline",
    body: "Log mortality, vaccination events, and weight milestones. The system flags anomalies that deviate from your historical baselines.",
    tag: "Health",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="8" width="18" height="16" rx="2" stroke="#C8993A" strokeWidth="1.5" />
        <path d="M10 8 L10 5 C10 3.9 10.9 3 12 3 H16 C17.1 3 18 3.9 18 5 L18 8" stroke="#C8993A" strokeWidth="1.5" />
        <path d="M9 14 L12 17 L19 11" stroke="#C8993A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Smart Alerts",
    body: "Configurable thresholds push alerts to your phone — low stock, feed anomaly, high demand day, pending deliveries — before problems become crises.",
    tag: "Alerts",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
            delay: (i % 3) * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-28 md:py-36"
      style={{ background: "linear-gradient(to bottom, #0D1F0F, #0A1A0C)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>
              Platform
            </span>
          </div>
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F0E8", letterSpacing: "-0.03em", maxWidth: "600px" }}
          >
            Built for farms that mean{" "}
            <em className="not-italic gold-shimmer">business.</em>
          </h2>
          <p className="font-body text-lg max-w-lg" style={{ color: "rgba(245,240,232,0.55)" }}>
            Every feature is designed around how poultry operations actually work — not how software engineers imagine they do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative p-7 rounded-2xl cursor-default transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(200,153,58,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200,153,58,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.22)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Tag */}
              <div
                className="inline-block px-2.5 py-1 rounded-full text-xs font-mono mb-5"
                style={{ background: "rgba(200,153,58,0.08)", color: "rgba(200,153,58,0.7)" }}
              >
                {f.tag}
              </div>
              {/* Icon */}
              <div className="mb-5">{f.icon}</div>
              {/* Title */}
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: "#F5F0E8", letterSpacing: "-0.02em" }}
              >
                {f.title}
              </h3>
              {/* Body */}
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.5)" }}>
                {f.body}
              </p>

              {/* Hover glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, transparent, #C8993A, transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
