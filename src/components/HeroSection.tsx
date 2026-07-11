"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4")
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");

      // Parallax scroll for hero video
      if (heroRef.current && videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.12,
          y: "-8%",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(overlayRef.current, {
          opacity: 0.85,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0D1F0F" }}
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transformOrigin: "center center" }}
          autoPlay
          muted
          loop
          playsInline
          src="/hero.mp4"
        />
        {/* Layered overlays for cinematic depth */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,31,15,0.55) 0%, rgba(13,31,15,0.3) 40%, rgba(13,31,15,0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, transparent 30%, rgba(13,31,15,0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(200,153,58,0.12)",
              border: "1px solid rgba(200,153,58,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>
              Live Farm Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="font-display font-bold leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              color: "#F5F0E8",
              letterSpacing: "-0.03em",
            }}
          >
            Your farm,{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(90deg, #C8993A, #E8C874, #C8993A)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              intelligently
            </em>{" "}
            managed.
          </h1>

          {/* Subheading */}
          <p
            ref={subtitleRef}
            className="font-body text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            Real-time inventory tracking, revenue dashboards, and supply intelligence — built for the serious poultry farmer.
          </p>

          {/* CTA group */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#scroll-story"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C8993A, #E8C874)",
                color: "#0D1F0F",
                boxShadow: "0 0 40px rgba(200,153,58,0.3)",
              }}
            >
              See it in action
              <svg className="transition-transform duration-300 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body text-base transition-all duration-300"
              style={{
                border: "1px solid rgba(245,240,232,0.2)",
                color: "#F5F0E8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#C8993A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.2)";
                (e.currentTarget as HTMLElement).style.color = "#F5F0E8";
              }}
            >
              Explore features
            </a>
          </div>
        </div>

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
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="url(#gemini-grad-hero)" />
                <path d="M5 4L5.8 6.2L8 7L5.8 7.8L5 10L4.2 7.8L2 7L4.2 6.2L5 4Z" fill="url(#gemini-grad-hero)" />
                <defs>
                  <linearGradient id="gemini-grad-hero" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C8993A" />
                    <stop offset="1" stopColor="#E8C874" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C8993A" }}>AI Analysis</div>
            </div>
            <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.85)" }}>
              Processing live flock data. Feed efficiency currently optimal.
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(245,240,232,0.4)" }}
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, rgba(200,153,58,0.6), transparent)",
              animation: "floatUp 2s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      {/* Bottom edge vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0D1F0F)" }}
      />
    </section>
  );
}
