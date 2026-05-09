import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setStatus("submitting");
    
    // We assume success after a short delay since we can't reliably track 
    // the iframe load for cross-origin redirects
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hidden Iframe for submission */}
      <iframe name="submission_iframe" className="hidden"></iframe>

      <div className="space-y-1">
        <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
          isDarkMode ? "text-indigo-400" : "text-indigo-600"
        }`}>Get In Touch</h3>
        <h2 className={`text-[20px] font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          Start A Conversation
        </h2>
      </div>

      <form 
        action="https://formsubmit.co/mahmudrayhan386@gmail.com" 
        method="POST"
        target="submission_iframe"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Project Inquiry - Rana Portfolio" />

        <div className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none transition-all ${
                isDarkMode 
                ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
              }`}
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none transition-all ${
                  isDarkMode 
                  ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                  : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
                }`}
              />
            </div>
            <div className="space-y-1.5">
              <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none transition-all ${
                  isDarkMode 
                  ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                  : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Project Type */}
          <div className="space-y-1.5">
            <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Project Type
            </label>
            <select
              name="project_type"
              className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat ${
                isDarkMode 
                ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
              }`}
            >
              <option value="Website Redesign">Website Redesign</option>
              <option value="New Website Development">New Website Development</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="Maintenance & SEO">Maintenance & SEO</option>
            </select>
          </div>

          {/* Project Timeline */}
          <div className="space-y-1.5">
            <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Project Timeline
            </label>
            <select
              name="timeline"
              className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat ${
                isDarkMode 
                ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
              }`}
            >
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-2 months">1-2 months</option>
              <option value="2+ months">2+ months</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <label className={`text-[16px] font-bold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Project Details
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className={`w-full border rounded-lg px-4 py-2.5 text-[16px] outline-none resize-none transition-all ${
                isDarkMode 
                ? "bg-slate-950 border-slate-800 text-white focus:border-indigo-500/50" 
                : "bg-white border-slate-300 text-slate-950 focus:border-blue-500"
              }`}
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className={`group w-full font-bold py-3 rounded-lg text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 relative ${
            isDarkMode 
            ? "bg-blue-600 text-white hover:bg-blue-500" 
            : "bg-[#3366ff] text-white hover:bg-blue-600 shadow-md"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {status === "submitting" ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <span>Send</span>
          )}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              className={`p-4 rounded-xl border flex items-center gap-3 mt-4 ${
                isDarkMode ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-emerald-50 border-emerald-100 text-emerald-700"
              }`}
            >
              <CheckCircle2 size={16} />
              <div className="text-[11px] font-bold">Message sent! I'll contact you soon.</div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
