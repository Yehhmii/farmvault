"use client";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help centre", "Contact", "Status", "Documentation"],
  Legal: ["Privacy", "Terms", "Cookies", "Security"],
};

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 relative overflow-hidden"
      style={{ background: "#060F07" }}
    >
      {/* Top edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,153,58,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C7 1 2 4 2 8.5C2 10.433 4.239 12 7 12C9.761 12 12 10.433 12 8.5C12 4 7 1 7 1Z" fill="#0D1F0F" />
                  <circle cx="7" cy="5" r="1.2" fill="#0D1F0F" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg" style={{ color: "#F5F0E8" }}>FarmVault</span>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.4)" }}>
              Real-time farm intelligence for Nigeria's most serious poultry operators.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ border: "1px solid rgba(200,153,58,0.15)", color: "rgba(245,240,232,0.4)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#C8993A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,153,58,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.4)";
                  }}
                  aria-label={s}
                >
                  {s === "twitter" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {s === "instagram" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  )}
                  {s === "linkedin" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#C8993A" }}>
                {group}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm transition-colors duration-200"
                      style={{ color: "rgba(245,240,232,0.4)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5F0E8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(245,240,232,0.4)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "rgba(200,153,58,0.05)", border: "1px solid rgba(200,153,58,0.1)" }}
        >
          <div className="flex-1">
            <div className="font-display font-bold text-lg mb-1" style={{ color: "#F5F0E8" }}>Farm intelligence, weekly.</div>
            <div className="font-body text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>Market signals, tips, and platform updates in your inbox every Thursday.</div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 px-4 py-3 rounded-xl font-body text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200,153,58,0.15)",
                color: "#F5F0E8",
              }}
            />
            <button
              className="px-5 py-3 rounded-xl font-body font-medium text-sm shrink-0 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #C8993A, #E8C874)", color: "#0D1F0F" }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(200,153,58,0.08)" }}
        >
          <div className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
            © 2025 FarmVault Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4A7C59", animation: "glowPulse 2s infinite" }} />
            <span className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
