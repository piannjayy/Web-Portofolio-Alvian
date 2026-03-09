'use client'
import { motion, Variants } from 'framer-motion'

const projects = [
  {
    title: "Sistem Perpustakaan",
    tag: "Web App",
    year: "2025",
    desc: "Aplikasi manajemen data buku dan peminjaman menggunakan Laravel dengan optimasi UI modern dan sistem role-based access.",
    tech: [
      { name: "Laravel",      icon: "https://cdn.simpleicons.org/laravel/FF2D20"      },
      { name: "Livewire",     icon: "https://cdn.simpleicons.org/livewire/FB70A9"     },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "MySQL",        icon: "https://cdn.simpleicons.org/mysql/4479A1"        },
    ],
    accent: "#FF2D20",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    link: "https://github.com/piannjayy/laravel-library-system",
    stats: [
      { label: "Role Levels", value: "3"  },
      { label: "Modules",     value: "6+" },
    ],
  },
  {
    title: "React Movie App",
    tag: "Frontend",
    year: "2025",
    desc: "Platform pencarian film real-time yang mengintegrasikan API TMDB dengan fitur bookmark dan detail sinopsis interaktif.",
    tech: [
      { name: "React",        icon: "https://cdn.simpleicons.org/react/61DAFB"            },
      { name: "TMDB API",     icon: "https://cdn.simpleicons.org/themoviedatabase/01B4E4" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4"     },
    ],
    accent: "#61DAFB",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    link: "https://react-movie-app-one-eta.vercel.app",
    stats: [
      { label: "API Endpoints", value: "12+" },
      { label: "Features",      value: "5"   },
    ],
  },
  {
    title: "Serbu Computer",
    tag: "Fullstack",
    year: "2026",
    desc: "Sistem inventory dan kasir fullstack untuk toko laptop. Manajemen stok, riwayat transaksi, dan laporan penjualan terintegrasi.",
    tech: [
      { name: "Laravel",      icon: "https://cdn.simpleicons.org/laravel/FF2D20"      },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "MySQL",        icon: "https://cdn.simpleicons.org/mysql/4479A1"        },
    ],
    accent: "#FB70A9",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    link: "https://github.com/piannjayy/serbu-computer",
    stats: [
      { label: "Fitur Kasir", value: "8+" },
      { label: "DB Tables",   value: "10" },
    ],
  },
]

const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '64px 64px',
}

export default function Projects() {
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
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 bg-[#e2e8f0] dark:bg-[#1e2d3d] transition-colors duration-500 overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none" style={gridBg} />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#526D82]/[0.06] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-[#9DB2BF]/[0.06] to-transparent pointer-events-none" />

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
                Portfolio
              </span>
              <div className="w-8 h-px bg-[#526D82]/60" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-[-0.04em] leading-none">
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]">
                Works.
              </span>
            </h3>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full md:w-auto flex justify-end">
            <p className="max-w-[220px] text-slate-500 dark:text-[#9DB2BF]/60 font-medium text-xs leading-relaxed text-right border-r-2 border-[#526D82]/20 dark:border-[#9DB2BF]/20 pr-4">
              Proyek pilihan yang mencerminkan kemampuan membangun produk digital yang{' '}
              <span className="text-[#27374D] dark:text-[#DDE6ED] font-bold">nyata</span>.
            </p>
          </motion.div>
        </div>

        {/* ── PROJECT CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden
                bg-white/70 dark:bg-[#27374D]/60
                border border-[#526D82]/20 dark:border-[#9DB2BF]/10
                hover:border-[#526D82]/40 dark:hover:border-[#9DB2BF]/30
                backdrop-blur-sm flex flex-col
                transition-colors duration-300"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }}
              />

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${project.accent}10, transparent)` }}
              />

              <div className="relative z-10 p-5 md:p-7 flex flex-col gap-4 flex-1">

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="text-[8px] font-black uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}50`,
                        background: `${project.accent}15`,
                      }}
                    >
                      {project.tag}
                    </span>
                    <span className="text-[9px] font-bold text-[#526D82]/40 dark:text-[#9DB2BF]/30 tracking-widest">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Index + Title */}
                <div className="space-y-1">
                  <span className="text-[10px] font-black tracking-[0.4em] text-[#526D82]/30 dark:text-[#9DB2BF]/20 group-hover:text-[#526D82]/60 transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <h4 className="font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-tight text-sm md:text-[15px] leading-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {project.title}
                  </h4>
                </div>

                {/* Animated divider */}
                <div className="relative h-px w-full overflow-hidden rounded-full bg-[#526D82]/15 dark:bg-[#9DB2BF]/10">
                  <div
                    className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                    style={{ background: `linear-gradient(to right, ${project.accent}70, transparent)` }}
                  />
                </div>

                {/* Description */}
                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-[#9DB2BF]/50 font-medium flex-grow">
                  {project.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl px-3 py-2.5
                        border border-[#526D82]/10 dark:border-[#9DB2BF]/[0.08]
                        bg-[#526D82]/5 dark:bg-[#27374D]/80
                        group-hover:border-[#526D82]/25 dark:group-hover:border-[#9DB2BF]/20
                        transition-all duration-300"
                    >
                      <p
                        className="text-base font-black tabular-nums leading-none mb-0.5"
                        style={{ color: project.accent }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#526D82]/40 dark:text-[#9DB2BF]/30">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags + arrow */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tech.map((t) => (
                      <span
                        key={t.name}
                        className="flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.15em]
                          text-[#526D82]/50 dark:text-[#9DB2BF]/40
                          border border-[#526D82]/15 dark:border-[#9DB2BF]/10
                          px-2 py-1 rounded-full
                          group-hover:border-[#526D82]/35 dark:group-hover:border-[#9DB2BF]/25
                          group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF]
                          transition-all duration-300"
                      >
                        <img
                          src={t.icon}
                          alt=""
                          className="w-2.5 h-2.5 object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div
                    className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center
                      border-[#526D82]/20 dark:border-[#9DB2BF]/10
                      text-[#526D82]/30 dark:text-[#9DB2BF]/20
                      group-hover:border-[#526D82]/60 dark:group-hover:border-[#9DB2BF]/40
                      group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF]
                      group-hover:translate-x-1 group-hover:-translate-y-1
                      transition-all duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </motion.div>
    </section>
  )
}