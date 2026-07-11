"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Connect your farm",
    body: "Sign up and enter your flock details, product types, and supplier info. Takes under 15 minutes. No hardware required.",
    visual: (
      <div className="relative h-40 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: "rgba(200,153,58,0.08)", border: "1px dashed rgba(200,153,58,0.3)" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 32 Q20 10 32 32" stroke="#C8993A" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="16" r="5" stroke="#C8993A" strokeWidth="1.5" />
            <path d="M14 32 Q20 26 26 32" stroke="#C8993A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="absolute top-4 right-8 glass-card px-3 py-2">
          <div className="font-mono text-xs" style={{ color: "#C8993A" }}>Connected ✓</div>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Log daily activity",
    body: "Record feed, mortality, production, and sales from any device. The mobile view is built for the field — gloves on, three taps, done.",
    visual: (
      <div className="relative h-40 flex items-center justify-center">
        <div
          className="w-20 h-32 rounded-2xl relative overflow-hidden"
          style={{ background: "rgba(13,31,15,0.8)", border: "1px solid rgba(200,153,58,0.25)" }}
        >
          <div className="absolute top-3 left-0 right-0 flex justify-center">
            <div className="w-6 h-1 rounded-full" style={{ background: "rgba(200,153,58,0.3)" }} />
          </div>
          <div className="absolute inset-x-3 top-7 space-y-1.5">
            {["Feed", "Eggs", "Stock"].map((l, i) => (
              <div key={l} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: i === 0 ? "#C8993A" : "rgba(200,153,58,0.2)" }} />
                <div className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.5)", fontSize: "8px" }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)" }}>
            <span className="font-mono text-xs font-bold" style={{ color: "#0D1F0F", fontSize: "8px" }}>LOG</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Watch insights surface",
    body: "As data accumulates, FarmVault builds patterns. Revenue forecasts, supply warnings, and demand signals appear automatically.",
    visual: (
      <div className="relative h-40 flex items-center justify-center">
        <div className="w-full max-w-[160px] glass-card p-4">
          <div className="font-mono text-xs mb-2" style={{ color: "#C8993A" }}>Revenue trend</div>
          <svg viewBox="0 0 120 40" className="w-full h-8 mb-2">
            <path d="M0 35 C20 28 35 20 50 22 C65 24 80 12 100 8 L120 5" stroke="#C8993A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="120" cy="5" r="3" fill="#C8993A" />
          </svg>
          <div className="font-display font-bold text-lg" style={{ color: "#F5F0E8" }}>+34%</div>
          <div className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.4)", fontSize: "9px" }}>vs last quarter</div>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "Act before others react",
    body: "Push-alerts and daily briefings give you a 48-hour edge over market shifts. Sell when demand is high. Restock before shelves go bare.",
    visual: (
      <div className="relative h-40 flex items-center justify-center gap-3">
        {[
          { label: "Alert", text: "Demand spike in Lagos ↑", color: "#C8993A" },
          { label: "Action", text: "Push 80 units to market", color: "#4A7C59" },
        ].map((n) => (
          <div key={n.label} className="glass-card px-3 py-2.5 text-center" style={{ borderColor: `${n.color}30` }}>
            <div className="font-mono text-xs mb-1" style={{ color: n.color, fontSize: "9px" }}>{n.label}</div>
            <div className="font-body text-xs" style={{ color: "rgba(245,240,232,0.7)", fontSize: "10px" }}>{n.text}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connector line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
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
      id="platform"
      ref={sectionRef}
      className="py-28 md:py-36 relative"
      style={{ background: "linear-gradient(to bottom, #0A1A0C, #0D1F0F)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>How it works</span>
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
          </div>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "#F5F0E8", letterSpacing: "-0.03em" }}
          >
            From first login to{" "}
            <span className="gold-shimmer">full visibility</span>
            <br />in four steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={{ background: "rgba(200,153,58,0.1)" }}>
            <div ref={lineRef} className="w-full h-full" style={{ background: "linear-gradient(to bottom, #C8993A, rgba(200,153,58,0.2))" }} />
          </div>

          <div className="space-y-20 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { itemsRef.current[i] = el; }}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={`${i % 2 !== 0 ? "lg:[direction:ltr]" : ""} mb-8 lg:mb-0`}>
                  {step.visual}
                </div>
                <div className={`${i % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                  <div className="font-mono text-6xl font-bold mb-4" style={{ color: "rgba(200,153,58,0.12)", letterSpacing: "-0.04em" }}>
                    {step.num}
                  </div>
                  <h3
                    className="font-display font-bold text-2xl md:text-3xl mb-4"
                    style={{ color: "#F5F0E8", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
