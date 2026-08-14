import React, { useState } from 'react';
import { AppointmentFormData } from '../types';
import { CLINIC_INFO, SERVICES } from '../data/content';
import { openWhatsAppWithMessage } from '../utils/whatsapp';
import { 
  Calendar, 
  X, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  Download, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledNotes?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  prefilledNotes,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || 'Geriatric Care (Inpatient)',
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: prefilledNotes || '',
    patientAge: '',
    locationPref: 'lavington-campus',
  });

  const [ticket, setTicket] = useState<{
    id: string;
    createdAt: string;
    whatsappMessage: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `ALSHIFAA-${randomNum}`;
    
    const locationLabel = 
      formData.locationPref === 'lavington-campus'
        ? '📍 In-person Lavington Campus Tour'
        : formData.locationPref === 'home-visit'
        ? '🏡 Home Nursing Visit in Nairobi'
        : '💻 Online Tele-Consultation Call';

    const message = `🏥 *NEW CONSULTATION BOOKING - AL SHIFAA CARE HOME*
----------------------------------------
🎫 *Ticket ID:* #${newTicketId}
👤 *Full Name:* ${formData.fullName}
📞 *Phone Number:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}
🩺 *Healthcare Service:* ${formData.service}
📍 *Consultation Mode:* ${locationLabel}
📅 *Preferred Date:* ${formData.preferredDate || 'As soon as possible'}
⏰ *Preferred Time:* ${formData.preferredTime}
🎂 *Patient Age:* ${formData.patientAge || 'N/A'}
📝 *Medical Notes:* ${formData.notes || 'None provided'}
----------------------------------------
_Shared via Al Shifaa Care Home Website (alshifaa.co.ke)_`;

    setTicket({
      id: newTicketId,
      createdAt: new Date().toLocaleString(),
      whatsappMessage: message,
    });

    // Instantly send details to WhatsApp
    openWhatsAppWithMessage(message);
  };

  const handleReset = () => {
    setTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl border border-slate-100">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0F2942]">Book Healthcare Consultation</h2>
              <p className="text-[11px] text-slate-500">Al Shifaa Care Home • Lavington, Nairobi</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {ticket ? (
            /* Digital Confirmation Ticket */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                  Consultation Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F2942]">
                  Appointment Ticket #{ticket.id}
                </h3>
                <p className="text-xs text-slate-500">
                  We look forward to welcoming you to our Lavington Campus.
                </p>
              </div>

              {/* Ticket Details Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Patient / Family Name:</span>
                  <span className="font-bold text-[#0F2942]">{formData.fullName}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Contact Phone:</span>
                  <span className="font-bold text-[#0F2942]">{formData.phone}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Service Selected:</span>
                  <span className="font-bold text-emerald-800">{formData.service}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-medium">Date & Time Slot:</span>
                  <span className="font-bold text-[#0F2942]">
                    {formData.preferredDate || 'To be scheduled'} @ {formData.preferredTime}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Location Mode:</span>
                  <span className="font-bold text-amber-800 capitalize">
                    {formData.locationPref === 'lavington-campus'
                      ? '📍 In-person Lavington Campus Tour'
                      : formData.locationPref === 'home-visit'
                      ? '🏡 Home Nursing Visit in Nairobi'
                      : '💻 Online Tele-Consultation'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => openWhatsAppWithMessage(ticket.whatsappMessage)}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>Resend All Booking Details via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0F2942] font-semibold text-xs rounded-xl transition-colors"
                >
                  Close Confirmation Ticket
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name (Family or Resident Contact) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Jane Wambui"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (M-Pesa / Call) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0712 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Required Healthcare Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id}>{s.title}</option>
                    ))}
                    <option>General Consultation / Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Consultation Mode *
                  </label>
                  <select
                    value={formData.locationPref}
                    onChange={(e) => setFormData({ ...formData, locationPref: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="lavington-campus">📍 Lavington Campus Guided Walkthrough</option>
                    <option value="home-visit">🏡 Home Visit in Nairobi</option>
                    <option value="online-consultation">💻 Online Tele-Consultation Call</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option>09:00 AM</option>
                    <option>10:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Age
                  </label>
                  <input
                    type="text"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    placeholder="e.g. 74 yrs"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Medical Notes & Family Background
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any medical history, mobility concerns, or specific dietary requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#0F2942] to-[#1E3A8A] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Confirm & Generate Digital Appointment Ticket</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
