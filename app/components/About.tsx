'use client'
import { motion, Variants, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // foto parallax naik sedikit saat scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  }

  const fadeUp: Variants = {
    hidden:   { opacity: 0, y: 36 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  }

  const fadeLeft: Variants = {
    hidden:   { opacity: 0, x: -32 },
    visible:  { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  }

  const fadeRight: Variants = {
    hidden:   { opacity: 0, x: 32 },
    visible:  { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-16 px-6 flex items-center justify-center bg-[#f1f5f9] dark:bg-[#27374D] transition-colors duration-500 overflow-hidden font-sans"
    >
      <style jsx>{`
        /* Thinline grid dekorasi background */
        .about-grid {
          background-image:
            linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* Foto clip mask — asimetris */
        .photo-clip {
          clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
          transition: clip-path 0.7s ease;
        }
        .photo-wrap:hover .photo-clip {
          clip-path: polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }

        /* Quote serif style */
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 5rem;
          line-height: 0.6;
          color: #526D82;
          opacity: 0.25;
          user-select: none;
        }

        /* Stat number */
        .stat-num {
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.05em;
        }

        /* Underline tumbuh dari kiri */
        .underline-grow {
          position: relative;
          display: inline-block;
        }
        .underline-grow::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 100%; height: 1.5px;
          background: #526D82;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .underline-grow:hover::after { transform: scaleX(1); }
      `}</style>

      {/* Grid bg */}
      <div className="about-grid absolute inset-0 pointer-events-none" />

      {/* Gradient overlay pojok */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#526D82]/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-[#9DB2BF]/8 to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={sectionVariants}
      >

        {/* ── SECTION LABEL ── */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#526D82]/60" />
          <span className="text-[#526D82] dark:text-[#9DB2BF] text-[10px] font-black uppercase tracking-[0.6em]">
            Personal Story
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#526D82]/30 to-transparent" />
          <span className="text-[#526D82]/40 dark:text-[#9DB2BF]/30 text-[10px] font-mono tracking-widest">01</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 xl:gap-20">

          {/* ═══════════════════════
              KIRI — FOTO
          ═══════════════════════ */}
          <motion.div
            variants={fadeLeft}
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          >
            <div className="photo-wrap relative group w-72 md:w-80 lg:w-full max-w-sm">

              {/* Border dekoratif belakang foto */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#526D82]/25 dark:border-[#9DB2BF]/20 rounded-[2rem_0.5rem_2rem_0.5rem] transition-transform duration-700 group-hover:translate-x-2.5 group-hover:translate-y-2.5 pointer-events-none" />

              {/* Dot grid dekor pojok kiri bawah */}
              <div className="absolute -left-6 -bottom-6 grid grid-cols-4 gap-[5px] pointer-events-none opacity-50">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#526D82]/50 dark:bg-[#9DB2BF]/40" />
                ))}
              </div>

              {/* Foto */}
              <motion.div
                style={{ y: imgY }}
                className="relative overflow-hidden photo-clip rounded-[2.5rem_0.75rem_2.5rem_0.75rem] shadow-[0_24px_60px_rgba(39,55,77,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
              >
                {/* Overlay tint */}
                <div className="absolute inset-0 bg-[#27374D]/15 group-hover:bg-transparent transition-colors duration-700 z-10" />

                <img
                  src="/foto-profile.jpg"
                  alt="Alvian Aditya"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-[1.08] group-hover:scale-100"
                />

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </motion.div>

              {/* Badge Dev Mode */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-6 z-20 hidden md:flex items-center gap-2 bg-white dark:bg-[#1e2d3d] px-3.5 py-2.5 rounded-xl shadow-[0_8px_24px_rgba(39,55,77,0.15)] border border-slate-100 dark:border-slate-700/60"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-[#27374D] dark:text-[#DDE6ED]">
                  Dev Mode
                </span>
              </motion.div>

              {/* Badge lokasi */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -right-4 z-20 hidden md:flex items-center gap-2 bg-white dark:bg-[#1e2d3d] px-3.5 py-2.5 rounded-xl shadow-[0_8px_24px_rgba(39,55,77,0.15)] border border-slate-100 dark:border-slate-700/60"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-[#526D82] dark:text-[#9DB2BF]">
                  Malang, ID
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ═══════════════════════
              KANAN — TEKS
          ═══════════════════════ */}
          <div className="w-full lg:w-7/12 space-y-7">

            {/* Heading */}
            <motion.div variants={fadeRight} className="space-y-3">
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#27374D] dark:text-[#DDE6ED] leading-[1.05] tracking-[-0.04em] uppercase">
                Developing<br />
                with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]">
                  Purpose.
                </span>
              </h3>
            </motion.div>

            {/* Paragraf */}
            <motion.div variants={fadeRight} className="space-y-4 text-base md:text-[16px] text-slate-600 dark:text-[#DDE6ED]/65 leading-[1.75] font-medium">
              <p>
                Halo! Saya{' '}
                <span className="underline-grow text-[#27374D] dark:text-white font-bold">
                  Alvian Aditya
                </span>
                {' '}— pengembang web yang antusias membangun aplikasi bersih dan responsif yang benar-benar berguna.
              </p>
              <p>
                Saya punya pengalaman membangun Sistem Manajemen untuk operasional bisnis di{' '}
                <span className="italic text-[#27374D] dark:text-white/80">Serbu Computer</span>
                {' '}berbasis{' '}
                <span className="text-[#27374D] dark:text-white font-bold">Full-stack Laravel</span>.
                Sekarang saya aktif mengeksplorasi ekosistem{' '}
                <span className="text-[#27374D] dark:text-white font-bold">React & Next.js</span>
                , termasuk integrasi{' '}
                <span className="text-[#27374D] dark:text-white font-bold">API eksternal</span>.
              </p>
            </motion.div>

            {/* Core Tech row */}
            <motion.div variants={fadeRight} className="flex items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#526D82]/60 dark:text-[#9DB2BF]/50 shrink-0">
                Core Tech
              </span>
              <div className="flex gap-2 flex-wrap">
                {['Laravel', 'Next.js', 'React', 'MySQL', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border border-[#526D82]/25 dark:border-[#9DB2BF]/20 text-[#526D82] dark:text-[#9DB2BF] hover:bg-[#526D82]/8 dark:hover:bg-[#9DB2BF]/8 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div variants={fadeRight}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative pl-6 border-l-2 border-[#526D82]/35 dark:border-[#9DB2BF]/25 cursor-default group"
              >
                <span className="quote-mark absolute -top-3 -left-1">"</span>
                <p className="italic text-m text-[#526D82] dark:text-[#9DB2BF] leading-relaxed group-hover:text-[#27374D] dark:group-hover:text-white transition-colors duration-300">
                  Jika melakukan coding di malam ganjil, Apakah bisa disebut Lailatul Coder? Nawaitu shauma ngoding.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
