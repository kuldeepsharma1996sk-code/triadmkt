import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  Layers, 
  Megaphone, 
  Truck, 
  Award,
  ArrowRight,
  MapPin,
  CheckCircle2,
  CalendarDays
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events & BTL | TRIAD Marketing Services",
  description: "Exquisite corporate events, trade shows, roadshows, and BTL brand activations managed with digital verification tools.",
};

const capabilities = [
  {
    num: "01",
    title: "Dealer Conferences",
    icon: <Users className="h-6 w-6 text-brand-orange" />,
    description: "Multi-day high-end summits for partner networks, incorporating custom spatial design, stage structures, and live technical control.",
  },
  {
    num: "02",
    title: "Product Launches",
    icon: <Sparkles className="h-6 w-6 text-brand-orange" />,
    description: "Sleek, high-production reveals designed to capture press attention and establish premium brand positioning.",
  },
  {
    num: "03",
    title: "Trade Show Exhibitions",
    icon: <Layers className="h-6 w-6 text-brand-orange" />,
    description: "Architectural pavilion booths and display spaces constructed to maximize footfall and stand out in crowded arenas.",
  },
  {
    num: "04",
    title: "BTL Brand Activations",
    icon: <Megaphone className="h-6 w-6 text-brand-orange" />,
    description: "Targeted on-ground experiential events and mall installations engaging customers directly to drive lead generation.",
  },
  {
    num: "05",
    title: "National Roadshows",
    icon: <Truck className="h-6 w-6 text-brand-orange" />,
    description: "Mobile container displays and pop-up setups deployed across tier-1 and tier-2 markets with tracked logistics assets.",
  },
  {
    num: "06",
    title: "VIP Executive Hospitality",
    icon: <Award className="h-6 w-6 text-brand-orange" />,
    description: "Exclusive corporate retreats and boardroom dinners featuring premium hosting, logistics coordination, and custom brand details.",
  },
];

const caseStudies = [
  {
    title: "Annual Automotive Dealer Convocation",
    client: "Euro-Group Motors",
    location: "New Delhi, India",
    scale: "650+ Dealers // 3-Day Summit",
    image: "/images/dealer-conference.png",
  },
  {
    title: "Next-Gen Enterprise Tech Showcase",
    client: "Zeta Computing Corp",
    location: "Bengaluru, India",
    scale: "1,200 Attendees // Live Streamed",
    image: "/images/product-launch.png",
  },
  {
    title: "Heavy Industries Pavilion",
    client: "Apex Machinery",
    location: "Mumbai Exhibition Centre",
    scale: "800 sqm Built Area // Outdoor",
    image: "/images/trade-show.png",
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-grey-dark">
      <Navbar />

      {/* Intro Header Section */}
      <section className="py-20 md:py-28 border-b border-grey-border/60 bg-radial from-[#FFF9F5] via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightWord="Events &"
            boldWord="BTL Activations"
            description="We conceptualize, construct, and execute spatial brand activations. From heavy exhibition setups to clinical corporate launch events, our teams deliver seamless on-ground executions at scale."
          />

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {capabilities.map((cap) => (
              <div 
                key={cap.num} 
                className="rounded-xl border border-grey-border/80 p-8 bg-white flex flex-col justify-between hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange-glow transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-grey-mid">
                      CAPABILITY // {cap.num}
                    </span>
                    <div className="h-10 w-10 bg-brand-orange-light rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {cap.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-grey-dark group-hover:text-brand-orange transition-colors mb-3 display-font">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-grey-mid font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Studies Portfolio Section */}
      <section id="portfolio" className="border-b border-grey-border/60 scroll-mt-10">
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-2 block">
            Selected Case Studies
          </span>
          <h3 className="text-3xl font-light uppercase tracking-tight text-grey-dark display-font">
            Clinical execution <span className="font-extrabold text-black">on a massive scale</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-grey-border/60">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="relative group h-[500px] overflow-hidden border-b lg:border-b-0 lg:border-r border-grey-border/60 last:border-r-0 cursor-pointer"
            >
              <Image
                src={cs.image}
                alt={cs.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Overlay with brand orange subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-brand-orange/95 group-hover:via-brand-orange/40 group-hover:to-transparent transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] uppercase tracking-widest text-grey-light/75 font-semibold mb-2 block group-hover:text-white transition-colors">
                  Client: {cs.client}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-wider leading-tight mb-4 display-font">
                  {cs.title}
                </h4>
                <div className="border-t border-white/20 pt-4 mt-2 flex justify-between text-[10px] uppercase tracking-wider font-light text-grey-light">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {cs.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {cs.scale}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Band Section */}
      <section className="py-20 bg-grey-light border-b border-grey-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center md:text-left">
              <span className="text-4xl font-light tracking-tight text-brand-orange block font-mono">120+</span>
              <span className="text-[10px] uppercase tracking-wider text-grey-mid font-bold mt-2 block">Conferences Completed</span>
            </div>
            <div className="text-center md:text-left border-l border-grey-border/60 pl-0 md:pl-8">
              <span className="text-4xl font-light tracking-tight text-brand-orange block font-mono">45k+</span>
              <span className="text-[10px] uppercase tracking-wider text-grey-mid font-bold mt-2 block">Attendees Engaged</span>
            </div>
            <div className="text-center md:text-left border-l border-grey-border/60 pl-0 md:pl-8">
              <span className="text-4xl font-light tracking-tight text-brand-orange block font-mono">10+</span>
              <span className="text-[10px] uppercase tracking-wider text-grey-mid font-bold mt-2 block">Years of Operations</span>
            </div>
            <div className="text-center md:text-left border-l border-grey-border/60 pl-0 md:pl-8">
              <span className="text-4xl font-light tracking-tight text-brand-orange block font-mono">99.2%</span>
              <span className="text-[10px] uppercase tracking-wider text-grey-mid font-bold mt-2 block">On-Time SLA Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement RFP / Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-grey-dark mb-6 display-font">
            Ready to design <span className="font-extrabold text-black">your next activation?</span>
          </h2>
          <p className="text-xs md:text-sm text-grey-mid max-w-xl font-light leading-relaxed mb-10">
            Contact our project management team today to receive spatial concepts, structural designs, and live estimation quotes.
          </p>
          <a
            href="mailto:info@triadmkt.com?subject=Event%20RFP%20Inquiry"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange hover:bg-brand-orange-hover px-8 py-4 text-xs uppercase tracking-widest text-white transition-all duration-200 font-semibold shadow-md shadow-brand-orange-glow"
          >
            <span>Initiate Event RFP</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
