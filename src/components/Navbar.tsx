"use client";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Platform", "Features", "Pricing", "About"];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(13,31,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,153,58,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1C7 1 2 4 2 8.5C2 10.433 4.239 12 7 12C9.761 12 12 10.433 12 8.5C12 4 7 1 7 1Z" fill="#0D1F0F" />
              <circle cx="7" cy="5" r="1.2" fill="#0D1F0F" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight" style={{ color: "#F5F0E8" }}>
            FarmVault
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-body transition-colors duration-200"
              style={{ color: "rgba(245,240,232,0.6)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8993A")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,232,0.6)")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-body" style={{ color: "rgba(245,240,232,0.6)" }}>
            Sign in
          </a>
          <a
            href="#"
            className="px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #C8993A, #E8C874)",
              color: "#0D1F0F",
            }}
          >
            Start free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#C8993A",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 1 ? "opacity: 0"
                  : "rotate(-45deg) translate(4px, -4px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{ maxHeight: menuOpen ? "300px" : "0", background: "rgba(13,31,15,0.98)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-base font-body py-2 border-b" style={{ color: "#F5F0E8", borderColor: "rgba(200,153,58,0.1)" }} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#" className="mt-2 px-5 py-3 rounded-full text-center text-sm font-body font-medium" style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)", color: "#0D1F0F" }}>
            Start free
          </a>
        </div>
      </div>
    </nav>
  );
}
