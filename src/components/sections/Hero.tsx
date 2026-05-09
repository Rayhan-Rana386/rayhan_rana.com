import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Hero({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const socials = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/rayahana.rana.373035/" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/developer__rana/" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/developer-rayhan-rana/" },
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`w-full max-w-[400px] md:max-w-[240px] aspect-square rounded-3xl overflow-hidden border-2 p-1 transition-colors ${
          isDarkMode ? "border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/50" : "border-slate-100 bg-white shadow-lg shadow-slate-200/40"
        }`}
      >
        <div className={`w-full h-full rounded-2xl overflow-hidden transition-colors ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
          <img
            src="https://ahnafakif.com/rayhan.com/wp-content/uploads/2026/05/profile.png"
            alt="Rayhan Rana"
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      <div className="space-y-4 flex flex-col items-center hidden md:flex">
        <div className="space-y-1">
          <h1 className={`text-xl font-black tracking-tighter leading-tight transition-colors whitespace-nowrap ${
            isDarkMode ? "text-white" : "text-slate-950"
          }`}>
            Rayhan <span className="text-indigo-500">Rana</span>
          </h1>
          <p className={`text-[18px] font-medium transition-colors ${
            isDarkMode ? "text-slate-500" : "text-slate-400"
          }`}>
            Creative WordPress <span className="text-indigo-500">Developer</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isDarkMode 
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-400" 
                : "bg-white border-slate-100 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-600 shadow-sm"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
