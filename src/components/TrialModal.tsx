import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Building, 
  User, 
  Mail, 
  Phone, 
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS, ADDONS } from '../data/plans';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanId?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  defaultPlanId = 'pro'
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(defaultPlanId);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form inputs
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    email: '',
    phone: '',
    industry: 'Roofing & Contracting',
    projectScope: 'Custom Website Development'
  });

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[1];
  const planPrice = billingCycle === 'annual' ? currentPlan.priceAnnual : currentPlan.priceMonthly;

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0b101f] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                14-Day Free Trial • Instant Deployment
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                Launch Your PDX SYSTEMS Workspace
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Zero upfront charge. Test your custom 24/7 AI Receptionist and automated pipeline risk-free.
              </p>
            </div>

            {/* Plan Selector Pills */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {PRICING_PLANS.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
                return (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-400 shadow-lg shadow-emerald-500/10'
                        : 'bg-[#070b14] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{plan.name}</span>
                      {plan.isPopular && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950">
                          PRO
                        </span>
                      )}
                    </div>
                    <div className="font-display font-black text-sm text-emerald-400">
                      ${price}<span className="text-[10px] text-slate-400 font-normal">/mo</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-between bg-[#070b14] p-2.5 rounded-xl border border-slate-800 mb-5 text-xs">
              <span className="text-slate-300 font-medium">Billing Period:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-lg font-semibold ${
                    billingCycle === 'monthly' ? 'bg-slate-800 text-white' : 'text-slate-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 ${
                    billingCycle === 'annual' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Annual (20% Off)
                </button>
              </div>
            </div>

            {/* Trial Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Company / Trade Business Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Roofing Pros"
                      className="w-full bg-[#070a14] border border-slate-700 focus:border-emerald-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Mike Roberts"
                      className="w-full bg-[#070a14] border border-slate-700 focus:border-emerald-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="mike@apexroofing.com"
                      className="w-full bg-[#070a14] border border-slate-700 focus:border-emerald-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Phone Number (For AI Test Call)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(503) 555-0199"
                      className="w-full bg-[#070a14] border border-slate-700 focus:border-emerald-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Project Scope / Inquiry
                </label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-[#070a14] border border-slate-700 focus:border-emerald-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  <option value="Custom Website Development">Custom Website Development</option>
                  <option value="Website + 24/7 AI Chatbot Add-On">Website + 24/7 AI Chatbot Add-On</option>
                  <option value="Add AI Chatbot to Existing Website">Add AI Chatbot to Existing Website</option>
                  <option value="All-In-One CRM & AI Voice Receptionist">All-In-One CRM & AI Voice Receptionist</option>
                  <option value="Trade / Contractor Automation Pipeline">Trade / Contractor Automation Pipeline</option>
                </select>
              </div>

              {/* Addons Selection */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Recommended Add-Ons:
                </div>
                <div className="space-y-1.5">
                  {ADDONS.slice(0, 3).map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`cursor-pointer p-2 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                          isChecked
                            ? 'bg-emerald-500/10 border-emerald-500/40'
                            : 'bg-[#070b14] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="font-semibold text-slate-200">{addon.name}</span>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold">
                          +${addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Summary & Submit Button */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-slate-400">Total Due Today (14-Day Trial):</span>
                  <span className="text-emerald-400 font-mono font-bold text-base">$0.00</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/30 hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Configuring Your AI Phone Line...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Activate 14-Day Free Trial Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Encrypted Setup
                  </span>
                  <span>•</span>
                  <span>Cancel in 1-Click Anytime</span>
                  <span>•</span>
                  <span>Instant Number Allocation</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl text-white mb-2">
              Welcome to PDX SYSTEMS!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Your 14-day free trial has been provisioned for <span className="text-emerald-400 font-bold">{formData.businessName || 'Your Business'}</span>.
            </p>

            {/* Steps assigned */}
            <div className="bg-[#070b14] border border-slate-800 rounded-2xl p-4 text-left max-w-md mx-auto mb-6 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Plan Activated:</span>
                <span className="font-bold text-white uppercase">{currentPlan.name} Tier</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Dedicated AI Phone Line:</span>
                <span className="font-mono text-emerald-400 font-bold">(503) 891-PDX4</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Activation Link Sent To:</span>
                <span className="text-cyan-300 font-medium">{formData.email || 'your email'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Trial Period:</span>
                <span className="text-emerald-400 font-bold">14 Days (Renews at ${planPrice}/mo)</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 shadow-lg shadow-emerald-500/25"
            >
              Open Client Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
