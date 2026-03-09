'use client'
import { motion, Variants } from 'framer-motion'

const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '64px 64px',
}

export default function Contact() {
  const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }

  const fadeUp: Variants = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const cvExists = false
    if (!cvExists) {
      e.preventDefault()
      alert("CV masih nonaktif yahh!")
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-[#e2e8f0] dark:bg-[#1e2d3d] transition-colors duration-500 overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none" style={gridBg} />
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-[#526D82]/[0.06] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-gradient-to-tl from-[#9DB2BF]/[0.06] to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={sectionVariants}
      >

        {/* ── TOP DIVIDER ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#526D82]/30 to-transparent origin-left mb-16"
        />

        {/* ── MAIN ROW ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">

          {/* Left */}
          <motion.div variants={fadeUp} className="flex-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#526D82]/60" />
              <span className="text-[#526D82] dark:text-[#9DB2BF] text-[10px] font-black uppercase tracking-[0.6em]">
                Available for Partnerships
              </span>
              <div className="w-8 h-px bg-[#526D82]/60" />
            </div>

            <h3 className="text-4xl md:text-[3.8rem] font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-[-0.04em] leading-[0.92]">
              Let's create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]">
                something great.
              </span>
            </h3>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-1.5">
                {['#526D82', '#9DB2BF', '#DDE6ED'].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-[#e2e8f0] dark:border-[#1e2d3d]"
                    style={{ background: c, opacity: 0.5 - i * 0.1 }}
                  />
                ))}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#526D82]/40 dark:text-[#9DB2BF]/30">
                Let's connect
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp} className="flex-1 flex flex-col justify-end gap-10">

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
              <p className="text-slate-500 dark:text-[#9DB2BF]/60 font-medium max-w-[260px] text-sm leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
              </p>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#526D82]/15 dark:border-[#9DB2BF]/10 bg-[#526D82]/5 dark:bg-[#27374D]/60 self-start shrink-0">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.35em] text-[#526D82]/60 dark:text-[#9DB2BF]/50">
                  Available · Malang
                </span>
              </div>
            </div>

            {/* ── LINKS ── */}
            <div className="flex flex-col">

              {/* Email — group lives ON the <a> */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jalulajula696@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between
                  border-t border-[#526D82]/15 dark:border-[#9DB2BF]/10
                  hover:border-[#526D82]/35 dark:hover:border-[#9DB2BF]/25
                  py-7 overflow-hidden transition-colors duration-300"
              >
                {/* sweep bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, rgba(82,109,130,0.06) 0%, transparent 55%)' }}
                />

                {/* Label */}
                <span className="relative z-10 text-2xl md:text-[1.8rem] font-black uppercase tracking-tight text-[#27374D] dark:text-[#DDE6ED] group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  Send an Email
                </span>

                {/* Right side: sub text + arrow */}
                <div className="relative z-10 flex items-center gap-4 shrink-0">
                  <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.25em] text-[#526D82]/0 group-hover:text-[#526D82]/50 dark:group-hover:text-[#9DB2BF]/40 transition-colors duration-500">
                    jalulajula696@gmail.com
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#526D82]/20 dark:border-[#9DB2BF]/10 flex items-center justify-center
                    text-[#526D82]/30 dark:text-[#9DB2BF]/20
                    group-hover:border-[#526D82]/70 dark:group-hover:border-[#9DB2BF]/50
                    group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF]
                    group-hover:bg-[#526D82]/8
                    group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                    transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-[360deg] transition-transform duration-700">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* bottom line grow */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ background: 'linear-gradient(to right, #526D82, rgba(82,109,130,0.15), transparent)' }}
                />
              </a>

              {/* Download CV */}
              <a
                href="/cv-alvian-aditya.pdf"
                onClick={handleDownloadCV}
                download
                className="group relative flex items-center justify-between
                  border-t border-b border-[#526D82]/15 dark:border-[#9DB2BF]/10
                  hover:border-[#526D82]/35 dark:hover:border-[#9DB2BF]/25
                  py-7 overflow-hidden transition-colors duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, rgba(157,178,191,0.06) 0%, transparent 55%)' }}
                />

                <span className="relative z-10 text-2xl md:text-[1.8rem] font-black uppercase tracking-tight text-[#27374D] dark:text-[#DDE6ED] group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  Download CV
                </span>

                <div className="relative z-10 flex items-center gap-4 shrink-0">
                  <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.25em] text-[#526D82]/0 group-hover:text-[#526D82]/50 dark:group-hover:text-[#9DB2BF]/40 transition-colors duration-500">
                    PDF Format
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#526D82]/20 dark:border-[#9DB2BF]/10 flex items-center justify-center
                    text-[#526D82]/30 dark:text-[#9DB2BF]/20
                    group-hover:border-[#9DB2BF]/70
                    group-hover:text-[#9DB2BF]
                    group-hover:bg-[#9DB2BF]/8
                    group-hover:scale-110 group-hover:translate-y-0.5
                    transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-0.5 transition-transform duration-300">
                      <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ background: 'linear-gradient(to right, #9DB2BF, rgba(157,178,191,0.15), transparent)' }}
                />
              </a>

            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}