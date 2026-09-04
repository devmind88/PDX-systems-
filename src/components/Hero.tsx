import React, { useState } from 'react';
import { 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2,
  PhoneForwarded,
  Zap,
  Flame
} from 'lucide-react';

interface HeroProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTrial,
  onOpenDemo,
  onScrollToSimulator
}) => {
  const [activeTab, setActiveTab] = useState<'phone' | 'pipeline' | 'sms'>('phone');
  const [callActive, setCallActive] = useState(true);
  const [callSeconds, setCallSeconds] = useState(24);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-cyber-grid">
      {/* Glow ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gradient pointer-events-none blur-3xl opacity-70" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent font-bold">
              NEW RELEASE
            </span>
            <span className="text-slate-400">•</span>
            <span>PDX VoiceAI Receptionist 2.0 with Instant Call Booking</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Main Headline & Value Prop */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
            NEVER MISS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              ANOTHER LEAD.
            </span>
          </h1>

          <p className="font-display text-xl sm:text-2xl text-emerald-400/90 font-bold uppercase tracking-wider mb-4">
            WE AUTOMATE. YOU GROW.
          </p>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            The all-in-one AI Receptionist & automated CRM platform built for high-growth businesses. 
            Answers incoming calls 24/7 in 1 second, books appointments directly into your calendar, 
            and rescues missed leads with instant 3-second text-back.
          </p>

          {/* Key Metric Highlights from Image 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-[#0b101d]/80 border border-emerald-500/20 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-display">2X–5X</div>
              <div className="text-xs text-slate-400 font-medium">More Leads Captured</div>
            </div>
            <div className="bg-[#0b101d]/80 border border-emerald-500/20 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-display">60%+</div>
              <div className="text-xs text-slate-400 font-medium">More Bookings</div>
            </div>
            <div className="bg-[#0b101d]/80 border border-emerald-500/20 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-display">25%–40%</div>
              <div className="text-xs text-slate-400 font-medium">Revenue Boost</div>
            </div>
            <div className="bg-[#0b101d]/80 border border-emerald-500/20 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-display">&lt; 1.2s</div>
              <div className="text-xs text-slate-400 font-medium">Instant AI Pickup</div>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrial('pro')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-slate-950 font-extrabold text-base tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0f172a]/90 hover:bg-slate-800 text-slate-100 font-bold text-base border border-slate-700/80 hover:border-emerald-500/50 shadow-lg shadow-black/40 transition-all flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-5 h-5 text-emerald-400" />
              <span>Book Your Free Demo</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              14-Day Free Trial
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Setup In 5 Minutes
            </span>
          </div>
        </div>

        {/* Triple Feature Showcase (Accurately representing the 3 panels from Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-8">
          
          {/* Panel 1: AI Receptionist Phone & Live Chat (Image 1 Left Panel) */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-emerald-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/60 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  AI Receptionist
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live 24/7 Agent
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Never Miss Another Lead
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Answers calls, fields emergency requests, quotes estimates, and schedules jobs around the clock.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-[#11192e] p-2 rounded-lg border border-slate-800">
                  <PhoneCall className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-300 font-semibold">Answers 24/7</div>
                </div>
                <div className="bg-[#11192e] p-2 rounded-lg border border-slate-800">
                  <MessageSquare className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-300 font-semibold">Instant Text Reply</div>
                </div>
                <div className="bg-[#11192e] p-2 rounded-lg border border-slate-800">
                  <Calendar className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-300 font-semibold">Books Appts</div>
                </div>
              </div>
            </div>

            {/* Interactive Phone Simulation Shell */}
            <div className="bg-[#060911] border-2 border-slate-800 rounded-2xl p-3 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
                <span className="font-bold text-white">PDX SYSTEMS AI</span>
                <div className="flex items-center gap-1">
                  <span className="text-emerald-400 font-mono">0:24</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              {/* Live transcript simulation matching image 1 */}
              <div className="space-y-2 text-xs">
                <div className="bg-[#0f172a] text-slate-200 p-2 rounded-xl rounded-tl-none border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">PDX VoiceAI:</span>
                  Hi! Thanks for calling PDX Systems. How can I help you today?
                </div>

                <div className="bg-emerald-950/70 text-emerald-200 p-2 rounded-xl rounded-tr-none border border-emerald-500/30 ml-auto max-w-[85%]">
                  <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">Caller (Marcus):</span>
                  I need a roof inspection.
                </div>

                <div className="bg-[#0f172a] text-slate-200 p-2 rounded-xl rounded-tl-none border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">PDX VoiceAI:</span>
                  No problem! What's your address?
                </div>

                <div className="bg-emerald-950/70 text-emerald-200 p-2 rounded-xl rounded-tr-none border border-emerald-500/30 ml-auto max-w-[85%]">
                  <span className="text-[10px] font-bold text-emerald-400 block mb-0.5">Caller:</span>
                  1422 NW Kearney St
                </div>

                <div className="bg-emerald-500/15 text-emerald-300 p-2 rounded-xl border border-emerald-500/40 text-[11px] font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Booked for tomorrow at 10:00 AM! Confirmation SMS sent.</span>
                </div>
              </div>

              {/* Simulated Audio Waveform */}
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="w-1 bg-emerald-400 rounded-full animate-wave-1" />
                  <div className="w-1 bg-emerald-400 rounded-full animate-wave-2" />
                  <div className="w-1 bg-cyan-400 rounded-full animate-wave-3" />
                  <div className="w-1 bg-emerald-400 rounded-full animate-wave-4" />
                  <div className="w-1 bg-cyan-400 rounded-full animate-wave-5" />
                  <span className="text-[10px] text-slate-400 font-mono ml-2">99.4% Latency: 0.9s</span>
                </div>
                <button
                  onClick={onScrollToSimulator}
                  className="text-[10px] font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  Test Voice Live →
                </button>
              </div>
            </div>
          </div>

          {/* Panel 2: All-In-One CRM & Automation Platform (Image 1 Middle Panel) */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-cyan-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/60 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  CRM & Automation Engine
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +20% Growth
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                We Automate. You Grow.
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Real-time visibility over every deal, quote, and technician schedule in one intelligent workspace.
              </p>

              {/* Exact Stats Bar from Image 1 */}
              <div className="grid grid-cols-4 gap-1.5 mb-5 bg-[#070b14] p-2.5 rounded-xl border border-slate-800">
                <div className="text-center">
                  <div className="text-base font-extrabold text-white font-display">132</div>
                  <div className="text-[9px] text-emerald-400 font-semibold">+20%</div>
                  <div className="text-[9px] text-slate-400 uppercase">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-extrabold text-white font-display">47</div>
                  <div className="text-[9px] text-emerald-400 font-semibold">+20%</div>
                  <div className="text-[9px] text-slate-400 uppercase">Appts</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-extrabold text-white font-display">25</div>
                  <div className="text-[9px] text-emerald-400 font-semibold">+20%</div>
                  <div className="text-[9px] text-slate-400 uppercase">Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-extrabold text-emerald-400 font-display">$92.3k</div>
                  <div className="text-[9px] text-emerald-400 font-semibold">+20%</div>
                  <div className="text-[9px] text-slate-400 uppercase">Revenue</div>
                </div>
              </div>
            </div>

            {/* 4-Step Pipeline Flow matching the center image */}
            <div>
              <div className="text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                Live Revenue Engine Flow
              </div>

              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div className="bg-[#0f172a] border border-cyan-500/40 rounded-lg p-2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold mb-1">
                    1
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">Capture</span>
                  <span className="text-[8px] text-slate-400">Leads</span>
                </div>

                <div className="bg-[#0f172a] border border-emerald-500/40 rounded-lg p-2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mb-1">
                    2
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">Automate</span>
                  <span className="text-[8px] text-slate-400">Follow-Up</span>
                </div>

                <div className="bg-[#0f172a] border border-cyan-500/40 rounded-lg p-2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold mb-1">
                    3
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">Books</span>
                  <span className="text-[8px] text-slate-400">Appts</span>
                </div>

                <div className="bg-[#0f172a] border border-emerald-500/40 rounded-lg p-2 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mb-1">
                    4
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">Close</span>
                  <span className="text-[8px] text-slate-400">More Deals</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Integrated SaaS Pipeline</span>
                <span className="font-bold text-cyan-400">Automations Active ✓</span>
              </div>
            </div>
          </div>

          {/* Panel 3: Proven Results for Growing Businesses (Image 1 Right Panel) */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-emerald-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-500/60 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  Proven Contractor Results
                </span>
                <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                  ★★★★★ 4.9/5
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                More Leads. More Jobs. More Profits.
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Field-tested by roofers, plumbers, electricians, and local contractors across the country.
              </p>

              {/* Visual Showcase: Home Service Image & Badges */}
              <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-800 h-28">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern suburban home contracting service"
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px]">
                  <span className="bg-emerald-950/90 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    High-Value Lead Captured
                  </span>
                  <span className="text-white font-mono font-bold">$12,500 Value</span>
                </div>
              </div>

              {/* Exact Checklist from Image 1 */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-300 mb-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">AI Receptionist</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Missed Call Texts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">CRM & Pipeline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Review Marketing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Reputation Mgmt</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Email & SMS Hub</span>
                </div>
              </div>
            </div>

            {/* Bottom Demo Action */}
            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Your Free Demo Today!</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
