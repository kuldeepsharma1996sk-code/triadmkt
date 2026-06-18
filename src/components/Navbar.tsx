"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Layers, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { name: "Services", href: "/#services" },
    { name: "Events & BTL", href: "/events" },
    { name: "Corporate Gifting", href: "/gifting" },
    { name: "Connect", href: "/connect" },
  ];

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-grey-border/60 bg-white/70 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group" id="nav-logo">
              <Image 
                src="/logo.png" 
                alt="TRIAD Marketing Services Logo" 
                width={160} 
                height={52} 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
                priority
              />
            </Link>
          </div>


          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href || (pathname === "/" && link.href === "/#services" && typeof window !== "undefined" && window.location.hash === "#services");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-200 relative py-2 group ${
                    isActive ? "text-brand-orange" : "text-grey-mid hover:text-grey-dark"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-lg border border-grey-border text-grey-mid hover:text-grey-dark hover:border-grey-dark transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileOpen && (
        <div className="md:hidden border-b border-grey-border/80 bg-white/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1 px-4 pt-4 pb-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-xs uppercase tracking-widest font-semibold text-grey-dark hover:bg-grey-light hover:text-brand-orange transition-all"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}

