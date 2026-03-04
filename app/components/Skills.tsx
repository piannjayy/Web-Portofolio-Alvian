'use client'
import { motion, Variants } from 'framer-motion'

export default function Skills() {
  const techStacks = [
    { name: "Next.js", level: "Advanced", icon: "https://cdn.simpleicons.org/nextdotjs/000000/white", color: "hover:border-white" },
    { name: "Laravel", level: "Expert", icon: "https://cdn.simpleicons.org/laravel/FF2D20", color: "hover:border-[#FF2D20]" },
    { name: "React", level: "Advanced", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "hover:border-[#61DAFB]" },
    { name: "PHP", level: "Expert", icon: "https://cdn.simpleicons.org/php/777BB4", color: "hover:border-[#777BB4]" },
    { name: "Tailwind CSS", level: "Expert", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "hover:border-[#06B6D4]" },
    { name: "Alpine.js", level: "Intermediate", icon: "https://cdn.simpleicons.org/alpinedotjs/8BC0D0", color: "hover:border-[#8BC0D0]" },
    { name: "MySQL", level: "Advanced", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "hover:border-[#4479A1]" },
    { name: "JavaScript", level: "Advanced", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "hover:border-[#F7DF1E]" },
  ]

  // Tambahkan ": Variants" untuk mendefinisikan tipe data di TSX
  const fullSectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        // Tambahkan "as const" agar TS tidak menganggap ini cuma number[] biasa
        ease: [0.16, 1, 0.3, 1] as const, 
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-32 px-6 bg-[#e2e8f0] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={fullSectionVariants}
      >
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.5em] font-black text-slate-500 dark:text-slate-500">
              Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white uppercase tracking-tighter leading-none">
              Tech <span className="text-slate-400 dark:text-slate-700">Stack.</span>
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 dark:text-slate-400 font-medium text-sm md:text-right leading-relaxed">
            Teknologi modern yang saya gunakan untuk mengubah ide menjadi produk digital yang scalable.
          </p>
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {techStacks.map((tech) => (
            <motion.div 
              key={tech.name} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 rounded-3xl transition-all duration-500 ${tech.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-200/50 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-black text-slate-950 dark:text-white uppercase tracking-tight text-lg">
                    {tech.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-950 dark:group-hover:bg-white transition-colors" />
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {tech.level}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}