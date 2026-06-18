import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { 
  Briefcase, 
  Smartphone, 
  UserPlus, 
  Leaf, 
  Box, 
  Webhook, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Gifting | TRIAD Marketing Services",
  description: "Curated corporate gifting solutions with premium packaging, global logistics, and smart inventory management.",
};

const collections = [
  {
    title: "Executive Luxury",
    icon: <Briefcase className="h-5 w-5 text-brand-orange" />,
    description: "Premium leather folios, bespoke metal pens, and handcrafted workspace accessories designed for key partners.",
    items: ["Bespoke Leather Goods", "Signature Writing Instruments", "Anodized Desk Organizers"],
  },
  {
    title: "Enterprise Tech",
    icon: <Smartphone className="h-5 w-5 text-brand-orange" />,
    description: "High-grade audio gear, matte-finish power banks, and minimalist charging hubs with subtle logo integration.",
    items: ["Active Noise Cancelling Buds", "10,000mAh Magnetic Power Banks", "Triple-Device Wireless Docks"],
  },
  {
    title: "Welcome Onboarding",
    icon: <UserPlus className="h-5 w-5 text-brand-orange" />,
    description: "Complete new-hire welcome boxes featuring organic cotton hoodies, custom notebooks, and vacuum flasks.",
    items: ["Heavyweight Loopback Hoodies", "Grid-Ruled Hardcover Journals", "Double-Wall Insulated Flasks"],
  },
  {
    title: "Eco Sustainable",
    icon: <Leaf className="h-5 w-5 text-brand-orange" />,
    description: "Earth-friendly products manufactured from ocean plastics, recycled felt, and bamboo fibers.",
    items: ["Recycled Felt Sleeve Protectors", "Cork-Base Tumblers", "Plantable Seed Paper Notebooks"],
  },
];

const capabilities = [
  {
    title: "Bespoke Packaging Design",
    icon: <Box className="h-6 w-6 text-brand-orange" />,
    description: "We don't do generic wrapping. All custom gift boxes use thick boards, hot-stamped branding, and precise die-cut foam inserts.",
  },
  {
    title: "API-Driven Drop Shipping",
    icon: <Webhook className="h-6 w-6 text-brand-orange" />,
    description: "Connect your HR portals directly to our fulfillment queue. Trigger corporate welcome gifts automatically upon employee contract signing.",
  },
  {
    title: "Global Custom Fulfillment",
    icon: <Globe className="h-6 w-6 text-brand-orange" />,
    description: "Our logistics hubs manage international delivery compliance, ensuring all custom duties are prepaid and packages arrive in pristine condition.",
  },
];

