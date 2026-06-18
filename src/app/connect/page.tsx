import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  Gift,
  Truck,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Connect | TRIAD Marketing Services",
  description:
    "Get in touch with TRIAD Marketing Services for corporate events, premium gifting, BTL activations, and nationwide fulfillment solutions.",
};

const services = [
  {
    icon: <Calendar className="h-6 w-6 text-brand-orange" />,
    title: "Events & BTL",
    description:
      "Dealer conferences, product launches, trade exhibitions, and roadshows executed at national scale.",
  },
  {
    icon: <Gift className="h-6 w-6 text-brand-orange" />,
    title: "Corporate Gifting",
    description:
      "Curated premium gift catalogs, bespoke packaging, and direct-to-recipient fulfillment.",
  },
  {
    icon: <Truck className="h-6 w-6 text-brand-orange" />,
    title: "Fulfillment & Logistics",
    description:
      "End-to-end warehousing, inventory management, and nationwide courier coordination.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-orange" />,
    title: "Quick Turnaround",
    description:
      "Rapid response teams with strict SLA compliance and on-time delivery guarantees.",
  },
];

const contactDetails = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "info@triadmkt.com",
    href: "mailto:info@triadmkt.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Office",
    value: "New Delhi, India",
    href: "#",
  },
];

export default function ConnectPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-grey-dark">
      <Navbar />

      {/* Hero Header */}
      <section className="py-20 md:py-28 border-b border-grey-border/60 bg-radial from-[#FFF9F5] via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#FF6B00 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            lightWord="Let's"
            boldWord="Connect"
            description="Whether you need a large-scale brand activation, a curated corporate gifting solution, or reliable nationwide fulfillment — our team is ready to help you deliver exceptional experiences."
          />
        </div>
      </section>

      {/* Contact Grid: Form + Info */}
      <section className="py-24 border-b border-grey-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">
                Send Us a Message
              </span>
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-grey-dark mb-8 display-font">
                Start a <span className="font-extrabold text-black">Conversation</span>
              </h2>

              <form
                action="mailto:info@triadmkt.com"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="connect-name" className="block text-[10px] uppercase tracking-widest text-grey-mid font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="connect-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-grey-border bg-white px-4 py-3.5 text-xs font-light text-grey-dark placeholder-grey-mid focus:border-brand-orange focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="connect-email" className="block text-[10px] uppercase tracking-widest text-grey-mid font-bold mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="connect-email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-grey-border bg-white px-4 py-3.5 text-xs font-light text-grey-dark placeholder-grey-mid focus:border-brand-orange focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="connect-company" className="block text-[10px] uppercase tracking-widest text-grey-mid font-bold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="connect-company"
                      name="company"
                      placeholder="Your company"
                      className="w-full rounded-lg border border-grey-border bg-white px-4 py-3.5 text-xs font-light text-grey-dark placeholder-grey-mid focus:border-brand-orange focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="connect-service" className="block text-[10px] uppercase tracking-widest text-grey-mid font-bold mb-2">
                      Service Interest
                    </label>
                    <select
                      id="connect-service"
                      name="service"
                      className="w-full rounded-lg border border-grey-border bg-white px-4 py-3.5 text-xs font-light text-grey-dark focus:border-brand-orange focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="events">Events & BTL Activations</option>
                      <option value="gifting">Corporate Gifting</option>
                      <option value="fulfillment">Fulfillment & Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="connect-message" className="block text-[10px] uppercase tracking-widest text-grey-mid font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="connect-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project or requirements..."
                    className="w-full rounded-lg border border-grey-border bg-white px-4 py-3.5 text-xs font-light text-grey-dark placeholder-grey-mid focus:border-brand-orange focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange hover:bg-brand-orange-hover px-8 py-4 text-xs uppercase tracking-widest text-white transition-all duration-200 font-semibold shadow-md shadow-brand-orange-glow hover:shadow-lg"
                >
                  <span>Send Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">
                Contact Information
              </span>
              <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight text-grey-dark mb-8 display-font">
                Reach <span className="font-extrabold text-black">Us Directly</span>
              </h3>

              <div className="space-y-6 mb-12">
                {contactDetails.map((detail, i) => (
                  <a
                    key={i}
                    href={detail.href}
                    className="flex items-start gap-4 p-5 rounded-xl border border-grey-border/80 bg-white hover:border-brand-orange hover:shadow-lg hover:shadow-brand-orange-glow transition-all duration-300 group"
                  >
                    <div className="h-11 w-11 shrink-0 bg-brand-orange-light rounded-lg flex items-center justify-center text-brand-orange transition-transform duration-300 group-hover:scale-105">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-grey-mid font-bold block mb-1">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-grey-dark group-hover:text-brand-orange transition-colors">
                        {detail.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="rounded-xl border border-grey-border/80 bg-grey-light/50 p-6">
                <h4 className="text-[11px] uppercase tracking-wider font-bold text-grey-dark mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-orange" />
                  Business Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-grey-mid font-light">Monday – Friday</span>
                    <span className="font-semibold text-grey-dark">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-grey-mid font-light">Saturday</span>
                    <span className="font-semibold text-grey-dark">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-grey-mid font-light">Sunday</span>
                    <span className="font-semibold text-grey-dark">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-24 bg-grey-light/50 border-b border-grey-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 block">
              How We Can Help
            </span>
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-grey-dark display-font">
              Our <span className="font-extrabold text-black">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="rounded-xl border border-grey-border/80 bg-white p-8 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange-glow transition-all duration-300 group text-center"
              >
                <div className="h-14 w-14 mx-auto bg-brand-orange-light rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                  {svc.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-grey-dark mb-3 group-hover:text-brand-orange transition-colors display-font">
                  {svc.title}
                </h3>
                <p className="text-[11px] text-grey-mid font-light leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TRIAD Quick Highlights */}
      <section className="py-20 bg-white border-b border-grey-border/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "1,500+", label: "Events Executed", sub: "National and international scale" },
              { stat: "450k+", label: "Gifts Delivered", sub: "Premium curated packages" },
              { stat: "99.8%", label: "On-Time SLA", sub: "Strict turnaround compliance" },
            ].map((item, i) => (
              <div key={i} className="text-center border border-grey-border/60 rounded-xl p-8 hover:border-brand-orange hover:shadow-md transition-all duration-300">
                <span className="text-4xl font-light tracking-tight text-brand-orange block font-mono">
                  {item.stat}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-grey-mid font-bold mt-2 block">
                  {item.label}
                </span>
                <p className="text-[10px] text-grey-mid font-light mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
