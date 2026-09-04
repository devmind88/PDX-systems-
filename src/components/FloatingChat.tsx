import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  PhoneCall, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FloatingChatProps {
  onOpenTrial: (planId?: string) => void;
  onOpenDemo: () => void;
}

export const FloatingChat: React.FC<FloatingChatProps> = ({
  onOpenTrial,
  onOpenDemo
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Hi there! I am the PDX Systems AI Voice & Lead Assistant. Are you looking to capture more contractor leads or test out our 24/7 AI Receptionist?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim() || isTyping) return;

    const userText = inputMsg.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Our 24/7 AI Receptionist answers inbound calls in under 1.2 seconds, books slots straight into your calendar, and sends an immediate SMS text confirmation. Would you like to start a 14-day free trial or book a quick 1-on-1 demo?";
      const lower = userText.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) {
        reply = "Our plans start at $97/mo (Starter) and $297/mo (Pro - Most Popular, includes 2,500 AI minutes, CRM, and review booster). All plans include a 14-day free trial!";
      } else if (lower.includes('spanish') || lower.includes('language')) {
        reply = "Yes! PDX VoiceAI automatically detects and fluently converses in both English and Spanish in real-time.";
      } else if (lower.includes('calendar') || lower.includes('crm') || lower.includes('integrate')) {
        reply = "We integrate directly with Google Calendar, Outlook, HighLevel, Jobber, Housecall Pro, ServiceTitan, and Zapier.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070b14] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070b14]" />
          <Bot className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-[340px] sm:w-[380px] bg-[#0c1222] border-2 border-emerald-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#080d19] p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">PDX AI Live Assistant</h4>
                <p className="text-[10px] text-emerald-400 font-mono">Online • Sub-second AI Agent</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3.5 space-y-2.5 max-h-[280px] overflow-y-auto text-xs bg-[#070a14]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-2xl max-w-[85%] ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-slate-950 font-medium ml-auto rounded-tr-none'
                    : 'bg-[#0f172a] text-slate-200 border border-slate-800 mr-auto rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-[#0f172a] text-emerald-400 p-2 rounded-xl text-[11px] flex items-center gap-1.5 max-w-[60%] border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce delay-200" />
                <span>Typing...</span>
              </div>
            )}
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 bg-[#0c1222] border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => onOpenTrial('pro')}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25"
            >
              🚀 Free Trial
            </button>
            <button
              onClick={onOpenDemo}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25"
            >
              📞 Book Demo
            </button>
            <button
              onClick={() => {
                setInputMsg('How much does the Pro plan cost?');
              }}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              💰 Pricing
            </button>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-2.5 bg-[#080d19] border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={e => setInputMsg(e.target.value)}
              placeholder="Ask anything about PDX Systems..."
              className="flex-1 bg-[#070b14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={!inputMsg.trim()}
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 disabled:opacity-40 hover:bg-emerald-400"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
