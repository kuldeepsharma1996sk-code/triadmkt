import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRIAD Marketing Services | Premium Brand Engagement & Logistics",
  description: "B2B brand engagement platform. Discover high-end Corporate Gifting, Events/BTL activations, and our secure, enterprise-grade fulfillment and logistics tracking technology.",
  keywords: ["B2B marketing", "Corporate Gifting", "Events BTL", "Fulfillment Logistics", "Logistics Tracking", "Fulfillment Platform"],
  authors: [{ name: "TRIAD Marketing Services" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-grey-dark font-sans">
        {children}
      </body>
    </html>
  );
}

