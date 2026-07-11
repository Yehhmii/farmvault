"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Seedling",
    price: "₦9,900",
    period: "/ month",
    tagline: "For farmers starting to digitize.",
    features: [
      "Up to 5,000 birds",
      "Inventory tracking",
      "Basic revenue view",
      "Mobile access",
      "Email support",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Harvest",
    price: "₦24,900",
    period: "/ month",
    tagline: "For farms that run on data.",
    features: [
      "Up to 25,000 birds",
      "Live supply chain monitor",
      "Revenue analytics + forecasts",
      "Market demand signals",
      "Push alerts",
      "Buyer share links",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Compound",
    price: "Custom",
    period: "",
    tagline: "For multi-site operations.",
    features: [
      "Unlimited birds & sites",
      "Multi-farm dashboard",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-site onboarding",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-28 md:py-36"
      style={{ background: "linear-gradient(to bottom, #0D1F0F, #0A1A0C)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C8993A" }}>Pricing</span>
            <div className="w-8 h-px" style={{ background: "#C8993A" }} />
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "#F5F0E8", letterSpacing: "-0.03em" }}
          >
            Pay for insight,{" "}
            <span className="gold-shimmer">not headcount.</span>
          </h2>
          <p className="font-body text-lg" style={{ color: "rgba(245,240,232,0.5)" }}>
            14-day free trial on all plans. No card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="relative rounded-3xl p-8 transition-transform duration-300"
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg, rgba(200,153,58,0.12), rgba(13,31,15,0.9))"
                  : "rgba(255,255,255,0.025)",
                border: plan.highlight
                  ? "1px solid rgba(200,153,58,0.35)"
                  : "1px solid rgba(200,153,58,0.08)",
                transform: plan.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-mono text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)", color: "#0D1F0F" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#C8993A" }}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: plan.price === "Custom" ? "2.5rem" : "3rem", color: "#F5F0E8", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="font-body text-sm mb-1" style={{ color: "rgba(245,240,232,0.4)" }}>{plan.period}</span>
                  )}
                </div>
                <p className="font-body text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>{plan.tagline}</p>
              </div>

              <div
                className="h-px w-full mb-6"
                style={{ background: "rgba(200,153,58,0.12)" }}
              />

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(200,153,58,0.12)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#C8993A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-body text-sm" style={{ color: "rgba(245,240,232,0.65)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="block w-full py-3.5 rounded-xl text-center font-body font-medium text-sm transition-all duration-300"
                style={plan.highlight ? {
                  background: "linear-gradient(135deg, #C8993A, #E8C874)",
                  color: "#0D1F0F",
                  boxShadow: "0 0 30px rgba(200,153,58,0.25)",
                } : {
                  border: "1px solid rgba(200,153,58,0.25)",
                  color: "#C8993A",
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlight) (e.currentTarget as HTMLElement).style.background = "rgba(200,153,58,0.08)";
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlight) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
