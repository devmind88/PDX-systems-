import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  PhoneCall, 
  Layers, 
  Bot, 
  CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTrial,
  onOpenDemo,
  onOpenLogin
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 22L12 14L18 20L28 9" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 9H28V15" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="5" y="24" width="3" height="4" rx="1" fill="#06b6d4" />
                    <rect x="11" y="20" width="3" height="8" rx="1" fill="#06b6d4" />
                    <rect x="17" y="16" width="3" height="12" rx="1" fill="#10b981" />
                    <rect x="23" y="12" width="3" height="16" rx="1" fill="#22c55e" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl text-white">PDX</span>
                <span className="font-display font-bold text-xl text-emerald-400">SYSTEMS</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed">
              <span className="font-bold text-emerald-400">WE AUTOMATE. YOU GROW.</span> The mission-critical AI Receptionist & CRM pipeline platform built to ensure contractors, home service leaders, and modern trade businesses never miss another lead.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] text-emerald-300 font-mono">
                System Status: All Systems Operational (99.98% SLA)
              </span>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-300 mb-1.5">
                Get Weekly Contractor Lead-Gen Tactics:
              </div>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xs">
                  <input
                    type="email"
                    required
                    value={emailSub}
                    onChange={e => setEmailSub(e.target.value)}
                    placeholder="you@contracting.com"
                    className="flex-1 bg-[#090e1a] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                  >
                    Join
                  </button>
                </form>
              ) : (
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Subscribed! Check your inbox for the playbook.
                </div>
              )}
            </div>
          </div>

          {/* Col 2: SaaS Products & Services */}
          <div>
            <div className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              SaaS Products & Services
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>Custom Website Development</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Core</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  PDX VoiceAI Receptionist™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  PDX Growth CRM Pipeline™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  PDX Multi-Channel Hub™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  PDX 5-Star Review Booster™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  PDX Smart Dispatch Hub™
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenTrial('unlimited')}
                  className="text-emerald-400 font-bold hover:underline block pt-1"
                >
                  White-Label Reseller Program →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Trades */}
          <div>
            <div className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              Trade Solutions
            </div>
            <ul className="space-y-2">
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Roofing & Restoration</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">HVAC & Heat Pumps</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Plumbing & Rooter</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Solar & Electrical</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Tree Care & Landscaping</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">MedSpas & Aesthetic Clinics</a></li>
            </ul>
          </div>

          {/* Col 4: Platform & Access */}
          <div>
            <div className="font-bold text-sm text-white mb-3 uppercase tracking-wider">
              Platform & Access
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenLogin} className="hover:text-emerald-400 transition-colors">
                  Client Dashboard Login
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTrial('pro')} className="hover:text-emerald-400 transition-colors">
                  14-Day Free Trial
                </button>
              </li>
              <li>
                <button onClick={onOpenDemo} className="hover:text-emerald-400 transition-colors">
                  Book 1-on-1 Walkthrough
                </button>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Interactive ROI Calculator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing Matrix ($97 - $497)
                </a>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 font-mono block pt-1">
                  A2P 10DLC Carrier Approved
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} PDX SYSTEMS, LLC. All Rights Reserved. Built for high-volume automated business operations.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Telephony Compliance</a>
            <a href="#" className="hover:text-slate-400">Security & Encryption</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
