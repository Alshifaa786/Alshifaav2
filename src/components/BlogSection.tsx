import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BlogPost } from '../types';
import { 
  Search, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  BookOpen 
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Healthy Ageing', label: 'Healthy Ageing' },
    { id: 'Caregiver Tips', label: 'Caregiver Advice' },
    { id: 'Stroke Recovery', label: 'Stroke Recovery' },
    { id: 'Mental Wellness', label: 'Mental Wellness' },
  ];

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCat = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Healthcare Insights & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight">
            Al Shifaa Health & Caregiving Journal
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Expert articles from our doctors, psychologists, and physiotherapists on healthy ageing, stroke recovery, dementia care, and caregiver wellness in Kenya.
          </p>

          {/* Search & Categories */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles (e.g. dementia, nutrition, stroke)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-[#0F2942] text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0F2942] text-xs font-bold px-3 py-1 rounded-full border border-white">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2942] group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-emerald-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#0F2942] line-clamp-1">{post.author.name}</p>
                    <p className="text-[10px] text-slate-500 line-clamp-1">{post.author.role}</p>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-slate-100">
            
            {/* Top Close Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {selectedPost.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  {copiedShare ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-600" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Article Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-[#0F2942]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedPost.readTime} • Published {selectedPost.date}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedPost.title}
                </h1>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-10 space-y-6">
              
              {/* Author Banner */}
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0F2942]">{selectedPost.author.name}</h4>
                  <p className="text-xs text-slate-500">{selectedPost.author.role} • Al Shifaa Medical Team</p>
                </div>
              </div>

              {/* Text Paragraphs */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                {selectedPost.content.map((para, idx) => (
                  <p key={idx} className="first-letter:text-xl first-letter:font-bold">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {selectedPost.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold"
                  >
                    #{t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
