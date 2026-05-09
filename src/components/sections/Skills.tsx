import { motion } from "motion/react";

export default function Skills({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const technicalSkills = [
    { title: "WORDPRESS", value: 93, color: "bg-indigo-500" },
    { title: "HTML5 / SEO", value: 90, color: "bg-emerald-500" },
    { title: "CSS3 / DESIGN", value: 87, color: "bg-amber-500" },
    { title: "JAVASCRIPT", value: 62, color: "bg-rose-500" },
    { title: "PHP / BACKEND", value: 75, color: "bg-cyan-500" },
  ];

  const specialtySkills = [
    { 
      id: "01.", 
      title: "WordPress Architecture", 
      color: "text-indigo-400",
      description: "Custom themes, plugins, and scalable multisite deployments."
    },
    { 
      id: "02.", 
      title: "React Ecosystem", 
      color: "text-emerald-400",
      description: "Building fast, interactive SPAs with Next.js and Tailwind CSS."
    },
    { 
      id: "03.", 
      title: "API Design & Dev", 
      color: "text-amber-400",
      description: "Robust RESTful and GraphQL endpoints for data-driven apps."
    },
    { 
      id: "04.", 
      title: "AI Implementation", 
      color: "text-rose-400",
      description: "Integrating Gemini and OpenAI for smarter, adaptive interfaces."
    },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-[20px] font-bold tracking-tight transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>Core Competencies</h2>
          <div className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-1 rounded-md transition-colors ${
            isDarkMode ? "text-slate-500 border-slate-800" : "text-slate-400 border-slate-100"
          }`}>
            Skill Set
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {technicalSkills.map((skill, idx) => (
            <div key={skill.title} className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <span className={`${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{skill.title}</span>
                <span className={`font-black transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>{skill.value}%</span>
              </div>
              <div className={`h-1.5 w-full rounded-full overflow-hidden border border-slate-800/50 transition-colors ${
                isDarkMode ? "bg-slate-900" : "bg-slate-100"
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-[20px] font-bold tracking-tight transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>Technical Proficiency</h2>
          <div className="flex gap-2">
            {["Production Ready", "Agile", "Modern"].map((tag) => (
              <span key={tag} className={`px-3 py-1 border rounded-lg text-[9px] font-bold uppercase tracking-widest transition-colors ${
                isDarkMode ? "bg-slate-900 text-slate-500 border-slate-800" : "bg-slate-50 text-slate-400 border-slate-100"
              }`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {specialtySkills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border p-5 rounded-2xl transition-all group relative overflow-hidden ${
                isDarkMode ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/10" : "bg-slate-50 border-slate-100 hover:border-indigo-500/10 shadow-sm"
              }`}
            >
              <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}>
                <div className={`${skill.color} font-black text-4xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity`}>{skill.id}</div>
              </div>
              <div className={`${skill.color} font-bold mb-2 text-xs tracking-tighter`}>{skill.id}</div>
              <div className={`text-[20px] font-bold mb-1 group-hover:text-indigo-300 transition-colors ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}>{skill.title}</div>
              <div className={`text-[16px] leading-relaxed font-medium transition-colors ${
                isDarkMode ? "text-slate-500" : "text-slate-700 font-bold"
              }`}>{skill.description}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
