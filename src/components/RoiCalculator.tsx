import React, { useState } from 'react';
import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Calculator,
  ShieldCheck
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [monthlyCalls, setMonthlyCalls] = useState<number>(85);
  const [missedRate, setMissedRate] = useState<number>(30); // 30% missed calls
  const [avgJobValue, setAvgJobValue] = useState<number>(1800); // $1,800 avg job

  // Dynamic calculations
  const missedCallsCount = Math.round(monthlyCalls * (missedRate / 100));
  // PDX captures 95% of missed calls via instant AI answering & 3-sec text back
  const capturedLeads = Math.round(missedCallsCount * 0.95);
  // 60%+ appointments booked
  const extraAppointments = Math.round(capturedLeads * 0.62);
  // Conservative close rate on contractor jobs ~40%
  const closedDeals = Math.max(1, Math.round(extraAppointments * 0.42));
  // Extra monthly revenue
  const extraMonthlyRevenue = closedDeals * avgJobValue;
  // Extra annual revenue
  const extraAnnualRevenue = extraMonthlyRevenue * 12;
  // ROI based on $297 Pro plan
  const proCost = 297;
  const roiMultiplier = Math.round(extraMonthlyRevenue / proCost);

  return (
    <section id="calculator" className="py-24 bg-[#070a13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            Interactive ROI & Revenue Growth Calculator
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Calculate Your Untapped{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Revenue Leakage
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            See how many high-ticket jobs you lose to competitors when calls go to voicemail, and how much new revenue PDX recovers in your first 30 days.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#0b101f] border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Monthly Calls */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Monthly Inbound Calls & Inquiries
                  </label>
                  <span className="font-display font-black text-emerald-400 text-lg bg-[#070b14] px-3 py-1 rounded-lg border border-slate-800">
                    {monthlyCalls} calls / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="400"
                  step="5"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>20 calls</span>
                  <span>400 calls</span>
                </div>
              </div>

              {/* Slider 2: Missed Call Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Current Estimated Missed Call Rate
                  </label>
                  <span className="font-display font-black text-cyan-400 text-lg bg-[#070b14] px-3 py-1 rounded-lg border border-slate-800">
                    {missedRate}% missed
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={missedRate}
                  onChange={(e) => setMissedRate(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>10% (Low)</span>
                  <span>32% (Trade Avg)</span>
                  <span>60% (High)</span>
                </div>
              </div>

              {/* Slider 3: Average Job Value */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    Average Value per Closed Job / Customer
                  </label>
                  <span className="font-display font-black text-emerald-400 text-lg bg-[#070b14] px-3 py-1 rounded-lg border border-slate-800">
                    ${avgJobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>$300 (Plumbing repair)</span>
                  <span>$2,500 (HVAC replacement)</span>
                  <span>$10,000+ (Roofing / Solar)</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400">
                <span className="text-emerald-400 font-bold">Calculation Standard:</span> Based on real aggregated metrics from 450+ PDX contractors: sub-1.2s answer rate, 62% appointment booking rate, and 42% closing rate.
              </div>
            </div>

            {/* Right: Projected Revenue Gains Display */}
            <div className="lg:col-span-6 bg-[#060a14] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Projected Revenue Expansion
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Estimated Net Lift with PDX
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {roiMultiplier}x ROI Multiplier
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0b101f] p-4 rounded-2xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Missed Leads Rescued</div>
                  <div className="font-display font-black text-2xl text-white">
                    +{capturedLeads} <span className="text-xs text-emerald-400 font-normal">/ month</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Via 24/7 Voice & 3s Text-Back</div>
                </div>

                <div className="bg-[#0b101f] p-4 rounded-2xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">New Closed Deals</div>
                  <div className="font-display font-black text-2xl text-cyan-400">
                    +{closedDeals} <span className="text-xs text-slate-300 font-normal">deals</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Direct from rescued calls</div>
                </div>
              </div>

              {/* Big Revenue Number */}
              <div className="bg-gradient-to-br from-emerald-950/60 to-cyan-950/40 border border-emerald-500/50 rounded-2xl p-5 mb-6 text-center">
                <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
                  Additional Monthly Revenue Generated
                </div>
                <div className="font-display font-black text-3xl sm:text-5xl text-emerald-400 mb-1">
                  +${extraMonthlyRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Annualized Growth: <span className="text-white font-bold">+${extraAnnualRevenue.toLocaleString()} / year</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenTrial('pro')}
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Capture This Revenue (Free Trial)</span>
                </button>

                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-colors"
                >
                  Get Custom Audit
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
