"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  const sections = [
    {
      title: "Services",
      links: [
        { name: "Events & BTL activations", href: "/events" },
        { name: "Corporate Gifting solutions", href: "/gifting" },
        { name: "Connect with us", href: "/connect" },
        { name: "Retail & VM display", href: "/events#capabilities" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Corporate profile", href: "/" },
        { name: "Case studies", href: "/events#portfolio" },
        { name: "Contact inquiries", href: "mailto:info@triadmkt.com" },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-grey-border bg-grey-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="TRIAD Marketing Services Logo" 
                width={160} 
                height={52} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs text-grey-mid font-light leading-relaxed max-w-xs">
              Premium brand engagement agency delivering corporate events, curated gifting, and seamless nationwide fulfillment and logistics.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="h-8 w-8 rounded-lg border border-grey-border bg-white flex items-center justify-center text-grey-mid hover:text-brand-orange hover:border-brand-orange transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-lg border border-grey-border bg-white flex items-center justify-center text-grey-mid hover:text-brand-orange hover:border-brand-orange transition-all duration-200"
                aria-label="Twitter / X"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:info@triadmkt.com"
                className="h-8 w-8 rounded-lg border border-grey-border bg-white flex items-center justify-center text-grey-mid hover:text-brand-orange hover:border-brand-orange transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>


          {/* Map Link sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="md:col-span-2 flex flex-col gap-4">
              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-grey-dark">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-grey-mid hover:text-brand-orange transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Box */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-wider font-semibold text-grey-dark">
              Subscribe to Insights
            </h4>
            <p className="text-xs text-grey-mid font-light leading-relaxed">
              Stay updated on corporate gifting trends, events execution insights, and brand engagement strategies.
            </p>
            {status === "success" ? (
              <div className="flex items-center gap-2 rounded-lg bg-brand-orange-light border border-brand-orange/20 p-4 text-brand-orange animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-[11px] font-semibold">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    disabled={status === "loading"}
                    className="w-full rounded-lg border border-grey-border bg-white px-4 py-3 pr-12 text-xs font-light text-grey-dark placeholder-grey-mid focus:border-brand-orange focus:outline-none disabled:opacity-50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="absolute right-2 p-2 text-grey-mid hover:text-brand-orange disabled:opacity-50 transition-all"
                    aria-label="Subscribe"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                {status === "error" && (
                  <span className="text-[10px] text-red-500 font-medium ml-1">
                    Please enter a valid email address.
                  </span>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-grey-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-grey-mid font-light">
            © {new Date().getFullYear()} TRIAD Marketing Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest text-grey-mid hover:text-brand-orange transition-colors font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest text-grey-mid hover:text-brand-orange transition-colors font-light"
            >
              Terms of Engagement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

