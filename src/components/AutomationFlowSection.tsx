import React, { useState } from 'react';
import { 
  Zap, 
  PhoneCall, 
  MessageSquare, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  DollarSign, 
  ShieldCheck, 
  Flame,
  ChevronRight
} from 'lucide-react';

interface AutomationFlowSectionProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const AutomationFlowSection: React.FC<AutomationFlowSectionProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STEPS = [
    {
      num: '01',
      title: 'Capture Leads',
      sub: 'Zero Lead Leakage',
      badge: 'Step 1 • Inbound',
      desc: 'Whether a prospect calls your business line at 2 PM or 2 AM on a Sunday, PDX picks up in under 1 second. Web forms, Google Local Services, and social DMs are funneled immediately into one central queue.',
      stats: 'Capture Rate: 99.4%',
      features: [
        '24/7 AI Voice Receptionist pickup with zero wait time',
        'Direct tracking for Google Ads, Facebook Ads & Yelp',
        'Automatic phone number geocoding & caller ID matching'
      ],
      previewSnippet: 'Caller: "Need an emergency roof repair." -> Answered in 0.9s'
    },
    {
      num: '02',
      title: 'Automate Follow-Up',
      sub: 'Speed to Lead Wins Deals',
      badge: 'Step 2 • Nurture',
      desc: '78% of customers buy from the first company that responds. If you are on a ladder and miss a call, PDX texts them within 3 seconds: "Hey, saw we just missed your call! How can we help right now?".',
      stats: 'Text-Back Speed: 2.8s',
      features: [
        'Instant 3-second Missed-Call Auto-Text Back',
        'AI qualifying questions via SMS for job details & address',
        'Automated follow-up drip sequences if customer steps away'
      ],
      previewSnippet: 'Automated SMS sent: "Hey Marcus, saw we just missed you! How can we help?"'
    },
    {
      num: '03',
      title: 'Book Appointments',
      sub: 'Calendar Sync & Deposits',
      badge: 'Step 3 • Scheduling',
      desc: 'No more phone tag. PDX checks real-time technician routes, proposes convenient inspection windows, collects credit card deposits to prevent ghosting, and locks the job into your calendar.',
      stats: 'No-Show Reduction: 78%',
      features: [
        'Direct 2-way sync with Google, Apple, and Outlook calendars',
        'Optional credit card deposit pre-authorization before dispatch',
        'Automated 24-hour and 2-hour SMS reminder alerts'
      ],
      previewSnippet: 'Slot Confirmed: Thursday 10:00 AM • $75 Diagnostic Secured'
    },
    {
      num: '04',
      title: 'Close More Deals',
      sub: 'Pipeline & Review Boost',
      badge: 'Step 4 • Revenue & Reviews',
      desc: 'Track every quote in your drag-and-drop pipeline. Once the technician completes the job and collects payment, PDX triggers an automated SMS review request that rockets your Google rating.',
      stats: 'Google Reviews: +300%',
      features: [
        'Drag-and-drop sales pipeline with automatic deal stage updates',
        'Automated 5-Star Google & Yelp review request sequences',
        'Private dispute shield for unhappy customers before posting publicly'
      ],
      previewSnippet: 'Invoice #1042 Paid ($4,200) -> 5-Star Google Review Received ★★★★★'
    }
  ];

  return (
    <section id="flow" className="py-24 bg-[#080d19] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" />
            The Autonomous Revenue Engine
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            How PDX SYSTEMS Turns Inbound Calls into{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Paid Contracts
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            From the initial phone ring to the final 5-star Google review, our 4-stage automated pipeline works 24/7 so you can focus on delivering great service.
          </p>
        </div>

        {/* 4 Steps Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 transition-all border relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0f172a] border-emerald-400 shadow-xl shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-[#0a0f1d] border-slate-800 hover:border-slate-700 hover:bg-[#0c1224]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-2xl font-black font-display ${
                      isCurrent ? 'text-emerald-400' : 'text-slate-500'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isCurrent ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold mb-3">
                    {step.sub}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-cyan-400 font-bold">{step.stats}</span>
                  <span className={`font-semibold flex items-center gap-1 ${
                    isCurrent ? 'text-emerald-400' : 'text-slate-500'
                  }`}>
                    {isCurrent ? 'Viewing' : 'Details'} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel on Active Step */}
        <div className="bg-[#0b101f] border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <span>Stage {STEPS[activeStep].num} Deep Dive</span>
                <span>•</span>
                <span>{STEPS[activeStep].badge}</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {STEPS[activeStep].title}: {STEPS[activeStep].sub}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {STEPS[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2">
                {STEPS[activeStep].features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#060a14] border border-slate-800 rounded-2xl p-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                <span className="text-slate-400 font-mono">Live Automated Event Log</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Realtime
                </span>
              </div>

              <div className="bg-[#0c1222] p-4 rounded-xl border border-slate-800 text-xs text-slate-200 font-mono space-y-2">
                <div className="text-emerald-400 text-[11px] font-bold">
                  &gt; STAGE_{STEPS[activeStep].num}_TRIGGERED
                </div>
                <div className="text-slate-300">
                  {STEPS[activeStep].previewSnippet}
                </div>
                <div className="text-slate-400 text-[10px] pt-1">
                  Latency: 0.08s | Status: 200 OK | CRM Updated
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between">
                <button
                  onClick={() => onOpenTrial('pro')}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Activate This Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenDemo}
                  className="text-xs text-slate-400 hover:text-white font-medium"
                >
                  Schedule Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
