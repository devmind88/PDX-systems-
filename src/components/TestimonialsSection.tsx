import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Quote, 
  TrendingUp, 
  Building2,
  Award
} from 'lucide-react';
import { TESTIMONIALS, TRUST_METRICS } from '../data/testimonials';

interface TestimonialsSectionProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  return (
    <section id="results" className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" />
            Field-Proven Results
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Trusted by 450+ High-Growth{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Trade & Service Leaders
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            See how roofing, HVAC, plumbing, electrical, and local service businesses scaled their bottom line without hiring more office staff.
          </p>
        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#0b101f] border border-slate-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-emerald-500/40 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-emerald-400 mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white mb-2">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-[#0b101f] border-2 border-slate-800 hover:border-emerald-500/40 rounded-3xl p-7 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Customer
                  </span>
                </div>

                {/* Highlight Stat Pill */}
                <div className="bg-[#070a14] border border-slate-800 p-3 rounded-xl mb-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{testi.stats.label}</span>
                  <span className="text-xs font-black text-emerald-400 font-mono">{testi.stats.value}</span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {testi.name}
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium">
                    {testi.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {testi.company} • {testi.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Infrastructure SLA Banner */}
        <div className="bg-gradient-to-r from-[#0a1124] to-[#07101e] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1">
                Enterprise Reliability & High-Volume Telephony
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Carrier-grade A2P 10DLC compliance, 99.98% voice availability SLA, and encrypted customer data vaults.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenTrial('pro')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={onOpenDemo}
              className="px-4 py-3 rounded-xl bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Live Demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
