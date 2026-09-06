import React, { useState } from 'react';
import { 
  X, 
  PhoneCall, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM PST');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    trade: 'Roofing / Construction',
    projectScope: 'Custom Website Development'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0c1222] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                Live 1-on-1 Walkthrough
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Book Your Free PDX Demo
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                See how the AI Receptionist sounds for your exact business and calculate your missed-call recovery.
              </p>
            </div>

            {/* Time Slot Picker */}
            <div className="mb-4">
              <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Select Preferred Date & Time:
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {['Today', 'Tomorrow', 'In 2 Days'].map(day => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                      selectedDay === day
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-[#070b14] border-slate-800 text-slate-400'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['9:30 AM PST', '11:00 AM PST', '2:00 PM PST'].map(t => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-1.5 rounded-lg text-[11px] font-semibold border transition-colors ${
                      selectedTime === t
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-[#070b14] border-slate-800 text-slate-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Dave Miller"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#070a14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="dave@millerhvac.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#070a14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-semibold block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="(503) 555-0182"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#070a14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Company & Industry</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Miller Heating & Air (HVAC)"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#070a14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">Project Scope / Inquiry</label>
                <select
                  value={formData.projectScope}
                  onChange={e => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-[#070a14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-cyan-400"
                >
                  <option value="Custom Website Development">Custom Website Development</option>
                  <option value="Website + 24/7 AI Chatbot Add-On">Website + 24/7 AI Chatbot Add-On</option>
                  <option value="Add AI Chatbot to Existing Website">Add AI Chatbot to Existing Website</option>
                  <option value="All-In-One CRM & AI Voice Receptionist">All-In-One CRM & AI Voice Receptionist</option>
                  <option value="Trade / Contractor Automation Pipeline">Trade / Contractor Automation Pipeline</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Demo Booking ({selectedDay} @ {selectedTime})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Demo Locked In!
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Scheduled for <span className="text-cyan-400 font-bold">{selectedDay} at {selectedTime}</span>.
            </p>
            <div className="bg-[#070a14] p-3 rounded-xl text-xs text-slate-400 mb-4">
              A calendar invite and test AI phone sample have been texted to <span className="text-white font-mono">{formData.phone}</span>.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
