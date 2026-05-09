import { motion } from "motion/react";

export default function Blog({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const posts = [
    {
      title: "Border Radius Size Presets in WordPress 6.9",
      date: "May 12, 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
      description: "Exploring the new design controls in WordPress 6.9 that allow developers to provide preset border radius sizes for blocks."
    },
    {
      title: "Introducing the WordPress Abilities",
      date: "April 28, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
      description: "Scaling user roles and permissions in custom WordPress builds to create complex membership and role-based workflows."
    },
    {
      title: "Namespaces and Coding Standards in Plugin Development",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
      description: "A deep dive into professional-grade plugin development using PSR standards and modern PHP namespaces for clean code."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className={`text-[20px] font-bold tracking-tight transition-colors ${
          isDarkMode ? "text-white" : "text-slate-950"
        }`}>Recent Editorial</h2>
        <div className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
          isDarkMode ? "text-slate-500" : "text-slate-400"
        }`}>3 Posts</div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row gap-6 border p-6 rounded-2xl transition-all group ${
              isDarkMode 
              ? "bg-slate-900/40 border-slate-800/60 hover:border-indigo-500/20" 
              : "bg-slate-50 border-slate-100 hover:border-indigo-500/10 shadow-sm"
            }`}
          >
            <div className={`w-full md:w-48 h-32 rounded-xl overflow-hidden border flex-shrink-0 transition-colors ${
              isDarkMode ? "border-slate-800" : "border-slate-200"
            }`}>
              <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="space-y-3 py-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Articles</span>
                <span className={`text-[10px] font-medium transition-colors ${isDarkMode ? "text-slate-500" : "text-slate-500 font-bold"}`}>{post.date}</span>
              </div>
              <h3 className={`text-[20px] font-bold group-hover:text-indigo-300 transition-colors leading-snug ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}>
                {post.title}
              </h3>
              <p className={`text-[16px] leading-relaxed line-clamp-2 transition-colors ${
                isDarkMode ? "text-slate-500" : "text-slate-700 font-medium"
              }`}>
                {post.description}
              </p>
              <div className={`text-[10px] font-black uppercase tracking-[0.2em] pt-1 transition-colors ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}>
                Read Story <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
