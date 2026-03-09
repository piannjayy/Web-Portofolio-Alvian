'use client'
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  // 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 30 })
  const cardScale = useSpring(1, { stiffness: 300, damping: 30 })

  // Glare position (0%–100%)
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])
  const glareStyle = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18) 0%, transparent 65%)`

  // Color reveal: cursor distance from center (0 = center, 1 = edge)
  // We store raw px position relative to card to drive a CSS mask on the color layer
  const rawX = useMotionValue(0.5) // 0–1 normalized
  const rawY = useMotionValue(0.5) // 0–1 normalized
  const springRawX = useSpring(rawX, { stiffness: 120, damping: 25 })
  const springRawY = useSpring(rawY, { stiffness: 120, damping: 25 })

  // Radius of color reveal circle: 0 at center → 0%, edge → 120%
  const revealRadius = useMotionValue('0%')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width   // 0–1
    const ny = (e.clientY - rect.top)  / rect.height  // 0–1
    const cx = nx - 0.5  // -0.5 to 0.5 for tilt
    const cy = ny - 0.5

    mouseX.set(cx)
    mouseY.set(cy)
    rawX.set(nx)
    rawY.set(ny)

    // Distance from center (0 = center, ~0.707 = corner)
    const dist = Math.sqrt(cx * cx + cy * cy)
    // Map: center (0) → radius 0%, edge (0.5+) → radius 120%
    const radius = Math.min(dist / 0.5, 1) * 120
    revealRadius.set(`${radius}%`)
  }

  const handleMouseEnter = () => {
    cardScale.set(1.03)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    rawX.set(0.5)
    rawY.set(0.5)
    revealRadius.set('0%')
    cardScale.set(1)
  }

  // CSS mask: circle reveal centered on cursor
  const maskX = useMotionTemplate`${useTransform(springRawX, v => `${v * 100}%`)}`
  const maskY = useMotionTemplate`${useTransform(springRawY, v => `${v * 100}%`)}`

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
        .about-grid {
          background-image:
            linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 5rem;
          line-height: 0.6;
          color: #526D82;
          opacity: 0.25;
          user-select: none;
        }
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
        .tech-tag:hover {
          background: rgba(82, 109, 130, 0.08);
        }
      `}</style>

      <div className="about-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[rgba(82,109,130,0.08)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-[rgba(157,178,191,0.08)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20 bg-gradient-to-b from-transparent to-[#e2e8f0] dark:to-[#1e2d3d] transition-colors duration-500" />

      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={sectionVariants}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#526D82]/60" />
          <span className="text-[#526D82] dark:text-[#9DB2BF] text-[10px] font-black uppercase tracking-[0.6em]">
            Personal Story
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#526D82]/30 to-transparent" />
          <span className="text-[#526D82]/40 dark:text-[#9DB2BF]/30 text-[10px] font-mono tracking-widest">01</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 xl:gap-20">

          {/* ═══ KIRI — 3D CARD ═══ */}
          <motion.div variants={fadeLeft} className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div
              className="w-72 md:w-80 lg:w-full max-w-sm"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  scale: cardScale,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Drop shadow */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem] pointer-events-none"
                  style={{
                    transform: 'translateZ(-30px) scale(0.92)',
                    background: 'radial-gradient(ellipse at center, rgba(39,55,77,0.4) 0%, transparent 70%)',
                    filter: 'blur(28px)',
                  }}
                />

                {/* Card */}
                <div
                  className="relative rounded-[2rem] overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 32px 64px rgba(39,55,77,0.18), 0 8px 24px rgba(39,55,77,0.10), inset 0 1px 0 rgba(255,255,255,0.12)',
                  }}
                >
                  {/* BASE: grayscale foto */}
                  <motion.div style={{ y: imgY }}>
                    <img
                      src="/foto-profile.jpg"
                      alt="Alvian Aditya"
                      className="w-full aspect-[3/4] object-cover"
                      style={{ filter: 'grayscale(1)', display: 'block' }}
                    />
                  </motion.div>

                  {/* COLOR LAYER: full color, di-mask pakai radial gradient dari posisi cursor */}
                  {/* Makin jauh dari center → makin besar reveal circle */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      WebkitMaskImage: useMotionTemplate`radial-gradient(circle ${revealRadius} at ${maskX} ${maskY}, black 0%, transparent 100%)`,
                      maskImage: useMotionTemplate`radial-gradient(circle ${revealRadius} at ${maskX} ${maskY}, black 0%, transparent 100%)`,
                    }}
                  >
                    <motion.div style={{ y: imgY }}>
                      <img
                        src="/foto-profile.jpg"
                        alt=""
                        aria-hidden="true"
                        className="w-full aspect-[3/4] object-cover"
                        style={{ display: 'block' }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Gradient overlay bawah */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(39,55,77,0.75) 0%, rgba(39,55,77,0.1) 45%, transparent 100%)' }}
                  />

                  {/* Glare */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: glareStyle, mixBlendMode: 'overlay' }}
                  />

                  {/* Border */}
                  <div className="absolute inset-0 rounded-[2rem] pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.12)' }} />

                  {/* Label bawah */}
                  <div className="absolute bottom-0 left-0 right-0 p-5" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/50 text-[9px] font-black uppercase tracking-[0.4em] mb-1">Fullstack Dev</p>
                        <p className="text-white font-black text-base uppercase tracking-tight leading-none">Alvian Aditya</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Malang, ID</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Dev Mode */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-white dark:bg-[#1e2d3d] px-3.5 py-2.5 rounded-xl border border-slate-100 dark:border-slate-700/60"
                  style={{ transform: 'translateZ(50px)', boxShadow: '0 8px 24px rgba(39,55,77,0.18)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#27374D] dark:text-[#DDE6ED]">Dev Mode</span>
                </motion.div>

                {/* Corner bracket */}
                <div className="absolute top-3 right-3 z-20 pointer-events-none" style={{ transform: 'translateZ(25px)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 0 L18 0 L18 18" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Dot grid */}
                <div className="absolute -left-5 -bottom-5 grid grid-cols-4 gap-[5px] pointer-events-none opacity-40" style={{ transform: 'translateZ(-10px)' }}>
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-[#526D82]/50 dark:bg-[#9DB2BF]/40" />
                  ))}
                </div>

                {/* Back border */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] border border-[#526D82]/20 dark:border-[#9DB2BF]/15 pointer-events-none"
                  style={{ transform: 'translateZ(-20px)' }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ═══ KANAN — TEKS ═══ */}
          <div className="w-full lg:w-7/12 space-y-7">

            <motion.div variants={fadeRight} className="space-y-3">
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#27374D] dark:text-[#DDE6ED] leading-[1.05] tracking-[-0.04em] uppercase">
                Developing<br />
                with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]">
                  Purpose.
                </span>
              </h3>
            </motion.div>

            <motion.div variants={fadeRight} className="space-y-4 text-base md:text-[16px] text-slate-600 dark:text-[#DDE6ED]/60 leading-[1.75] font-medium">
              <p>
                Halo! Saya{' '}
                <span className="underline-grow text-[#27374D] dark:text-white font-bold">Alvian Aditya</span>
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

            <motion.div variants={fadeRight} className="flex items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#526D82]/60 dark:text-[#9DB2BF]/50 shrink-0">
                Core Tech
              </span>
              <div className="flex gap-2 flex-wrap">
                {['Laravel', 'Next.js', 'React', 'MySQL', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border border-[#526D82]/25 dark:border-[#9DB2BF]/20 text-[#526D82] dark:text-[#9DB2BF] transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeRight}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative pl-6 border-l-2 border-[#526D82]/30 dark:border-[#9DB2BF]/25 cursor-default group"
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