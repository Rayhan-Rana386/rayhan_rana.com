import { motion } from "motion/react";

export default function About({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const experiences = [
    { year: "2024 - PRESENT", role: "WEB DEVELOPER", company: "Marketplace" },
    { year: "2024 - PRESENT", role: "CEO", company: "TechZ IT" },
    { year: "2025 - PRESENT", role: "FULL-STACK WEB DEVELOPER", company: "WebByte Studio" }
  ];

  const education = [
    { year: "PRESENT", degree: "BACHELOR DEGREE HONOURS", school: "Subidkhali University" },
    { year: "2024 - 2025", degree: "WEB DEVELOPMENT COURSE", school: "Rifat Academy" },
    { year: "2020 - 2021", degree: "Higher Secondary Certificate", school: "Subidkhali University" }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Background</h3>
          <p className={`text-[16px] leading-relaxed transition-colors ${
            isDarkMode ? "text-slate-400" : "text-slate-700 font-medium"
          }`}>
            Hello, I am <span className={`${isDarkMode ? "text-white" : "text-slate-950"} font-black`}>Rayhan Rana</span>, a specialized <span className="text-indigo-400">Creative WordPress Developer</span>. I build, optimize, and manage websites from top to bottom, ensuring they are not only functional but also aligned with your brand's unique goals. My mission is to make your ideas real through high-performance digital experiences. Since 2016, I've been dedicated to crafting solutions that help business owners achieve their online vision.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className={`p-4 border rounded-2xl relative overflow-hidden group transition-colors ${
            isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100"
          }`}>
            <div className={`absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 ${isDarkMode ? "text-white" : "text-slate-950"}`}>
               <div className="font-black tracking-tighter text-2xl">08+</div>
            </div>
            <div className="text-2xl font-black text-indigo-400 leading-none mb-1">08+</div>
            <div className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Years Experience</div>
          </div>
          <div className={`p-4 border rounded-2xl relative overflow-hidden group transition-colors ${
            isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100"
          }`}>
            <div className={`absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 ${isDarkMode ? "text-white" : "text-slate-950"}`}>
               <div className="font-black tracking-tighter text-2xl">150+</div>
            </div>
            <div className="text-2xl font-black text-emerald-400 leading-none mb-1">150+</div>
            <div className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Projects Done</div>
          </div>
        </div>
      </motion.div>

      <section className="space-y-6">
        <h2 className={`text-[20px] font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Sophia Williams", text: "Rayhan is a great developer. He did a great job for me. I am very happy with his work.", role: "Business Owner" },
            { name: "James Carter", text: "Highly recommended. Excellent communication and top-tier technical skills for our WordPress setup.", role: "CEO, Tech Corp" },
            { name: "Olivia Brown", text: "He delivered exactly what I needed on time. His attention to detail is truly impressive.", role: "Founder, Bloom" },
            { name: "Rahat Khan", text: "Outstanding work. Rayhan is easily the best developer I've worked with on complex WordPress projects.", role: "Marketing Director" }
          ].map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-5 rounded-2xl border ${
                isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100 shadow-sm"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-2 h-2 rounded-full bg-amber-400" />)}
              </div>
              <p className={`text-[16px] leading-relaxed mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-600 font-medium"}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] ${isDarkMode ? "bg-slate-800 text-white" : "bg-white border text-slate-900"}`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`text-[10px] font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>{testimonial.name}</div>
                  <div className={`text-[9px] font-bold uppercase tracking-widest ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className={`text-[20px] font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border p-4 rounded-xl relative overflow-hidden group transition-colors ${
                  isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-100"
                }`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform" />
                <div className="text-[12px] font-bold text-indigo-400 mb-1">{exp.year}</div>
                <div className={`text-[20px] font-bold mb-0.5 tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>{exp.role}</div>
                <div className={`text-[16px] ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{exp.company}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={`text-[20px] font-bold tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border p-4 rounded-xl relative overflow-hidden group transition-colors ${
                  isDarkMode ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-100"
                }`}
              >
                <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500 translate-x-[100%] group-hover:translate-x-0 transition-transform" />
                <div className="text-[12px] font-bold text-emerald-400 mb-1">{edu.year}</div>
                <div className={`text-[20px] font-bold mb-0.5 tracking-tight ${isDarkMode ? "text-white" : "text-slate-950"}`}>{edu.degree}</div>
                <div className={`text-[16px] ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{edu.school}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