export default function GiftingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-grey-dark">
      <Navbar />

      {/* Intro Header */}
      <section className="py-20 md:py-28 border-b border-grey-border/60 bg-radial from-[#FFF9F5] via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            lightWord="Corporate"
            boldWord="Gifting Solutions"
            description="We conceptualize, brand, pack, and distribute premium corporate gifts. Backed by specialized storage warehouses and direct API fulfillment, we make bulk corporate gifting simple and clinical."
          />

          {/* Curated Showcase Grid */}
          <div className="mt-16">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-6 block">
              Curated Gift Collections
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.map((coll, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-grey-border/80 bg-white p-6 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange-glow transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center border-b border-grey-border/60 pb-4 mb-4">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-grey-dark group-hover:text-brand-orange transition-colors display-font">
                        {coll.title}
                      </h4>
                      <div className="h-8 w-8 bg-brand-orange-light rounded flex items-center justify-center">
                        {coll.icon}
                      </div>
                    </div>
                    <p className="text-xs text-grey-mid font-light leading-relaxed mb-6">
                      {coll.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-black block mb-2.5 font-bold">
                      Featured SKUs:
                    </span>
                    <ul className="flex flex-col gap-2 text-[10px] text-grey-mid font-light">
                      {coll.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 md:py-28 bg-grey-light/50 border-b border-grey-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-3 block">
                Fulfillment Infrastructure
              </span>
              <h3 className="text-3xl font-light uppercase tracking-tight text-grey-dark mb-4 display-font">
                Scalable logistics <span className="font-extrabold text-black block mt-1">behind every box</span>
              </h3>
              <p className="text-xs md:text-sm text-grey-mid font-light leading-relaxed">
                Our warehousing hubs maintain optimal temperature control for delicate items, coupled with automated inventory verification linked directly to our digital fulfillment system.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-grey-border/80 p-6 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange-glow transition-all duration-300 group"
                >
                  <div className="h-10 w-10 bg-brand-orange-light rounded-lg flex items-center justify-center text-brand-orange mb-4 transition-transform duration-300 group-hover:scale-105">
                    {cap.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-grey-dark mb-2.5 display-font">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-grey-mid font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Engagement Lifecycle Process Flow */}
      <section className="py-20 md:py-28 bg-white border-b border-grey-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-2.5 block">
              Engagement Lifecycle
            </span>
            <h3 className="text-3xl font-light uppercase tracking-tight text-grey-dark display-font">
              From curation <span className="font-extrabold text-black">to delivery confirmation</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1.5px] bg-grey-border/80 z-0"></div>

            <div className="relative bg-white p-6 z-10 text-center flex flex-col items-center group">
              <span className="h-8 w-8 rounded-full border border-brand-orange flex items-center justify-center text-xs font-bold bg-white text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md mb-4">
                01
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-grey-dark mb-2 display-font">Curate Options</h4>
              <p className="text-[11px] text-grey-mid font-light leading-relaxed max-w-[200px]">
                Choose products from our premium catalog or request bespoke custom item development.
              </p>
            </div>

            <div className="relative bg-white p-6 z-10 text-center flex flex-col items-center group">
              <span className="h-8 w-8 rounded-full border border-brand-orange flex items-center justify-center text-xs font-bold bg-white text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md mb-4">
                02
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-grey-dark mb-2 display-font">Brand Mockups</h4>
              <p className="text-[11px] text-grey-mid font-light leading-relaxed max-w-[200px]">
                Our internal design studio creates digital rendering guidelines showing exact placement.
              </p>
            </div>

            <div className="relative bg-white p-6 z-10 text-center flex flex-col items-center group">
              <span className="h-8 w-8 rounded-full border border-brand-orange flex items-center justify-center text-xs font-bold bg-white text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md mb-4">
                03
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-grey-dark mb-2 display-font">Secure Storage</h4>
              <p className="text-[11px] text-grey-mid font-light leading-relaxed max-w-[200px]">
                Stock items in our secure, audited warehouses. Track levels on your client portal.
              </p>
            </div>

            <div className="relative bg-white p-6 z-10 text-center flex flex-col items-center group">
              <span className="h-8 w-8 rounded-full border border-brand-orange flex items-center justify-center text-xs font-bold bg-white text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-md mb-4">
                04
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-grey-dark mb-2 display-font">Dispatch & SLA</h4>
              <p className="text-[11px] text-grey-mid font-light leading-relaxed max-w-[200px]">
                Orders are processed and verified. Recipients get SMS alerts with tracking links.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-grey-dark mb-6 display-font">
            Ready to catalog <span className="font-extrabold text-black">your enterprise gifts?</span>
          </h2>
          <p className="text-xs md:text-sm text-grey-mid max-w-xl font-light leading-relaxed mb-10">
            Speak with one of our accounts directors to receive a physical box sampler or establish API dashboard access.
          </p>
          <a
            href="mailto:info@triadmkt.com?subject=Corporate%20Gifting%20Consultation"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange hover:bg-brand-orange-hover px-8 py-4 text-xs uppercase tracking-widest text-white transition-all duration-200 font-semibold shadow-md shadow-brand-orange-glow"
          >
            <span>Request Catalog Consultation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
