import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowRight,
  Star,
  CheckCircle2,
  Box,
  Globe,
  Award
} from "lucide-react";

export default function Home() {
  const clients = [
    { name: "Brand 1", logo: "Automotive" },
    { name: "Brand 2", logo: "FMCG" },
    { name: "Brand 3", logo: "Tech Corp" },
    { name: "Brand 4", logo: "Retail Plus" },
    { name: "Brand 5", logo: "Finance Hub" },
    { name: "Brand 6", logo: "Healthcare" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-grey-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Bold Typography & CTA */}
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-grey-dark leading-[1.1] mb-6">
                Power and Scale <br />
                <span className="text-brand-orange">Brand Engagement.</span> <br />
                Drive Results.
              </h1>
              <p className="text-base md:text-lg text-grey-dark font-medium leading-relaxed mb-10 max-w-lg">
                Accelerate physical and digital brand presence with premium corporate gifting, experiential activations, and comprehensive fulfillment networks.
              </p>
              
              <Link
                href="/connect"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange hover:bg-brand-orange-hover px-10 py-4 text-sm font-semibold text-white transition-all duration-300"
              >
                Request A Consultation
              </Link>
            </div>

            {/* Right Column: Hero Graphic Placeholder */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
               <div className="absolute w-[120%] h-[120%] rounded-full bg-brand-orange-light/50 blur-3xl -z-10"></div>
               {/* Abstract composition mimicking the collage */}
               <div className="relative w-full h-full max-w-md bg-white rounded-full shadow-2xl overflow-hidden border-[8px] border-white z-10 flex flex-col justify-center items-center text-center p-8">
                  <div className="w-full h-1/2 bg-brand-orange-light/30 rounded-t-full flex items-end justify-center pb-4">
                    <Box className="w-16 h-16 text-brand-orange opacity-80" />
                  </div>
                  <div className="w-full h-1/2 bg-grey-light/50 flex flex-col items-center justify-start pt-6">
                     <span className="font-bold text-lg text-grey-dark">Premium</span>
                     <span className="font-medium text-sm text-grey-mid">Fulfillment & Events</span>
                  </div>
               </div>

               {/* Floating Badges */}
               <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
                  <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                  <div>
                    <div className="text-xs font-bold">Top Agency</div>
                  </div>
               </div>
               
               <div className="absolute bottom-10 right-0 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 z-20">
                  <div className="text-[10px] uppercase font-bold text-grey-mid">SLA Tracker</div>
                  <div className="text-lg font-bold text-brand-orange">99.8% Success</div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-grey-light border-y border-grey-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-10 text-grey-dark">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                 <Star key={star} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
              ))}
            </div>
            <span className="font-medium text-lg">4.8 stars - 100+ reviews</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 mb-16">
            {clients.map((client, i) => (
              <div key={i} className="text-xl font-bold font-mono text-grey-mid grayscale uppercase tracking-widest">
                {client.logo}
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-grey-dark mb-6">
            All-in-One <span className="text-brand-orange">Brand Engagement</span> Solution
          </h2>
          <p className="text-base md:text-lg text-grey-dark max-w-4xl mx-auto font-medium">
            Brands of all sizes use TRIAD to engage, educate, and reward their partners with premium corporate gifting programs, physical activations, and gamified BTL experiences.
          </p>
        </div>
      </section>

      {/* Services Section (Color Blocks) */}
      <section className="py-20 bg-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               
               {/* Orange Block */}
               <div className="bg-brand-orange rounded-[2rem] p-10 flex flex-col justify-between min-h-[360px] group cursor-pointer transition-transform hover:-translate-y-2">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">BTL Events and Activations</h3>
                  </div>
                  <div className="flex items-center mt-8">
                    <ArrowRight className="w-8 h-8 text-white/70 group-hover:text-white transition-colors group-hover:translate-x-2" />
                  </div>
               </div>

               {/* Yellow Block */}
               <div className="bg-[#EAB308] rounded-[2rem] p-10 flex flex-col justify-between min-h-[360px] group cursor-pointer transition-transform hover:-translate-y-2">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">Premium Corporate Gifting</h3>
                  </div>
                  <div className="flex items-center mt-8">
                    <ArrowRight className="w-8 h-8 text-white/70 group-hover:text-white transition-colors group-hover:translate-x-2" />
                  </div>
               </div>

               {/* Dark Slate Block */}
               <div className="bg-grey-dark rounded-[2rem] p-10 flex flex-col justify-between min-h-[360px] group cursor-pointer transition-transform hover:-translate-y-2 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4">Fulfillment and Logistics</h3>
                    <Link href="/connect" className="inline-block mt-4 bg-white text-grey-dark px-6 py-2 rounded-lg text-sm font-bold">
                       Learn More
                    </Link>
                  </div>
                  {/* Subtle background element mimicking the photo behind text */}
                  <div className="absolute right-0 bottom-0 opacity-10">
                     <Box className="w-64 h-64 text-white -mb-10 -mr-10" />
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Features & Stats Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
             <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-bold text-grey-dark">
                  What Makes TRIAD <br />
                  <span className="text-brand-orange">Great?</span>
                </h2>
             </div>
             
             <div className="lg:col-span-1">
                <div className="flex gap-4 items-start mb-6">
                   <div className="mt-1">
                      <Box className="w-8 h-8 text-brand-orange" />
                   </div>
                   <div>
                     <h4 className="text-brand-orange font-bold text-lg mb-4">Product</h4>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> 100% catalog customization
                        </li>
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Dedicated account support
                        </li>
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> API-driven fulfillment engine
                        </li>
                     </ul>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-1">
                <div className="flex gap-4 items-start mb-6">
                   <div className="mt-1">
                      <Globe className="w-8 h-8 text-brand-orange" />
                   </div>
                   <div>
                     <h4 className="text-brand-orange font-bold text-lg mb-4">Reach & Scale</h4>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Nationwide Execution
                        </li>
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> 450k+ Deliveries
                        </li>
                        <li className="flex items-center gap-2 text-grey-dark font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> 1,500+ Events Hosted
                        </li>
                     </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* Large Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left border-t border-grey-border pt-16">
             <div className="border-r border-grey-border/0 md:border-grey-border">
                <div className="text-5xl font-light text-grey-dark font-mono mb-2">100<span className="text-brand-orange">+</span></div>
                <div className="text-base font-bold text-grey-dark">Global Clients</div>
             </div>
             <div className="border-r border-grey-border/0 md:border-grey-border">
                <div className="text-5xl font-light text-grey-dark font-mono mb-2">450k<span className="text-brand-orange">+</span></div>
                <div className="text-base font-bold text-grey-dark">Gifts Dispatched</div>
             </div>
             <div className="border-r border-grey-border/0 md:border-grey-border">
                <div className="text-5xl font-light text-grey-dark font-mono mb-2">1.5k<span className="text-brand-orange">+</span></div>
                <div className="text-base font-bold text-grey-dark">Active Events</div>
             </div>
             <div>
                <div className="text-5xl font-light text-grey-dark font-mono mb-2">99<span className="text-brand-orange">%</span></div>
                <div className="text-base font-bold text-grey-dark">SLA Compliance</div>
             </div>
          </div>

        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section className="py-24 bg-grey-light/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-grey-dark mb-16">
            Bold Moves. <span className="text-brand-orange">Real Results</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div>
               <div className="bg-[#0A0A0A] rounded-2xl h-56 flex items-center justify-center mb-6 overflow-hidden relative">
                  {/* Brand Placeholder */}
                  <span className="text-5xl font-bold text-white opacity-80 tracking-tighter">TECHCORP</span>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl"></div>
               </div>
               <span className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">Technology & SaaS</span>
               <h3 className="text-2xl font-bold text-grey-dark border-b border-grey-border pb-4 mb-4">Enterprise Developer Conference</h3>
            </div>

            {/* Card 2 */}
            <div>
               <div className="bg-[#0A0A0A] rounded-2xl h-56 flex items-center justify-center mb-6 overflow-hidden relative">
                  {/* Brand Placeholder */}
                  <span className="text-5xl font-bold text-blue-500 opacity-90 tracking-tighter">FINANCE<span className="text-white">HUB</span></span>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-3xl"></div>
               </div>
               <span className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">Banking</span>
               <h3 className="text-2xl font-bold text-grey-dark border-b border-grey-border pb-4 mb-4">Q4 Executive Gifting Program</h3>
            </div>

            {/* Card 3 */}
            <div>
               <div className="bg-[#0A0A0A] rounded-2xl h-56 flex items-center justify-center mb-6 overflow-hidden relative">
                  {/* Brand Placeholder */}
                  <span className="text-5xl font-bold text-green-500 opacity-80 tracking-tighter italic">Motors</span>
                  <div className="absolute inset-0 w-full h-full bg-green-500/10 blur-xl"></div>
               </div>
               <span className="inline-block bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">Automotive</span>
               <h3 className="text-2xl font-bold text-grey-dark border-b border-grey-border pb-4 mb-4">Pan-India Dealership Launch</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="w-full flex flex-col md:flex-row">
         {/* Left Side (Yellow) */}
         <div className="w-full md:w-1/2 bg-[#EAB308] p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white max-w-sm text-center md:text-left">
               See how TRIAD can grow engagement & drive business outcomes
            </h2>
            <Link href="/connect" className="bg-grey-dark text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-black transition-colors">
               Get Started
            </Link>
         </div>

         {/* Right Side (Orange) */}
         <div className="w-full md:w-1/2 bg-brand-orange p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white max-w-sm text-center md:text-left">
               Help your clients effectively engage their channel & sales teams
            </h2>
            <Link href="/connect" className="bg-grey-dark text-white px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-black transition-colors">
               Become a Partner
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
}
