'use client'
import { motion, Variants } from 'framer-motion'

const techStacks = [
  { name: "Next.js",      level: "Advanced", icon: "https://cdn.simpleicons.org/nextdotjs/27374D/DDE6ED", accent: "#526D82" },
  { name: "Laravel",      level: "Expert",   icon: "https://cdn.simpleicons.org/laravel/FF2D20",          accent: "#FF2D20" },
  { name: "React",        level: "Advanced", icon: "https://cdn.simpleicons.org/react/61DAFB",            accent: "#61DAFB" },
  { name: "Tailwind CSS", level: "Expert",   icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",      accent: "#06B6D4" },
  { name: "TypeScript",   level: "Advanced", icon: "https://cdn.simpleicons.org/typescript/3178C6",       accent: "#3178C6" },
  { name: "PHP",          level: "Expert",   icon: "https://cdn.simpleicons.org/php/777BB4",              accent: "#777BB4" },
  { name: "JavaScript",   level: "Advanced", icon: "https://cdn.simpleicons.org/javascript/F7DF1E",       accent: "#F7DF1E" },
  { name: "MySQL",        level: "Advanced", icon: "https://cdn.simpleicons.org/mysql/4479A1",            accent: "#4479A1" },
]

const otherTools = [
  { name: "Livewire",   icon: "https://cdn.simpleicons.org/livewire/FB70A9" },
  { name: "Bootstrap",  icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Composer",   icon: "https://cdn.simpleicons.org/composer/885630" },
  { name: "Postman",    icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: ".NET",       icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { name: "Git",        icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",     icon: "https://cdn.simpleicons.org/github/27374D/DDE6ED" },
  { name: "Node.js",    icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Axios",      icon: "https://cdn.simpleicons.org/axios/5A29E4" },
]

const levelBar: Record<string, number> = {
  Expert: 95, Advanced: 78, Intermediate: 55,
}

export default function Skills() {
  const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  }

  const fadeUp: Variants = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const cardVariants: Variants = {
    hidden:  { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 bg-[#e2e8f0] dark:bg-[#1e2d3d] transition-colors duration-500 overflow-hidden font-sans"
    >
      <style jsx>{`
        /* Grid bg — konsisten sama About */
        .skills-grid {
          background-image:
            linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* Card hover accent glow */
        .skill-card {
          transition: transform 0.25s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .skill-card:hover {
          box-shadow: 0 12px 40px rgba(39,55,77,0.10);
        }
        :global(.dark) .skill-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }
      `}</style>

      {/* Grid bg */}
      <div className="skills-grid absolute inset-0 pointer-events-none" />

      {/* Gradient corner — sama arah sama About tapi dibalik */}
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-[#526D82]/6 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-gradient-to-tl from-[#9DB2BF]/6 to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={sectionVariants}
      >

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
          <motion.div variants={fadeUp} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#526D82]/60" />
              <span className="text-[#526D82] dark:text-[#9DB2BF] text-[10px] font-black uppercase tracking-[0.6em]">
                Expertise
              </span>
              <div className="w-8 h-px bg-[#526D82]/60" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-[-0.04em] leading-none">
              Tech{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]">
                Stack.
              </span>
            </h3>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full md:w-auto flex justify-end">
            <p className="max-w-[220px] text-slate-500 dark:text-[#9DB2BF]/60 font-medium text-xs leading-relaxed text-right border-r-2 border-[#526D82]/20 dark:border-[#9DB2BF]/20 pr-4">
              Teknologi modern untuk membangun produk digital yang{' '}
              <span className="text-[#27374D] dark:text-[#DDE6ED] font-bold">scalable</span>.
            </p>
          </motion.div>
        </div>

        {/* ── GRID CARDS ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {techStacks.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="skill-card group relative rounded-2xl md:rounded-3xl overflow-hidden
                bg-white/70 dark:bg-[#27374D]/60
                border border-[#526D82]/20 dark:border-[#9DB2BF]/10
                hover:border-[#526D82]/40 dark:hover:border-[#9DB2BF]/30
                backdrop-blur-sm"
            >
              {/* Accent top border warna brand tech */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${tech.accent}, transparent)` }}
              />

              <div className="relative z-10 p-5 md:p-7 flex flex-col gap-5">
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>

                {/* Name & level */}
                <div className="space-y-2">
                  <h4 className="font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-tight text-sm md:text-base leading-tight">
                    {tech.name}
                  </h4>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="h-[3px] w-full rounded-full bg-[#526D82]/20 dark:bg-[#9DB2BF]/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: tech.accent }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelBar[tech.level]}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#526D82]/60 dark:text-[#9DB2BF]/50 group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF] transition-colors">
                        {tech.level}
                      </p>
                      <p className="text-[9px] font-bold tabular-nums text-[#526D82]/40 dark:text-[#9DB2BF]/30 group-hover:text-[#526D82]/70 transition-colors">
                        {levelBar[tech.level]}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MARQUEE ROW 1 — main tech (kanan ke kiri) ── */}
        <motion.div variants={fadeUp} className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#e2e8f0] dark:from-[#1e2d3d] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#e2e8f0] dark:from-[#1e2d3d] to-transparent z-10" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...techStacks, ...techStacks].map((tech, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[#526D82]/30 dark:text-[#9DB2BF]/20">
                <img src={tech.icon} alt="" className="w-4 h-4 object-contain opacity-40 grayscale" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">{tech.name}</span>
                <span className="opacity-40">·</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── MARQUEE ROW 2 — other tools (kiri ke kanan, arah balik) ── */}
        <motion.div variants={fadeUp} className="mt-3 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#e2e8f0] dark:from-[#1e2d3d] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#e2e8f0] dark:from-[#1e2d3d] to-transparent z-10" />
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...otherTools, ...otherTools].map((tool, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[#526D82]/20 dark:text-[#9DB2BF]/10">
                <img src={tool.icon} alt="" className="w-4 h-4 object-contain opacity-30 grayscale" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">{tool.name}</span>
                <span className="opacity-30">·</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}
