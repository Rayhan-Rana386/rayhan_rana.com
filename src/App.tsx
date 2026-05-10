/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/src/components/ui/Logo";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Services from "@/src/components/sections/Services";
import Blog from "@/src/components/sections/Blog";
import Contact from "@/src/components/sections/Contact";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("Home");
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const tabs = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

  const renderContent = () => {
    switch (activeTab) {
      case "Home": return (
        <div className="flex flex-col items-center justify-start md:justify-center space-y-6 md:space-y-12 pt-0 md:pt-10 pb-1">
          {/* Mobile Hero (only visible on mobile since sidebar is hidden) */}
            <div className="md:hidden">
            <Hero isDarkMode={isDarkMode} />
          </div>
          
          <div className="text-center space-y-4 px-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 bg-indigo-500/10 px-4 py-2 rounded-full"
            >
              Hey There
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight transition-colors ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              I'm Rayhan Rana a <br />
              <span className="text-indigo-400">creative wordpress</span> <br />
              web developer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`max-w-xl mx-auto text-[18px] leading-relaxed transition-colors ${
                isDarkMode ? "text-slate-400" : "text-slate-600 font-medium"
              }`}
            >
              Hi! I’m —a Web Developer with extensive experience in website design and development. I’d love to discuss your unique project requirements.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-10 sm:px-0"
          >
            <button onClick={() => setActiveTab("Contact")} className={`w-full sm:w-auto px-10 py-4 font-black rounded-2xl uppercase tracking-widest text-[11px] transition-all transform active:scale-95 shadow-xl ${
              isDarkMode 
              ? "bg-white text-slate-950 hover:bg-indigo-400 hover:text-white shadow-white/5" 
              : "bg-slate-950 text-white hover:bg-indigo-600 shadow-slate-950/20"
            }`}>
              Hire Me
            </button>
            <button onClick={() => setActiveTab("Projects")} className={`w-full sm:w-auto px-10 py-4 border-2 font-black rounded-2xl uppercase tracking-widest text-[11px] transition-all transform active:scale-95 ${
              isDarkMode 
              ? "border-slate-800 text-white hover:border-indigo-500 hover:bg-slate-900" 
              : "border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white shadow-lg"
            }`}>
              Portfolio
            </button>
          </motion.div>

        </div>
      );
      case "About": return <About isDarkMode={isDarkMode} />;
      case "Services": return <Services isDarkMode={isDarkMode} />;
      case "Projects": return <Projects isDarkMode={isDarkMode} />;
      case "Blog": return <Blog isDarkMode={isDarkMode} />;
      case "Contact": return <Contact isDarkMode={isDarkMode} />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-0 md:p-4 transition-colors duration-500 ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className={`w-full max-w-[1280px] min-h-screen md:h-[850px] md:max-h-[min(850px,90vh)] font-sans flex flex-col md:flex-row md:overflow-hidden border-none md:border md:rounded-3xl shadow-2xl relative transition-all duration-500 ${
        isDarkMode 
        ? "bg-slate-950 text-slate-200 border-slate-900" 
        : "bg-white text-slate-800 border-slate-200 shadow-slate-200/50"
      }`}>
        
        {/* Mobile Nav Top Bar */}
        <div className={`md:hidden flex items-center justify-between px-6 py-4 border-b z-50 sticky top-0 transition-colors ${
          isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-100"
        }`}>
          <Logo isDarkMode={isDarkMode} />
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-xl border transition-all ${
                  isDarkMode 
                  ? "bg-slate-900 border-slate-800 text-yellow-500" 
                  : "bg-slate-100 border-slate-200 text-indigo-600"
                }`}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-xl transition-colors ${isDarkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-950"}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed inset-0 z-40 md:hidden flex flex-col p-10 pt-32 space-y-8 ${
                isDarkMode ? "bg-slate-950/98 backdrop-blur-2xl" : "bg-white/98 backdrop-blur-2xl"
              }`}
            >
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-medium text-left group transition-all flex items-center gap-4 ${
                    activeTab === tab 
                    ? "text-indigo-500 ml-4 scale-105" 
                    : (isDarkMode ? "text-slate-600 hover:text-indigo-400 hover:ml-4" : "text-slate-300 hover:text-indigo-600 hover:ml-4")
                  }`}
                >
                  <motion.div 
                    animate={activeTab === tab ? { scale: [1, 1.5, 1], opacity: 1 } : { scale: 1, opacity: 0.5 }}
                    className={`w-2 h-2 rounded-full transition-all ${activeTab === tab ? "bg-indigo-500" : "bg-slate-800 group-hover:bg-indigo-500"}`} 
                  />
                  {tab}
                </motion.button>
              ))}

              <div className="mt-auto pb-20 space-y-8">
                <div className={`p-6 rounded-3xl border ${isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-100 shadow-sm"}`}>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Stay Connected</p>
                  <div className="flex gap-4">
                    {[
                      { icon: <Facebook size={20} />, href: "https://www.facebook.com/rayahana.rana.373035/", name: "Facebook" },
                      { icon: <Instagram size={20} />, href: "https://www.instagram.com/developer__rana/", name: "Instagram" },
                      { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/developer-rayhan-rana/", name: "LinkedIn" },
                      { icon: <MessageCircle size={20} className="text-[#25D366]" />, href: "https://wa.me/8801731389828", name: "WhatsApp" }
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl transition-all ${
                          isDarkMode 
                          ? "bg-slate-950/50 text-slate-400 hover:text-white border border-slate-800" 
                          : "bg-white text-slate-600 hover:text-indigo-600 border border-indigo-100 shadow-sm"
                        }`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar: Profile Summary (Hidden on mobile) */}
        <aside className={`w-full md:w-80 flex-shrink-0 border-b md:border-b-0 md:border-r pt-8 px-8 pb-12 flex flex-col justify-between overflow-y-auto sleek-scroll hidden md:flex transition-colors duration-500 ${
          isDarkMode 
          ? "bg-slate-900/40 border-slate-800" 
          : "bg-slate-50 border-slate-100 shadow-[inset_-1px_0_0_0_rgba(0,0,0,0.02)]"
        }`}>
          <div className="space-y-10">
            <Hero isDarkMode={isDarkMode} />
          </div>

          <div className="mt-auto space-y-4 flex flex-col items-center">
            {/* Quick Contact Card */}
            <div className={`w-full p-6 rounded-3xl border md:border-0 transition-all ${
              isDarkMode 
              ? "bg-slate-950/50 border-slate-800/80 md:bg-transparent" 
              : "bg-white border-slate-200 shadow-sm md:bg-transparent md:shadow-none"
            }`}>
              <div className="space-y-4 flex flex-col items-center">
                <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}>Contact Quick</h3>
                <div className="space-y-3 flex flex-col items-center">
                  <div className={`flex items-center gap-3 text-xs transition-colors ${
                    isDarkMode ? "text-slate-400" : "text-slate-600 font-bold"
                  }`}>
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    mahmudrayhan386@gmail.com
                  </div>
                  <a 
                    href="https://wa.me/8801731389828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-xs transition-all ${
                      isDarkMode ? "text-slate-400 hover:text-[#25D366]" : "text-slate-600 hover:text-[#25D366] font-bold"
                    }`}
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    01731389828
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Connect Card */}
            <div className={`w-full p-6 rounded-3xl border md:border-0 transition-all ${
              isDarkMode 
              ? "bg-slate-950/50 border-slate-800/80 md:bg-transparent" 
              : "bg-white border-slate-200 shadow-sm md:bg-transparent md:shadow-none"
            }`}>
              <div className="space-y-4 flex flex-col items-center">
                <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                  isDarkMode ? "text-slate-500" : "text-slate-400"
                }`}>Connect</h3>
                <div className="flex justify-center gap-1.5">
                  {[
                    { name: "Facebook", href: "https://www.facebook.com/rayahana.rana.373035/" },
                    { name: "Instagram", href: "https://www.instagram.com/developer__rana/" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/developer-rayhan-rana/" }
                  ].map((s) => (
                    <a 
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all ${
                        isDarkMode 
                        ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700" 
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-950 hover:border-slate-400"
                      }`}
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`w-full pt-4 text-[9px] font-bold flex justify-center items-center transition-colors opacity-50 px-2 ${
              isDarkMode ? "text-slate-500" : "text-slate-400"
            }`}>
              <span>© {new Date().getFullYear()} RAYHAN RANA</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-grow flex flex-col md:overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-slate-950" : "bg-white"}`}>
          {/* Top Tab Bar Navigation (Hidden on mobile) */}
          <div className={`px-8 pt-8 pb-0 border-b md:border-none backdrop-blur-md z-10 sticky top-0 transition-colors duration-500 hidden md:block ${
            isDarkMode 
            ? "border-slate-800/50 bg-slate-950/80" 
            : "border-slate-100 bg-white/80"
          }`}>
            <div className="flex items-center justify-between mb-8 overflow-x-auto no-scrollbar md:overflow-visible relative">
              {/* Spacer for layout balance */}
              <div className="hidden md:flex flex-1 items-center">
              </div>

              <div className="flex items-center justify-center space-x-4 md:space-x-6 flex-[2]">
                {tabs.map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                    className={`text-[16px] font-medium transition-all relative ${
                       activeTab === tab 
                       ? (isDarkMode ? "text-white" : "text-slate-950") 
                       : (isDarkMode ? "text-slate-600 hover:text-slate-300" : "text-slate-500 hover:text-slate-800")
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Theme Toggle Button Container */}
              <div className="flex flex-1 justify-end items-center">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDarkMode 
                    ? "bg-slate-900 border-slate-800 text-yellow-500 hover:border-yellow-500/50" 
                    : "bg-slate-100 border-slate-200 text-indigo-600 hover:border-indigo-500/50"
                  }`}
                >
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-grow p-6 md:p-12 md:pb-32 overflow-y-auto sleek-scroll min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className="pb-1 md:pb-0"
              >
                {renderContent()}

                <div className="md:hidden flex flex-col items-center gap-4 mt-6 pb-2 pt-1 border-t border-slate-800/10">
                  <div className="flex gap-3 justify-center pt-4">
                    {[
                      { icon: <Facebook size={16} />, href: "https://www.facebook.com/rayahana.rana.373035/" },
                      { icon: <Instagram size={16} />, href: "https://www.instagram.com/developer__rana/" },
                      { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/developer-rayhan-rana/" },
                      { icon: <MessageCircle size={16} className="text-[#25D366]" />, href: "https://wa.me/8801731389828" }
                    ].map((s, i) => (
                      <a 
                        key={i} 
                        href={s.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-2.5 rounded-xl border transition-all active:scale-90 ${
                          isDarkMode 
                          ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white" 
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 shadow-sm"
                        }`}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>

                  <div className={`text-[12px] font-medium opacity-40 mt-1 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                    © {new Date().getFullYear()} Rana Portfolio
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

