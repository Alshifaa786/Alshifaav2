import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { 
  Search, 
  ChevronDown, 
  Sparkles, 
  HelpCircle, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');
  const [userQuestion, setUserQuestion] = useState('');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'visits', label: 'Family Visits' },
    { id: 'home-care', label: 'Home Nursing' },
    { id: 'mental-health', label: 'Mental Health' },
    { id: 'pricing', label: 'Care Pricing' },
    { id: 'medical', label: 'Medical & Staff' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setQuestionSubmitted(true);
    setTimeout(() => {
      setQuestionSubmitted(false);
      setUserQuestion('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Clear & Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Everything you need to know about our admissions, family visitation, home nursing, and care fees in Lavington.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. costs, visits, home nurses)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F2942] text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 text-slate-500">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold">No questions found matching "{searchTerm}".</p>
              <p className="text-xs">Try searching a different keyword or contact our intake team directly.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#0F2942] hover:text-emerald-700 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform ${isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Submit Custom Question */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F2942]">Have a Specific Question?</h3>
              <p className="text-xs text-slate-500">Ask our care directors and receive a prompt response.</p>
            </div>
          </div>

          {questionSubmitted ? (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your question was sent to our intake nurse. We will reply shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                required
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Type your question here (e.g. Do you accept international insurance?)..."
                className="flex-1 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0F2942] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-xl shadow shrink-0"
              >
                Send Question
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
