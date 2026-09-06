import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  BarChart3, 
  MessageSquare, 
  Star, 
  Calendar, 
  Zap, 
  Lock, 
  Plus,
  Globe
} from 'lucide-react';
import { SAAS_PRODUCTS } from '../data/products';
import { SaasProduct } from '../types';

interface ProductLineSectionProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const ProductLineSection: React.FC<ProductLineSectionProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(SAAS_PRODUCTS[0].id);
  const activeProduct = SAAS_PRODUCTS.find(p => p.id === selectedProductId) || SAAS_PRODUCTS[0];

  return (
    <section id="products" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" />
            Integrated SaaS Product Line
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Purpose-Built SaaS Software{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Engineered for Scale
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Deploy individual tools or power your entire trade enterprise with our unified automation suite. 
            All software is available stand-alone or bundled in our value-packed SaaS plans.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SAAS_PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProductId(prod.id)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-800/80 border-slate-800'
                }`}
              >
                {prod.id === 'pdx-custom-web' && <Globe className="w-4 h-4" />}
                {prod.id === 'pdx-ai-voice' && <PhoneCall className="w-4 h-4" />}
                {prod.id === 'pdx-crm-pipeline' && <BarChart3 className="w-4 h-4" />}
                {prod.id === 'pdx-omnichannel-hub' && <MessageSquare className="w-4 h-4" />}
                {prod.id === 'pdx-review-booster' && <Star className="w-4 h-4" />}
                {prod.id === 'pdx-dispatch-hub' && <Calendar className="w-4 h-4" />}
                <span>{prod.name.replace('™', '')}</span>
                {prod.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold hidden md:inline ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {prod.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Showcase Card */}
        <div className="bg-[#0b101e] border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Product Information & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-500/40">
                    {activeProduct.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    SKU: {activeProduct.id}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-3">
                  {activeProduct.name}
                </h3>

                <p className="text-emerald-300 font-semibold text-base mb-4">
                  {activeProduct.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Key Conversion Metrics */}
              <div className="grid grid-cols-3 gap-3 bg-[#070b14] p-3.5 rounded-2xl border border-slate-800">
                {activeProduct.keyMetrics.map((km, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-display font-black text-lg sm:text-xl text-emerald-400">
                      {km.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                      {km.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Core Architectural Capabilities:
                </div>
                {activeProduct.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Price & Action CTA */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Integrated SaaS Pricing</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      ${activeProduct.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / month (or included in Pro Bundle)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onOpenTrial('pro')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start 14-Day Free Trial</span>
                  </button>

                  <button
                    onClick={onOpenDemo}
                    className="px-4 py-3 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right: High-Quality Imagery & Live Interactive Software Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-[#060911] group">
                
                {/* High Resolution Context Imagery */}
                <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/40 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-lg text-xs font-bold text-emerald-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Real-World Field Tested</span>
                  </div>
                </div>

                {/* Software UI Layer on Bottom */}
                <div className="p-5 bg-[#0a0f1d] border-t border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>{activeProduct.interfacePreview.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          Active
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {activeProduct.interfacePreview.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      v2.4 Production
                    </span>
                  </div>

                  {/* Capability Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                    {activeProduct.capabilities.slice(0, 4).map((cap, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        ✓ {cap}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
