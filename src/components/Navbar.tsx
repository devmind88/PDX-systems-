import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Activity,
  Layers,
  BarChart3,
  Bot
} from 'lucide-react';

interface NavbarProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTrial,
  onOpenDemo,
  onOpenLogin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center overflow-hidden">
                {/* Custom Stylized Logo matching PDX SYSTEMS from Image 1 */}
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 22L12 14L18 20L28 9" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 9H28V15" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="5" y="24" width="3" height="4" rx="1" fill="#06b6d4" />
                  <rect x="11" y="20" width="3" height="8" rx="1" fill="#06b6d4" />
                  <rect x="17" y="16" width="3" height="12" rx="1" fill="#10b981" />
                  <rect x="23" y="12" width="3" height="16" rx="1" fill="#22c55e" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  PDX
                </span>
                <span className="font-display font-bold text-xl tracking-wider text-emerald-400">
                  SYSTEMS
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium block uppercase -mt-0.5">
                AI CRM & Automations
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <Layers className="w-4 h-4 text-emerald-400/80" />
              SaaS Products
            </a>
            <a
              href="#simulator"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <Bot className="w-4 h-4 text-cyan-400/80" />
              AI Receptionist Live
            </a>
            <a
              href="#flow"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <Zap className="w-4 h-4 text-emerald-400/80" />
              Automation Flow
            </a>
            <a
              href="#calculator"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 py-1"
            >
              <BarChart3 className="w-4 h-4 text-cyan-400/80" />
              ROI Calculator
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-400 transition-colors py-1"
            >
              Pricing
            </a>
            <a
              href="#results"
              className="hover:text-emerald-400 transition-colors py-1"
            >
              Results
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="text-xs font-semibold px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 transition-all"
            >
              Client Login
            </button>

            <button
              onClick={onOpenDemo}
              className="text-xs font-semibold px-3.5 py-2 rounded-lg text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10 border border-emerald-500/30 transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              Book Free Demo
            </button>

            <button
              onClick={() => onOpenTrial('pro')}
              className="relative group overflow-hidden text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start 14-Day Free Trial</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenTrial('pro')}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-800 bg-[#0c1220]/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AI Receptionist Online • 99.98% Network SLA</span>
            </div>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              SaaS Products Line
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              Interactive AI Voice Demo
            </a>
            <a
              href="#flow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              Automated Sales Engine
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              ROI Calculator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              Pricing Tiers ($97 - $497)
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/60 font-medium"
            >
              Proven Results & Reviews
            </a>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full text-center py-2.5 rounded-lg border border-emerald-500/40 text-emerald-300 font-semibold text-sm"
              >
                Book 1-on-1 Free Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial('pro');
                }}
                className="w-full text-center py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30"
              >
                Start 14-Day Free Trial
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full text-center py-2 text-xs text-slate-400 hover:text-white"
              >
                Client Dashboard Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
