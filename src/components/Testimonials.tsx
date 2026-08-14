import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { 
  Star, 
  Quote, 
  Sparkles, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  PlusCircle, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    serviceCategory: 'Elderly Care Home',
    rating: 5,
    story: '',
  });

  const filtered = TESTIMONIALS.filter((t) => {
    if (activeCategory === 'all') return true;
    return t.serviceCategory.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const currentTestimonial = filtered[currentIndex] || TESTIMONIALS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setFormData({ name: '', relation: '', serviceCategory: 'Elderly Care Home', rating: 5, story: '' });
    }, 2000);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Family Experiences & Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Loved by Families Across Nairobi
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Read heartfelt stories from sons, daughters, and residents who found peace, dignity, and family warmth at Al Shifaa Care Home.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['all', 'elderly care', 'home care', 'mental health', 'active 50+'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F2942] text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Highlight Card */}
        {currentTestimonial && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative max-w-4xl mx-auto mb-16">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-amber-100/80 -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-500 ml-2">
                  5.0 Verified Family Story
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-base font-bold text-[#0F2942]">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {currentTestimonial.relation} • {currentTestimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {currentTestimonial.serviceCategory}
                  </span>

                  {/* Nav Arrows */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft flex flex-col justify-between hover:shadow-card-hover transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic line-clamp-4">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-400"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-[#0F2942] truncate">{t.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">
                    {t.relation} • {t.serviceCategory}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave Testimonial Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-800 font-bold text-xs rounded-xl border border-emerald-300 shadow-sm hover:bg-emerald-50 transition-colors"
          >
            <PlusCircle className="w-4 h-4 text-emerald-600" />
            <span>Are you a resident family? Share Your Story with Us</span>
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2942]">Thank You!</h3>
                <p className="text-xs text-slate-600">
                  Your family story has been submitted for review by our patient experience team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2942]">Share Your Al Shifaa Experience</h3>
                  <p className="text-xs text-slate-500">Your feedback inspires our caregivers and comforts future families.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mary Muthoni"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Relationship / Role</label>
                    <input
                      type="text"
                      required
                      value={formData.relation}
                      onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
                      placeholder="e.g. Daughter of Resident"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Received</label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option>Elderly Care Home</option>
                      <option>Mental Health Care</option>
                      <option>Home Care Services</option>
                      <option>Active 50+ Wellness</option>
                      <option>OPD Clinic</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Story / Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    placeholder="Tell us about the care your family received..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow"
                >
                  Submit Story
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
