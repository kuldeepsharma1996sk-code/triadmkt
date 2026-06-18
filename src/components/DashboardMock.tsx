"use client";

import { useState } from "react";
import { 
  Terminal, 
  RefreshCw, 
  Layers, 
  Send, 
  Check, 
  Play, 
  ShieldAlert, 
  Cpu, 
  Database,
  ArrowRight,
  TrendingUp,
  Sliders
} from "lucide-react";

export default function DashboardMock() {
  const [activeTab, setActiveTab] = useState<"admin" | "dispatch" | "api">("admin");
  
  // Dynamic State for Inventory Stock Levels (units)
  const [schemes, setSchemes] = useState([
    { id: "STK-2026-A1", partner: "Horizon Retail Systems", points: 450000, status: "Active", progress: 78 },
    { id: "STK-2026-B3", partner: "Vanguard Tech Distributors", points: 800000, status: "Active", progress: 54 },
    { id: "STK-2026-C5", partner: "Apex Commercial Corp", points: 250000, status: "Paused", progress: 95 },
  ]);

  // Dynamic State for Dispatches (SLA queue)
  const [dispatches, setDispatches] = useState([
    { id: "DSP-84092", partner: "Horizon Retail", item: "Premium Tech Kit v2", qty: 150, status: "Delivered", tat: "3.2 hours" },
    { id: "DSP-84093", partner: "Vanguard Tech", item: "Executive Travel Set", qty: 320, status: "Dispatched", tat: "2.1 hours" },
    { id: "DSP-84094", partner: "Apex Commercial", item: "Minimalist Leather Folio", qty: 85, status: "Pending Verification", tat: "0.5 hours" },
  ]);

  // Inventory Restock animation trigger
  const [allocationMessage, setAllocationMessage] = useState("");
  
  // Gatekeeper bypass animation trigger
  const [bypassStep, setBypassStep] = useState<"idle" | "verifying" | "stock_check" | "authorized">("idle");

  // API Console interactive trigger
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [isApiLoading, setIsApiLoading] = useState(false);

  // Trigger stock restock
  const handleAllocatePoints = (schemeId: string) => {
    setSchemes(prev => prev.map(s => {
      if (s.id === schemeId) {
        const added = 50000;
        setAllocationMessage(`Restocked +50,000 units for ${s.partner}!`);
        setTimeout(() => setAllocationMessage(""), 3000);
        return {
          ...s,
          points: s.points + added,
          progress: Math.min(s.progress + 5, 100)
        };
      }
      return s;
    }));
  };

  // Trigger dispatch gate verification
  const handleBypassGate = () => {
    if (bypassStep !== "idle") return;
    
    setBypassStep("verifying");
    
    setTimeout(() => {
      setBypassStep("stock_check");
      
      setTimeout(() => {
        setBypassStep("authorized");
        
        // Update dispatch item status in state
        setDispatches(prev => prev.map(d => {
          if (d.id === "DSP-84094") {
            return { ...d, status: "Verified & Dispatched", tat: "0.6 hours" };
          }
          return d;
        }));

        setTimeout(() => {
          setBypassStep("idle");
        }, 3000);

      }, 1200);
    }, 1000);
  };

  // Trigger Curl API Test
  const handleSendApiRequest = () => {
    setIsApiLoading(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiResponse(JSON.stringify({
        status: "success",
        timestamp: new Date().toISOString(),
        payload: {
          dispatch_id: "DSP-84095",
          reference_no: "REF-9801831-B",
          sku_validated: "SL-TECH-V2",
          qty: 25,
          recipient_notified: true,
          tracking_hash: "0xef2c80126ba33b8",
          turnaround_sla_secs: 14400
        }
      }, null, 2));
      setIsApiLoading(false);
    }, 800);
  };

  return (
    <div className="relative border border-slate-850 bg-slate-950 rounded-2xl p-6 md:p-8 font-mono text-xs text-slate-300 w-full shadow-2xl overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Dashboard Top Navigation bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
              Live Connection // SECURE SSL SHA-256 LOGISTICS FEED
            </span>
          </div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Cpu className="h-4 w-4 text-brand-orange" />
            TRIAD LOGISTICS <span className="font-light text-slate-500">// FULFILLMENT ENGINE v4.5</span>
          </h4>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("admin")}
            className={`border rounded px-3.5 py-2 transition-all uppercase tracking-wider text-[10px] font-semibold ${
              activeTab === "admin"
                ? "bg-brand-orange border-brand-orange text-white"
                : "border-slate-850 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            Inventory Ledger
          </button>
          <button
            onClick={() => setActiveTab("dispatch")}
            className={`border rounded px-3.5 py-2 transition-all uppercase tracking-wider text-[10px] font-semibold ${
              activeTab === "dispatch"
                ? "bg-brand-orange border-brand-orange text-white"
                : "border-slate-850 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            Fulfillment Board
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`border rounded px-3.5 py-2 transition-all uppercase tracking-wider text-[10px] font-semibold ${
              activeTab === "api"
                ? "bg-brand-orange border-brand-orange text-white"
                : "border-slate-850 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            API Dev Portal
          </button>
        </div>
      </div>

      {/* Point Allocation Alert Message banner */}
      {allocationMessage && (
        <div className="mb-6 rounded-lg bg-brand-orange/10 border border-brand-orange/30 p-4 text-brand-orange animate-in fade-in slide-in-from-top-2 duration-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>{allocationMessage}</span>
          </div>
          <span className="text-[10px] text-slate-400">INVENTORY SYNC OK</span>
        </div>
      )}

      {/* Tab 1: Loyalty Ledger overview */}
      {activeTab === "admin" && (
        <div className="space-y-8 relative z-10 animate-in fade-in duration-300">
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-slate-900 p-4 bg-slate-900/60 rounded-xl">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Active Stock Hubs</span>
              <span className="text-xl font-bold tracking-tight block text-white font-sans">08 Warehouses</span>
              <span className="text-[9px] text-green-500 font-bold mt-1 block">Live & Synced</span>
            </div>
            <div className="border border-slate-900 p-4 bg-slate-900/60 rounded-xl">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Total Units Dispatched</span>
              <span className="text-xl font-bold tracking-tight block text-white font-sans">1,500,000 units</span>
              <span className="text-[9px] text-brand-orange mt-1 block">85% Dispatch Ratio</span>
            </div>
            <div className="border border-slate-900 p-4 bg-slate-900/60 rounded-xl">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Average Delivery TAT</span>
              <span className="text-xl font-bold tracking-tight block text-white font-sans">3.4 Hours</span>
              <span className="text-[9px] text-green-500 font-bold mt-1 block">SLA Level: 99.8%</span>
            </div>
            <div className="border border-slate-900 p-4 bg-slate-900/60 rounded-xl">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Fulfillment Volume</span>
              <span className="text-xl font-bold tracking-tight block text-white font-sans">18,450 Units</span>
              <span className="text-[9px] text-slate-400 mt-1 block">100% Doorstep Audited</span>
            </div>
          </div>

          {/* Table display */}
          <div className="border border-slate-850 rounded-xl overflow-hidden bg-slate-900/40">
            <div className="p-4 border-b border-slate-850 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-white font-bold">Inventory Stock Overview</span>
              <span className="text-[9px] text-slate-500">Click actions to simulate restocking</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900/80 border-b border-slate-850 text-[10px] uppercase text-slate-400">
                    <th className="p-4 font-semibold">Inventory ID</th>
                    <th className="p-4 font-semibold">Channel Partner</th>
                    <th className="p-4 font-semibold">Stock Units</th>
                    <th className="p-4 font-semibold">Warehouse Capacity</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-slate-300">
                  {schemes.map((scheme) => (
                    <tr key={scheme.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-semibold text-white">{scheme.id}</td>
                      <td className="p-4 font-light text-slate-500">{scheme.partner}</td>
                      <td className="p-4 font-bold text-brand-orange">{scheme.points.toLocaleString()} units</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 bg-slate-800 w-24 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-orange" style={{ width: `${scheme.progress}%` }}></div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">{scheme.progress}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleAllocatePoints(scheme.id)}
                          className="rounded border border-brand-orange/45 text-brand-orange hover:bg-brand-orange hover:text-white px-2.5 py-1 text-[9px] uppercase font-bold transition-all cursor-pointer"
                        >
                          Restock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Dispatcher queue board */}
      {activeTab === "dispatch" && (
        <div className="space-y-8 relative z-10 animate-in fade-in duration-300">
          
          <div className="border border-slate-850 rounded-xl overflow-hidden bg-slate-900/40">
            <div className="p-4 border-b border-slate-850 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-white font-bold">Fulfillment SLA Monitoring Queue</span>
              <span className="text-[9px] text-amber-500 font-bold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                1 Dispatch Locked / Requires Verification
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900/80 border-b border-slate-850 text-[10px] uppercase text-slate-400">
                    <th className="p-4 font-semibold">Dispatch ID</th>
                    <th className="p-4 font-semibold">Partner</th>
                    <th className="p-4 font-semibold">SKU item</th>
                    <th className="p-4 font-semibold">Volume</th>
                    <th className="p-4 font-semibold">SLA Status</th>
                    <th className="p-4 font-semibold">Turnaround Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-slate-300">
                  {dispatches.map((disp) => (
                    <tr key={disp.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-semibold text-white">{disp.id}</td>
                      <td className="p-4 font-light text-slate-500">{disp.partner}</td>
                      <td className="p-4 text-slate-200">{disp.item}</td>
                      <td className="p-4 font-semibold text-white">{disp.qty} units</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex px-2 py-0.5 rounded text-[9px] uppercase font-bold border ${
                            disp.status === "Delivered"
                              ? "border-green-800/40 text-green-500 bg-green-950/20"
                              : disp.status === "Dispatched"
                              ? "border-blue-800/40 text-blue-500 bg-blue-950/20"
                              : disp.status === "Pending Verification"
                              ? "border-amber-800/40 text-amber-500 bg-amber-950/20 animate-pulse"
                              : "border-brand-orange/40 text-brand-orange bg-brand-orange/10"
                          }`}
                        >
                          {disp.status}
                        </span>
                      </td>
                      <td className="p-4 font-light text-slate-400">{disp.tat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Bypass Gate control */}
          <div className="border border-slate-850 rounded-xl bg-slate-900/60 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex gap-4">
              <div className="h-10 w-10 shrink-0 bg-slate-950 border border-slate-850 rounded-lg flex items-center justify-center text-brand-orange">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-white uppercase block mb-1">
                  Secure Gatekeeper Bypass Trigger
                </span>
                <p className="text-[10px] font-light text-slate-500 max-w-xl leading-relaxed">
                  Bypass the allocation authentication threshold for <span className="font-semibold text-white">DSP-84094</span>. This simulates an API verification webhook handshake validating inventory levels against client contracts.
                </p>
              </div>
            </div>

            <button
              onClick={handleBypassGate}
              disabled={bypassStep !== "idle" && bypassStep !== "authorized"}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded border border-brand-orange bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 text-[10px] uppercase font-bold transition-all disabled:opacity-50 shrink-0 shadow-md shadow-brand-orange-glow cursor-pointer"
            >
              {bypassStep === "idle" && (
                <>
                  <Play className="h-3 w-3" />
                  <span>Verify Dispatch Gate</span>
                </>
              )}
              {bypassStep === "verifying" && (
                <>
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  <span>Validating API Keys...</span>
                </>
              )}
              {bypassStep === "stock_check" && (
                <>
                  <Database className="h-3 w-3 animate-pulse" />
                  <span>Checking Stock Allocation...</span>
                </>
              )}
              {bypassStep === "authorized" && (
                <>
                  <Check className="h-3 w-3" />
                  <span>Fulfillment Approved!</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: API Integration Curl Console */}
      {activeTab === "api" && (
        <div className="space-y-6 relative z-10 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* API Endpoint Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border border-slate-850 bg-slate-950 rounded-xl p-5">
                <span className="text-[10px] font-bold text-white uppercase block mb-3 border-b border-slate-800 pb-2">
                  API Endpoint Documentation
                </span>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-slate-550 uppercase block mb-1">POST REQUEST URI</span>
                    <div className="bg-slate-900 border border-slate-850 p-2.5 rounded text-white font-mono flex items-center justify-between">
                      <span>https://api.triadmkt.com/v1/fulfillment/dispatch</span>
                      <span className="text-[9px] uppercase font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">POST</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-550 uppercase block mb-1">API Authentication header</span>
                    <div className="bg-slate-900 border border-slate-850 p-2.5 rounded text-slate-400 font-mono">
                      Authorization: Bearer triad_live_auth_token_88x2c9
                    </div>
                  </div>
                </div>
              </div>

              {/* JSON code snippet */}
              <div className="border border-slate-850 bg-slate-950 rounded-xl p-5">
                <span className="text-[10px] font-bold text-white uppercase block mb-3">Payload Request Schema (JSON)</span>
                <pre className="bg-slate-900 border border-slate-850 p-4 rounded text-slate-400 font-mono text-[10px] overflow-x-auto">
{`{
  "client_id": "CLI-8092-A",
  "partner_id": "PRT-HORIZON-3",
  "sku_code": "SL-TECH-V2",
  "qty": 25,
  "recipient": {
    "name": "Jane Doe",
    "delivery_address": "MG Road, Block 4, Bengaluru, IN",
    "contact": "+91 98765 43210"
  }
}`}
                </pre>
              </div>
            </div>

            {/* Simulated Live Console */}
            <div className="lg:col-span-5 flex flex-col justify-between border border-slate-850 bg-slate-900/40 rounded-xl p-5">
              <div>
                <span className="text-[10px] font-bold text-white uppercase block mb-2 flex items-center gap-1.5">
                  <Terminal className="h-4 w-4 text-brand-orange" />
                  Interactive API Console
                </span>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-4">
                  Trigger a live API payload request to the dispatch system. Verify integration callback logs.
                </p>
                
                {apiResponse ? (
                  <pre className="bg-slate-950 border border-slate-800 p-4 rounded text-green-400 font-mono text-[10px] overflow-y-auto max-h-56 animate-in zoom-in-95 duration-200">
                    {apiResponse}
                  </pre>
                ) : (
                  <div className="h-40 border border-dashed border-slate-800 rounded-lg flex items-center justify-center text-slate-600 text-[10px]">
                    {isApiLoading ? (
                      <div className="flex flex-col items-center gap-2">
                        <RefreshCw className="h-5 w-5 animate-spin text-brand-orange" />
                        <span>Sending secure payload request...</span>
                      </div>
                    ) : (
                      <span>Waiting for API payload transmission...</span>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end gap-2">
                {apiResponse && (
                  <button
                    onClick={() => setApiResponse(null)}
                    className="border border-slate-850 hover:bg-slate-800 text-slate-400 px-4 py-2 text-[10px] font-bold uppercase rounded transition-all cursor-pointer"
                  >
                    Clear Log
                  </button>
                )}
                <button
                  onClick={handleSendApiRequest}
                  disabled={isApiLoading}
                  className="inline-flex items-center gap-2 rounded border border-brand-orange bg-brand-orange hover:bg-brand-orange-hover text-white px-4 py-2 text-[10px] font-bold uppercase transition-all shadow-md shadow-brand-orange-glow disabled:opacity-50 cursor-pointer"
                >
                  <Send className="h-3 w-3" />
                  <span>Send Request</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
