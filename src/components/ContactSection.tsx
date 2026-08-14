import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/content';
import { openWhatsAppWithMessage } from '../utils/whatsapp';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [lastMessageSent, setLastMessageSent] = useState('');
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Elderly Care Home Admission',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waMessage = `💬 *NEW DIRECT INQUIRY - AL SHIFAA CARE HOME*
----------------------------------------
👤 *Name:* ${contactData.name}
📞 *Phone Number:* ${contactData.phone}
📧 *Email:* ${contactData.email || 'N/A'}
📌 *Subject:* ${contactData.subject}
📝 *Message / Details:* ${contactData.message}
----------------------------------------
_Sent via Al Shifaa Website Contact Form (alshifaa.co.ke)_`;

    setLastMessageSent(waMessage);
    setFormSent(true);

    // Instantly redirect to WhatsApp
    openWhatsAppWithMessage(waMessage);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Visit Us in Lavington</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Contact & Location Information
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            We invite families to visit our serene campus in Lavington, Nairobi. Our intake team and nursing directors are available 24/7 to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F2942] text-sm">Lavington Address</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {CLINIC_INFO.address}
            </p>
            <p className="text-[11px] text-slate-400">{CLINIC_INFO.locationDetails}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F2942] text-sm">Phone Contacts</h3>
            <p className="text-xs text-slate-800 font-semibold">
              Primary: {CLINIC_INFO.phonePrimary}
            </p>
            <p className="text-xs text-slate-600">
              Secondary: {CLINIC_INFO.phoneSecondary}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F2942] text-sm">Email Inquiries</h3>
            <p className="text-xs text-slate-800 font-semibold">{CLINIC_INFO.email}</p>
            <p className="text-xs text-slate-600">{CLINIC_INFO.emailAdmissions}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0F2942] text-sm">Care & Visiting Hours</h3>
            <p className="text-xs text-emerald-800 font-semibold">Care: 24/7 Residential</p>
            <p className="text-[11px] text-slate-500">{CLINIC_INFO.visitingHours}</p>
          </div>

        </div>

        {/* Grid: Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Interactive Map Visual */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xl overflow-hidden h-[450px] relative flex flex-col">
              
              {/* Map Canvas Frame */}
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Al Shifaa Care Home Lavington Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817342084534!2d36.768100!3d-1.278300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDEuOSJTIDM2wrA0NicwNS4yIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-150 contrast-105"
                />

                {/* Floating Map Marker Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold text-[#0F2942] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#0F2942]">Al Shifaa Care Home</p>
                    <p className="text-[10px] text-slate-500">233 Owashika Rd, Lavington</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner below map */}
              <div className="mt-3 bg-amber-50 rounded-2xl p-3 border border-amber-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-amber-900 font-bold">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>24/7 Emergency Dispatch: {CLINIC_INFO.emergencyPhone}</span>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold rounded-lg"
                >
                  Call Now
                </a>
              </div>

            </div>
          </div>

          {/* Contact & Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0F2942]">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-500">
                  Our intake coordinator will reach out to you within 30 minutes.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-extrabold text-[#0F2942]">Inquiry Shared via WhatsApp!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your message details have been formatted and dispatched directly to our intake team (+254 718 937 074).
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => openWhatsAppWithMessage(lastMessageSent)}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-200" />
                      <span>Re-open WhatsApp Chat with Intake Specialist</span>
                    </button>
                    <button
                      onClick={() => {
                        setFormSent(false);
                        setContactData({ name: '', phone: '', email: '', subject: 'Elderly Care Home Admission', message: '' });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline font-medium pt-1"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="e.g. Grace Wambui"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="0712 345 678"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                      <select
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                      >
                        <option>Elderly Care Home Admission</option>
                        <option>Residential Mental Health Rehab</option>
                        <option>Home Nursing Request</option>
                        <option>Active 50+ Club Registration</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Medical Details</label>
                    <textarea
                      required
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Please describe how we can assist your family..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0F2942] hover:bg-[#1E3A8A] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Al Shifaa Lavington</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
