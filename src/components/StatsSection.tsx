"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 1200, suffix: "+", label: "Active farms", prefix: "" },
  { value: 98, suffix: "%", label: "Uptime guaranteed", prefix: "" },
  { value: 4.2, suffix: "B", label: "Naira tracked monthly", prefix: "₦" },
  { value: 34, suffix: "%", label: "Average revenue lift", prefix: "" },
];

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, decimals]);
  return val;
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const count = useCountUp(stat.value, decimals, active);
  return (
    <div className="text-center md:text-left">
      <div
        className="font-display font-bold mb-2 gold-shimmer"
        style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
      >
        {stat.prefix}{decimals ? count.toFixed(1) : Math.floor(count)}{stat.suffix}
      </div>
      <div className="font-body text-sm tracking-wide" style={{ color: "rgba(245,240,232,0.45)" }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => setActive(true),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#0A1A0C" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(200,153,58,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>By the numbers</span>
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
          </div>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8", letterSpacing: "-0.03em" }}
          >
            Farms that use data,{" "}
            <span className="gold-shimmer">win.</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={active} />
          ))}
        </div>

        {/* Divider line */}
        <div
          className="mt-20 h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,153,58,0.2), transparent)" }}
        />
      </div>
    </section>
  );
}
