"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Before FarmVault, I was running revenue numbers in a notebook. Now I know my exact margin on every batch before it leaves the farm.",
    name: "Emeka Okonkwo",
    role: "Poultry Farmer, Oyo State",
    birds: "4,200 birds",
    lift: "+41% revenue clarity",
    initials: "EO",
  },
  {
    quote: "The supply status screen alone saved me twice in one quarter. I caught a supplier issue three days before it would have hit my inventory.",
    name: "Fatima Aliyu",
    role: "Farm Manager, Kaduna",
    birds: "8,800 birds",
    lift: "₦2.1M loss prevented",
    initials: "FA",
  },
  {
    quote: "My buyers trust me more because I can send them a live inventory link. That credibility turned one of them into a standing order.",
    name: "Chidi Eze",
    role: "Commercial Farmer, Enugu",
    birds: "12,000 birds",
    lift: "3 new bulk buyers",
    initials: "CE",
  },
  {
    quote: "I manage three farms across two states. FarmVault makes them feel like one operation from my phone. That's what I was missing.",
    name: "Rashida Bello",
    role: "Multi-site Operator, Abuja",
    birds: "22,000 birds total",
    lift: "3 farms, 1 dashboard",
    initials: "RB",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goTo = (idx: number) => {
    setActive(idx);
    if (trackRef.current) {
      const cardWidth = trackRef.current.offsetWidth;
      gsap.to(trackRef.current, {
        x: -idx * cardWidth,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-36 overflow-hidden"
      style={{ background: "#0D1F0F" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#C8993A" }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>Farmers speak</span>
            </div>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "#F5F0E8", letterSpacing: "-0.03em" }}
            >
              Real farms.
              <br />
              <span className="gold-shimmer">Real results.</span>
            </h2>
          </div>

          {/* Nav dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: active === i ? "32px" : "8px",
                  height: "8px",
                  background: active === i ? "#C8993A" : "rgba(200,153,58,0.2)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{ width: "100%" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="min-w-full"
                style={{ paddingRight: "0" }}
              >
                <div
                  className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,153,58,0.06) 0%, rgba(13,31,15,0.8) 100%)",
                    border: "1px solid rgba(200,153,58,0.12)",
                  }}
                >
                  {/* Large quote mark */}
                  <div
                    className="absolute top-6 right-8 font-display font-bold leading-none pointer-events-none select-none"
                    style={{ fontSize: "120px", color: "rgba(200,153,58,0.06)", lineHeight: 1 }}
                  >
                    "
                  </div>

                  <div className="max-w-3xl relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[0,1,2,3,4].map((s) => (
                        <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#C8993A">
                          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote
                      className="font-display font-bold mb-8 leading-snug"
                      style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#F5F0E8", letterSpacing: "-0.02em" }}
                    >
                      "{t.quote}"
                    </blockquote>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      {/* Avatar */}
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-base shrink-0"
                          style={{ background: "linear-gradient(135deg, #C8993A, #6B4E2A)", color: "#F5F0E8" }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-body font-semibold text-sm" style={{ color: "#F5F0E8" }}>{t.name}</div>
                          <div className="font-body text-xs" style={{ color: "rgba(245,240,232,0.45)" }}>{t.role}</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 sm:ml-auto">
                        {[{ v: t.birds, l: "Flock size" }, { v: t.lift, l: "Impact" }].map((s) => (
                          <div key={s.l}>
                            <div className="font-mono text-sm font-bold" style={{ color: "#C8993A" }}>{s.v}</div>
                            <div className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>{s.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow nav */}
        <div className="flex justify-end gap-3 mt-6">
          {["prev", "next"].map((dir) => (
            <button
              key={dir}
              onClick={() => goTo(dir === "prev" ? Math.max(0, active - 1) : Math.min(testimonials.length - 1, active + 1))}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                border: "1px solid rgba(200,153,58,0.25)",
                color: "#C8993A",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,153,58,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              aria-label={dir}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d={dir === "prev" ? "M11 13L7 9l4-4" : "M7 5l4 4-4 4"}
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
