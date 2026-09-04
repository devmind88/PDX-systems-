import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: (planId?: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenTrial
}) => {
  const [email, setEmail] = useState('demo@pdxsystems.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoggedIn(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0c1222] border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!loggedIn ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Client Portal Login
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Access your PDX Systems live calls, call recordings, and CRM pipelines.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Account Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-[#070a14] border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-[#070a14] border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-emerald-500" />
                  <span>Remember device</span>
                </label>
                <a href="#" className="hover:text-emerald-400">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? <span>Verifying credentials...</span> : <span>Sign In to Dashboard</span>}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
              Don't have an active account yet?{' '}
              <button
                onClick={() => {
                  onClose();
                  onOpenTrial('pro');
                }}
                className="text-emerald-400 font-bold hover:underline"
              >
                Start 14-Day Free Trial →
              </button>
            </div>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Portal Access Authenticated
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Redirecting you to <span className="font-mono text-emerald-400">app.pdxsystems.com</span>...
            </p>
            <div className="bg-[#070a14] p-3 rounded-xl text-xs text-slate-400 mb-4">
              Session active • 47 opportunities and 132 leads synced.
            </div>
            <button
              onClick={() => {
                setLoggedIn(false);
                onClose();
              }}
              className="px-6 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
