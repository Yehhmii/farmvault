"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: innerRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-6"
      style={{ background: "#0A1A0C" }}
    >
      <div
        ref={innerRef}
        className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-12 md:p-20"
        style={{
          background: "linear-gradient(135deg, rgba(200,153,58,0.1) 0%, rgba(13,31,15,0.95) 50%, rgba(74,124,89,0.08) 100%)",
          border: "1px solid rgba(200,153,58,0.18)",
        }}
      >
        {/* Background orbs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,153,58,0.12) 0%, transparent 70%)", filter: "blur(30px)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(74,124,89,0.1) 0%, transparent 70%)", filter: "blur(30px)" }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(200,153,58,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,153,58,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>Get started</span>
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
          </div>

          <h2
            className="font-display font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", color: "#F5F0E8", letterSpacing: "-0.03em" }}
          >
            Your farm's next era
            <br />
            <span className="gold-shimmer">starts today.</span>
          </h2>

          <p
            className="font-body text-lg mb-10 mx-auto"
            style={{ color: "rgba(245,240,232,0.55)", maxWidth: "480px" }}
          >
            Join over 1,200 Nigerian farmers who turned their data into decisions. Start your free 14-day trial — no card, no catch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-body font-medium text-base transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C8993A, #E8C874)",
                color: "#0D1F0F",
                boxShadow: "0 0 60px rgba(200,153,58,0.35)",
              }}
            >
              Start for free
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-body text-base transition-all duration-300"
              style={{ border: "1px solid rgba(245,240,232,0.15)", color: "#F5F0E8" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.15)"; }}
            >
              Book a demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {["No credit card", "14-day free trial", "Cancel anytime"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 4" stroke="#C8993A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.45)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
