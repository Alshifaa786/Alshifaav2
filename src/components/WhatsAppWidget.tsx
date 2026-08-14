import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/content';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    'Hello, I would like to inquire about Elderly Care Home admissions.',
    'Hi! Can I speak to a nurse regarding Home Care Services in Nairobi?',
    'Hello, I would like information about Residential Mental Health Care.',
    'Hi! I want to register for the Active 50+ Wellness Programme.',
  ];

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
      {/* Expandable Chat Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl shadow-2xl border border-slate-200 w-[calc(100vw-2rem)] sm:w-88 max-w-sm overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#0F2942] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white text-sm">
                  AS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0F2942]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Al Shifaa Care Intake</h4>
                <p className="text-[10px] text-emerald-300">Typically replies in 5 minutes</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm text-xs text-slate-700 space-y-1">
              <p className="font-bold text-[#0F2942]">Karibu Al Shifaa Care Home! 👋</p>
              <p>
                How can our intake team support your family today in Lavington, Nairobi?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Select Quick Question:
              </p>
              {quickMessages.map((msg, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 bg-white hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 rounded-xl text-xs text-slate-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  💬 {msg}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Direct Launcher */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Live Chat</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all group border-2 border-white"
        aria-label="WhatsApp Care Support"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
};
