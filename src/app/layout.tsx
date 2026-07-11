import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FarmVault — Intelligent Farm Management",
  description: "Real-time inventory, revenue tracking, and supply intelligence for modern poultry farms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain-overlay">
        {children}
      </body>
    </html>
  );
}
