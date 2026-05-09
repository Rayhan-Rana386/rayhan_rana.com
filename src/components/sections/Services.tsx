import { motion } from "motion/react";
import { Globe, ShoppingCart, Settings, Rocket, Zap, Smartphone } from "lucide-react";

export default function Services({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const services = [
    {
      title: "Custom WordPress Site Design",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      description: "Building unique, high-performance WordPress websites from the ground up, tailored specifically to your brand and business requirements."
    },
    {
      title: "WooCommerce Solutions",
      icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
      description: "Comprehensive e-commerce setups with secure payment integration, dynamic inventories, and optimized sales funnels."
    },
    {
      title: "Advanced Theme Development",
      icon: <Settings className="w-5 h-5 text-amber-400" />,
      description: "Beyond simple customization — I build custom WordPress themes and blocks that provide total control over your digital content."
    },
    {
      title: "Conversion Landing Pages",
      icon: <Rocket className="w-5 h-5 text-rose-400" />,
      description: "Strategic landing page design using Elementor or custom code, focused entirely on maximizing your leads and business ROI."
    },
    {
      title: "Speed & SEO Optimization",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      description: "Optimization from top to bottom — improving core web vitals, server-side performance, and search engine visibility."
    },
    {
      title: "Full Website Management",
      icon: <Smartphone className="w-5 h-5 text-purple-400" />,
      description: "ongoing maintenance, security monitoring, and content updates to keep your online presence running flawlessly 24/7."
    }
  ];

  const pricing = [
    {
      title: "Basic",
      price: "$50",
      description: "Custom 1 Page Website Design & Development or Figma to Frontend",
      features: ["Functional website", "1 page", "Content upload", "E-commerce functionality", "Payment Integration", "Social media icons", "Speed optimization", "4-day delivery"]
    },
    {
      title: "Professional",
      price: "$500",
      description: "Upto 8 Pages for startup business + Provided API Integration + Firebase Integration",
      popular: true,
      features: ["Functional website", "8 pages", "Content upload", "E-commerce functionality", "Payment Integration", "Social media icons", "Speed optimization", "10-day delivery"]
    },
    {
      title: "Standard",
      price: "$240",
      description: "Upto 5 Pages Design & Development from Figma to React, Nextjs",
      features: ["Functional website", "5 page", "Content upload", "E-commerce functionality", "Payment Integration", "Social media icons", "Speed optimization", "7-day delivery"]
    }
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h2 className={`text-[20px] font-bold transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>What I Do For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`border p-5 rounded-2xl flex gap-4 items-start group transition-all ${
                isDarkMode 
                ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/30" 
                : "bg-slate-50 border-slate-100 hover:border-indigo-500/20 shadow-sm"
              }`}
            >
              <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${isDarkMode ? "bg-slate-950" : "bg-white border border-slate-200 shadow-sm"}`}>
                {service.icon}
              </div>
              <div className="space-y-1">
                <h3 className={`text-[20px] font-bold group-hover:text-indigo-300 transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>{service.title}</h3>
                <p className={`text-[16px] leading-relaxed transition-colors ${isDarkMode ? "text-slate-500" : "text-slate-600 font-medium"}`}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className={`text-[20px] font-bold transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>Choose A Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`p-6 rounded-2xl border flex flex-col transition-all ${
                plan.popular 
                ? (isDarkMode 
                   ? "bg-indigo-500/5 border-indigo-500/50 scale-105 shadow-xl shadow-indigo-500/10" 
                   : "bg-indigo-50 border-indigo-200 scale-105 shadow-xl shadow-indigo-200/50")
                : (isDarkMode 
                   ? "bg-slate-900 border-slate-800 hover:border-slate-700" 
                   : "bg-slate-50 border-slate-100 hover:border-slate-200")
              }`}
            >
              <div className="text-center space-y-2 mb-6">
                <h3 className={`text-[20px] font-bold uppercase tracking-widest ${isDarkMode ? "text-white" : "text-slate-950"}`}>{plan.title}</h3>
                <div className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-slate-950"}`}>{plan.price}</div>
                <p className={`text-[16px] font-medium leading-relaxed px-2 ${isDarkMode ? "text-slate-500" : "text-slate-600"}`}>{plan.description}</p>
              </div>
              <div className="space-y-2 mb-8 flex-grow">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                    <span className={`text-[16px] font-medium ${isDarkMode ? "text-slate-400" : "text-slate-700 font-bold"}`}>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-2.5 rounded-xl text-[10px] uppercase font-black tracking-widest transition-all ${
                plan.popular 
                ? (isDarkMode ? "bg-white text-slate-950 hover:bg-indigo-400 hover:text-white" : "bg-indigo-600 text-white hover:bg-slate-950") 
                : (isDarkMode 
                   ? "bg-slate-950 text-white border border-slate-700 hover:border-indigo-500/50" 
                   : "bg-white text-slate-950 border border-slate-200 hover:border-indigo-500/50")
              }`}>
                Select {plan.title}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
