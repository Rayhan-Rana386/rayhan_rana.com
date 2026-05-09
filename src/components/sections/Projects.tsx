import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Projects({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const projects = [
    {
      title: "Luxe Arabian Scents",
      category: "E-commerce Website Design",
      description: "A premium fragrance online store with an elegant design and seamless shopping experience.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_28.png",
      link: "https://luxearabianscents.com/",
    },
    {
      title: "Tawfiq Computer",
      category: "E-Commerce Solution",
      description: "A robust online computer store with advanced filtering, secure checkout, and inventory tracking.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_26.png",
      link: "https://tawfiqcomputer.com/",
    },
    {
      title: "SR Digital Agency",
      category: "Digital Agency Website",
      description: "A dynamic portfolio website for a digital agency, optimized for speed and high lead conversions.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_25.png",
      link: "https://srdigitalagency.net/",
    },
    {
      title: "Escape to Paradise",
      category: "Resort Booking Interface",
      description: "A result-oriented resort booking platform with immersive visuals and intuitive user flow.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_30.png",
      link: "https://dev-sikderresortcom.pantheonsite.io/",
    },
    {
      title: "Premium Aesthetic Medical Center",
      category: "Medical Website Design",
      description: "A clean and professional medical website focused on aesthetic treatments and patient engagement.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_32.png",
      link: "https://dev-behandlungen.pantheonsite.io/",
    },
    {
      title: "Modern Hijab & Modest Wear",
      category: "Fashion Online Store",
      description: "A stylish and modern UI concept for a modest fashion brand, prioritizing clarity and elegance.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_33.png",
      link: "https://dev-healthrana.pantheonsite.io/",
    },
    {
      title: "Rifat Academy",
      category: "E-Learning Platform",
      description: "A comprehensive UI design for an online learning community with powerful management features.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_34.png",
      link: "https://dev-academy-rifat.pantheonsite.io/",
    },
    {
      title: "Health & Aesthetics",
      category: "Wellness & Beauty",
      description: "Where beauty meets wellness—a professional platform for integrated health and aesthetic services.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_31.png",
      link: "https://dev-healthaesthetics.pantheonsite.io/",
    },
    {
      title: "Bonsai Philosophy",
      category: "Nature & Architecture",
      description: "A unique design blending nature with modern architecture for a harmonious digital experience.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_29.png",
      link: "https://dev-bonsaitrana.pantheonsite.io/",
    },
    {
      title: "Hi-Tech Power BD",
      category: "Corporate Platform",
      description: "A full-scale corporate platform for power solutions, featuring custom product catalogs and inquiry systems.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_27.png",
      link: "https://hitechpowerbd.com/",
    },
    {
      title: "Men’s Fashion E-commerce",
      category: "Fashion Retail",
      description: "A sleek and efficient online shopping platform tailored for modern men's fashion needs.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_35.png",
      link: "https://dev-talha-com.pantheonsite.io/",
    },
    {
      title: "Modern Drain Cleaning",
      category: "Service Website",
      description: "A conversion-focused landing page for professional drain cleaning and restoration services.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_36.png",
      link: "https://dev-drain-cleaning-one.pantheonsite.io/",
    },
    {
      title: "Residential Plumbing Pro",
      category: "Service Interface",
      description: "A specialized interface for high-end residential plumbing services with instant booking.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_37.png",
      link: "https://dev-residential-plumbing-three.pantheonsite.io/",
    },
    {
      title: "Expert Plumbing Solutions",
      category: "B2B & Residential",
      description: "Professional plumbing solutions designed for reliability and comprehensive property care.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_38.png",
      link: "https://dev-residential-plumbing-four.pantheonsite.io/",
    },
    {
      title: "Premium Plumber Services",
      category: "Home Maintenance",
      description: "A high-performance website for premium plumbing and emergency home maintenance.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_39.png",
      link: "https://dev-residential-plumbing-five.pantheonsite.io/",
    },
    {
      title: "Drain Restoration Specialists",
      category: "Infrastructure Care",
      description: "Detailed service platform for specialized drain restoration and infrastructure care.",
      image: "https://dev-drain-cleaning-one.pantheonsite.io/wp-content/uploads/2026/05/Screenshot_40.png",
      link: "https://dev-drain-cleaning-tow.pantheonsite.io/",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-[20px] font-bold transition-colors ${isDarkMode ? "text-white" : "text-slate-950"}`}>Selected Works</h2>
        <div className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-1 rounded-md transition-colors ${
          isDarkMode ? "text-slate-500 border-slate-800" : "text-slate-400 border-slate-100"
        }`}>
          {projects.length} Total
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="relative overflow-hidden aspect-video rounded-xl mb-6">
              {/* Main Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Interaction Overlay */}
              <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                isDarkMode ? "bg-slate-950/40" : "bg-white/20"
              } backdrop-blur-[2px] flex items-center justify-center`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 ${
                  isDarkMode ? "bg-white text-slate-950" : "bg-slate-950 text-white"
                }`}>
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Index Number */}
              <div className="absolute top-6 left-6 mix-blend-difference">
                <span className="text-4xl font-display font-black text-white/20">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                  isDarkMode ? "text-indigo-400" : "text-indigo-600"
                }`}>
                  {project.category}
                </span>
                <div className={`h-px w-8 transition-all duration-500 group-hover:w-16 ${
                  isDarkMode ? "bg-slate-800" : "bg-slate-200"
                }`} />
              </div>
              
              <h3 className={`text-2xl font-black leading-tight transition-colors ${
                isDarkMode ? "text-white group-hover:text-indigo-400" : "text-slate-950 group-hover:text-indigo-600"
              }`}>
                {project.title}
              </h3>
              
              <p className={`text-sm leading-relaxed line-clamp-2 transition-opacity duration-500 ${
                isDarkMode ? "text-slate-400 group-hover:text-slate-300" : "text-slate-600 group-hover:text-slate-900"
              }`}>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
