import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Clock,
  Layers,
  PhoneCall
} from 'lucide-react';
import { PRICING_PLANS, ADDONS } from '../data/plans';

interface PricingSectionProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#080d19] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4" />
            Transparent SaaS Tiers
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Predictable Pricing.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Limitless Growth.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8">
            Every plan includes our 14-day risk-free trial. No contracts, zero setup fees, and cancel anytime in one click.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0b101f] border border-slate-800 shadow-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-slate-800 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                billingCycle === 'annual' ? 'bg-slate-950 text-emerald-300' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative border-2 ${
                  isPopular
                    ? 'bg-[#0c1326] border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-105 z-10'
                    : 'bg-[#0a0f1d] border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                    Most Popular • Best Value
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 min-h-[36px] mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black font-display text-white">
                        ${price}
                      </span>
                      <span className="text-slate-400 text-xs font-semibold">
                        / month
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-1">
                      {billingCycle === 'annual' ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed monthly'}
                    </div>
                  </div>

                  {/* Core Capacity Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6 bg-[#070a14] p-3 rounded-xl border border-slate-800 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">Sub-Accounts</div>
                      <div className="text-xs font-bold text-slate-200 truncate">{plan.subAccountLimit}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">AI Voice Mins</div>
                      <div className="text-xs font-bold text-emerald-400 truncate">{plan.aiMinutes.split(' ')[0]}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Monthly SMS</div>
                      <div className="text-xs font-bold text-cyan-400 truncate">{plan.smsLimit.split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.limitations && plan.limitations.map((lim, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-500 line-through">
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <span>{lim}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onOpenTrial(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-xl shadow-emerald-500/30 hover:brightness-110'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                  </button>

                  <div className="text-center text-[10px] text-slate-400 mt-2.5 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>14-day free trial • Cancel anytime</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons & Optional Services */}
        <div className="bg-[#0b101f] border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Optional Expansion Add-Ons
              </h3>
              <p className="text-xs text-slate-400">
                Enhance your SaaS deployment with white-glove setup and extra telephony resources
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">
              Available at checkout or anytime inside your dashboard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="bg-[#070b14] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-white">
                      {addon.name}
                    </h4>
                    <span className="text-sm font-extrabold text-emerald-400 font-display">
                      ${addon.price}
                      <span className="text-[10px] text-slate-400 font-normal">
                        {addon.isOneTime ? ' one-time' : '/mo'}
                      </span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-4">
                    {addon.description}
                  </p>
                </div>
                <button
                  onClick={() => onOpenTrial('pro')}
                  className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                >
                  Add to Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise / Need Custom Help */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm text-slate-400 mb-3">
            Looking for a custom multi-brand enterprise deployment, custom franchise integrations, or high-volume call centers?
          </p>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 underline"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Speak with a PDX Solutions Architect →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
