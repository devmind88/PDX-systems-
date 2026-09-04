import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  PhoneCall, 
  PhoneOff, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  Send,
  Zap,
  Clock,
  ShieldCheck,
  Building
} from 'lucide-react';
import { INDUSTRIES } from '../data/industries';
import { IndustryScript } from '../types';

interface LiveSimulatorProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryScript>(INDUSTRIES[0]);
  const [callState, setCallState] = useState<'idle' | 'calling' | 'connected' | 'completed'>('idle');
  const [callTimer, setCallTimer] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [customQuery, setCustomQuery] = useState('');
  const [customConversation, setCustomConversation] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Call timer simulation
  useEffect(() => {
    let interval: any = null;
    if (callState === 'connected') {
      interval = setInterval(() => {
        setCallTimer(prev => prev + 1);
      }, 1000);
    } else {
      setCallTimer(0);
    }
    return () => clearInterval(interval);
  }, [callState]);

  // Audio synthesize sound effect using Web Audio API
  const playChime = (type: 'ring' | 'beep' | 'success') => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'ring') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === 'beep') {
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {
      // Audio context maybe blocked by browser policy until interaction
    }
  };

  const startSimulation = () => {
    setCallState('calling');
    setActiveStep(1);
    playChime('ring');

    setTimeout(() => {
      setCallState('connected');
      setActiveStep(2);
      playChime('beep');

      setTimeout(() => {
        setActiveStep(3);
        playChime('beep');

        setTimeout(() => {
          setActiveStep(4);
          playChime('success');
          setCallState('completed');
        }, 3200);
      }, 3000);
    }, 1800);
  };

  const resetSimulation = () => {
    setCallState('idle');
    setActiveStep(0);
    setCallTimer(0);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim() || isTyping) return;

    const userText = customQuery.trim();
    setCustomConversation(prev => [...prev, { sender: 'user', text: userText }]);
    setCustomQuery('');
    setIsTyping(true);
    playChime('beep');

    // Smart contractor AI response simulation
    setTimeout(() => {
      let aiReply = "I can definitely schedule a priority inspection for you right away! What is your service address so I can check technician availability in your neighborhood?";
      const lower = userText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('estimate')) {
        aiReply = "Our diagnostic & on-site estimates start with zero obligation. Most standard jobs range from $450 to $3,200 depending on exact specifications. Would you like me to book our licensed specialist to give you an exact guaranteed quote tomorrow?";
      } else if (lower.includes('emergency') || lower.includes('leak') || lower.includes('urgent') || lower.includes('flood') || lower.includes('now')) {
        aiReply = "🚨 I've flagged this as an urgent priority. We have an on-call emergency crew that can be dispatched within 45–90 minutes. What is your phone number and address so our dispatch supervisor can confirm dispatch?";
      } else if (lower.includes('weekend') || lower.includes('sunday') || lower.includes('saturday') || lower.includes('after hours')) {
        aiReply = "Yes! Our crews operate 7 days a week, and our PDX AI Receptionist is active 24/7/365 so you never have to wait until Monday morning. What time slot works best for you?";
      }

      setCustomConversation(prev => [...prev, { sender: 'ai', text: aiReply }]);
      setIsTyping(false);
      playChime('success');
    }, 1200);
  };

  return (
    <section id="simulator" className="py-24 bg-[#080d19] relative overflow-hidden border-y border-emerald-500/20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-radial-gradient pointer-events-none opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Bot className="w-4 h-4" />
            Interactive Voice & SMS Simulator
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Experience the 24/7 AI Receptionist{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Live in Action
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Select your industry below and test how PDX SYSTEMS picks up in under 1 second, qualifies the customer, quotes ballpark estimates, and locks in a real appointment.
          </p>
        </div>

        {/* Industry Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {INDUSTRIES.map(ind => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => {
                  setSelectedIndustry(ind);
                  resetSimulation();
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105'
                    : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{ind.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-slate-950/20 text-slate-950 font-extrabold' : 'bg-slate-800 text-emerald-400'
                }`}>
                  Avg: {ind.revenuePerJob}
                </span>
              </button>
            );
          })}
        </div>

        {/* Simulator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Phone Hardware & Live Call Screen */}
          <div className="lg:col-span-6 bg-[#0c1220] border-2 border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Inbound Line: (503) 891-PDX1
                  </h3>
                  <p className="text-xs text-slate-400">
                    Industry Script: <span className="text-emerald-400 font-semibold">{selectedIndustry.name}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white"
                  title="Toggle Audio Effects"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
                </button>
                {callState !== 'idle' && (
                  <button
                    onClick={resetSimulation}
                    className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white flex items-center gap-1 text-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Simulated Call States */}
            {callState === 'idle' && (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-radar">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">
                  Ready to Simulate Customer Inbound Call
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
                  Customer will call in asking about: <br />
                  <span className="text-slate-200 italic font-medium">"{selectedIndustry.callerPrompt}"</span>
                </p>
                <button
                  onClick={startSimulation}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:brightness-110 flex items-center gap-2 mx-auto"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Launch Live Call Simulation</span>
                </button>
              </div>
            )}

            {callState === 'calling' && (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 mx-auto mb-4 animate-ping">
                  <PhoneCall className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  Connecting to PDX AI Receptionist...
                </h4>
                <p className="text-xs text-emerald-400 font-mono">
                  Latency: 0.8s • Dialing...
                </p>
              </div>
            )}

            {(callState === 'connected' || callState === 'completed') && (
              <div className="space-y-4">
                {/* Active Call HUD */}
                <div className="bg-[#070b14] p-3 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-emerald-400">CALL CONNECTED (AI Active)</span>
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    Duration: 00:{callTimer < 10 ? `0${callTimer}` : callTimer}
                  </div>
                </div>

                {/* Simulated Conversation Bubble Feed */}
                <div className="space-y-3 min-h-[220px]">
                  {/* Step 1: Customer inquiry */}
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-xs text-slate-200">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-bold text-cyan-400">{selectedIndustry.callerName}</span>
                      <span>Caller</span>
                    </div>
                    {selectedIndustry.callerPrompt}
                  </div>

                  {/* Step 2: AI Voice Response */}
                  {activeStep >= 2 && (
                    <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-2xl p-3 text-xs text-slate-100 ml-4">
                      <div className="flex items-center justify-between text-[10px] text-emerald-400 mb-1">
                        <span className="font-bold flex items-center gap-1">
                          <Bot className="w-3.5 h-3.5" /> PDX VoiceAI Agent (Sub-second response)
                        </span>
                        <span>0.9s delay</span>
                      </div>
                      {selectedIndustry.aiResponse}

                      {/* Live sound bars */}
                      <div className="flex items-center gap-1 mt-2">
                        <div className="w-1 bg-emerald-400 rounded animate-wave-1" />
                        <div className="w-1 bg-emerald-400 rounded animate-wave-2" />
                        <div className="w-1 bg-cyan-400 rounded animate-wave-3" />
                        <div className="w-1 bg-emerald-400 rounded animate-wave-4" />
                        <span className="text-[9px] text-emerald-300 font-mono ml-2">Natural neural speech synthesis active</span>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Calendar Lock In */}
                  {activeStep >= 3 && (
                    <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-xl p-3 text-xs text-cyan-200 flex items-start gap-2.5">
                      <Calendar className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block text-cyan-300 mb-0.5">Calendar Slot Synchronized:</span>
                        {selectedIndustry.bookedResult}
                      </div>
                    </div>
                  )}

                  {/* Step 4: SMS Follow-Up Confirmation */}
                  {activeStep >= 4 && (
                    <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-xl p-3 text-xs text-emerald-200">
                      <div className="flex items-center gap-2 font-bold text-emerald-400 mb-1 text-[11px]">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Instant SMS Confirmation Delivered to Caller Phone:</span>
                      </div>
                      <p className="italic text-slate-300">
                        "{selectedIndustry.followUpText}"
                      </p>
                    </div>
                  )}
                </div>

                {callState === 'completed' && (
                  <div className="p-3 bg-emerald-950/50 border border-emerald-500/40 rounded-xl flex items-center justify-between">
                    <div className="text-xs">
                      <span className="font-bold text-emerald-300 block">Simulation Successful!</span>
                      <span className="text-slate-400 text-[11px]">Potential revenue secured: {selectedIndustry.revenuePerJob}</span>
                    </div>
                    <button
                      onClick={() => onOpenTrial('pro')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400"
                    >
                      Claim Your Free Trial
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Live Interactive Question Tester */}
          <div className="lg:col-span-6 bg-[#0c1220] border-2 border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      Test Any Customer Question
                    </h3>
                    <p className="text-xs text-slate-400">
                      Ask tough objections, emergency calls, or pricing queries
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                  AI Guardrails Active
                </span>
              </div>

              {/* Suggested Quick Prompts */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {[
                  "What's your typical pricing for this job?",
                  "Can you send an emergency tech right now?",
                  "Do you work on weekends?",
                  "Can I speak directly to the business owner?"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCustomQuery(prompt);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/60 transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {/* Chat history display */}
              <div className="space-y-3 min-h-[220px] max-h-[260px] overflow-y-auto pr-1 mb-4">
                {customConversation.length === 0 ? (
                  <div className="h-40 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-800 rounded-xl">
                    <Bot className="w-8 h-8 text-slate-600 mb-2" />
                    <p className="text-xs text-slate-400">
                      Type a custom customer query below or pick one of the quick prompts above to see how PDX AI answers naturally without putting the caller on hold.
                    </p>
                  </div>
                ) : (
                  customConversation.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl text-xs ${
                        item.sender === 'user'
                          ? 'bg-slate-800 text-slate-200 border border-slate-700 ml-8'
                          : 'bg-emerald-950/70 text-emerald-100 border border-emerald-500/40 mr-8'
                      }`}
                    >
                      <div className="text-[10px] font-bold mb-0.5 text-slate-400 flex items-center justify-between">
                        <span>{item.sender === 'user' ? 'Customer' : 'PDX VoiceAI Receptionist'}</span>
                      </div>
                      {item.text}
                    </div>
                  ))
                )}

                {isTyping && (
                  <div className="bg-emerald-950/50 border border-emerald-500/30 p-2.5 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>PDX AI is formulating voice response...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendCustom} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="Type a customer question (e.g., 'How much for an inspection?')..."
                  className="w-full bg-[#070b14] border border-slate-700 focus:border-emerald-500 rounded-xl pl-4 pr-12 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!customQuery.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-emerald-500 text-slate-950 disabled:opacity-40 hover:bg-emerald-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
