'use client'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 })

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const mainOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const mainScale   = useTransform(scrollYProgress, [0, 0.4], [1, 0.95])
  const yTranslate  = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const orbY1       = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const orbY2       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const sideY       = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const orb1X = useTransform(springX, (v) => (v - 800) * 0.08)
  const orb1Y = useTransform(springY, (v) => (v - 400) * 0.08)
  const orb2X = useTransform(springX, (v) => (v - 800) * -0.04)
  const orb2Y = useTransform(springY, (v) => (v - 400) * -0.04)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const elem = document.getElementById(href.replace('#', ''))
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f1f5f9] dark:bg-[#27374D] transition-colors duration-500 font-sans"
    >
      <style jsx>{`
        @keyframes shine {
          from { left: -100%; }
          to   { left: 200%; }
        }
        .animate-shine {
          position: absolute; top: 0;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-25deg);
          animation: shine 1.5s infinite;
        }

        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .float-a { animation: float-y 7s ease-in-out infinite; }
        .float-b { animation: float-y 10s ease-in-out infinite reverse; }

        /* ALVIAN — outline, warna stroke sesuai theme */
        .name-alvian {
          -webkit-text-stroke: 2.5px #27374D;
          color: transparent;
        }
        :global(.dark) .name-alvian {
          -webkit-text-stroke: 2.5px #DDE6ED;
          color: transparent;
        }

        /* Button hover ripple */
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          transform: scale(1.06);
          box-shadow: 0 0 32px rgba(82,109,130,0.45);
        }
        .btn-primary:active {
          transform: scale(0.97);
        }

        /* Get In Touch underline grow */
        .btn-ghost-line {
          position: relative;
        }
        .btn-ghost-line::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: #526D82;
          transition: width 0.4s ease;
        }
        :global(.dark) .btn-ghost-line::after {
          background: #9DB2BF;
        }
        .btn-ghost-line:hover::after {
          width: 100%;
        }
      `}</style>

      {/* ══ ORBS ══ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Orb kiri atas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: -40, y: -40 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: orb1X, y: orb1Y, translateY: orbY1, opacity: isMounted ? mainOpacity : 0 }}
          className="absolute top-[12%] left-[8%] w-44 h-44 md:w-72 md:h-72 rounded-full
            border-2 border-white/50
            bg-gradient-to-br from-white/60 via-white/20 to-transparent
            dark:from-[#526D82]/70 dark:via-[#526D82]/30 dark:to-transparent
            backdrop-blur-md
            shadow-[0_8px_32px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.6)]
            float-a"
        />
        {/* Orb kanan bawah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, x: 40, y: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: orb2X, y: orb2Y, translateY: orbY2, opacity: isMounted ? mainOpacity : 0 }}
          className="absolute bottom-[12%] right-[8%] w-52 h-52 md:w-96 md:h-96 rounded-full
            border-2 border-white/40
            bg-gradient-to-tl from-white/40 via-[#9DB2BF]/30 to-transparent
            dark:from-[#9DB2BF]/30 dark:via-[#526D82]/20 dark:to-transparent
            backdrop-blur-sm
            shadow-[0_8px_48px_rgba(157,178,191,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]
            float-b"
        />
      </div>

      {/* ══ GEOMETRIC ACCENT KIRI ══ */}
      <motion.div
        style={{ y: sideY, opacity: isMounted ? mainOpacity : 0 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10 pointer-events-none"
      >
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
          className="w-[1.5px] h-28 bg-gradient-to-b from-transparent via-[#526D82]/80 to-[#526D82]/20 dark:via-[#9DB2BF]/70 dark:to-[#9DB2BF]/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="w-3 h-3 border-[1.5px] border-[#526D82]/80 dark:border-[#9DB2BF]/75 float-a"
        />
        <div className="flex flex-col gap-2">
          {[0.9, 0.65, 0.4, 0.2].map((op, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: op, x: 0 }}
              transition={{ duration: 0.3, delay: 1.7 + i * 0.08 }}
              className="w-1 h-1 rounded-full bg-[#526D82] dark:bg-[#9DB2BF]"
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          className="w-6 h-6 rounded-full border-[1.5px] border-[#526D82]/70 dark:border-[#9DB2BF]/65 float-b"
        />
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom' }}
          className="w-[1.5px] h-28 bg-gradient-to-t from-transparent via-[#526D82]/80 to-[#526D82]/20 dark:via-[#9DB2BF]/70 dark:to-[#9DB2BF]/10"
        />
      </motion.div>

      {/* ══ GEOMETRIC ACCENT KANAN ══ */}
      <motion.div
        style={{ y: sideY, opacity: isMounted ? mainOpacity : 0 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-10 pointer-events-none"
      >
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
          className="w-[1.5px] h-28 bg-gradient-to-b from-transparent via-[#526D82]/80 to-[#526D82]/20 dark:via-[#9DB2BF]/70 dark:to-[#9DB2BF]/10"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="relative w-5 h-5 float-a"
        >
          <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#526D82]/80 dark:bg-[#9DB2BF]/75 -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 h-full w-[1.5px] bg-[#526D82]/80 dark:bg-[#9DB2BF]/75 -translate-x-1/2" />
        </motion.div>
        <div className="flex flex-col gap-[7px] items-center">
          {[22, 15, 9, 5].map((w, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 8 }} animate={{ opacity: [0.9, 0.65, 0.4, 0.2][i], x: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + i * 0.07 }}
              style={{ width: `${w}px` }}
              className="h-[1.5px] bg-[#526D82] dark:bg-[#9DB2BF]"
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="w-5 h-5 border-[1.5px] border-[#526D82]/70 dark:border-[#9DB2BF]/65 rotate-[20deg] float-b"
        />
        <motion.div
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom' }}
          className="w-[1.5px] h-28 bg-gradient-to-t from-transparent via-[#526D82]/80 to-[#526D82]/20 dark:via-[#9DB2BF]/70 dark:to-[#9DB2BF]/10"
        />
      </motion.div>

      {/* ══ CORNER BRACKETS ══ */}
      <motion.div
        initial={{ opacity: 0, x: -8, y: 8 }} animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        style={{ opacity: isMounted ? mainOpacity : 0 }}
        className="absolute bottom-8 left-8 hidden lg:block z-10 pointer-events-none"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M44 44 L2 44 L2 2" stroke="#526D82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 8, y: -8 }} animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        style={{ opacity: isMounted ? mainOpacity : 0 }}
        className="absolute top-8 right-8 hidden lg:block z-10 pointer-events-none"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M0 0 L42 0 L42 42" stroke="#526D82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        </svg>
      </motion.div>

      {/* ══ MAIN CONTENT ══ */}
      <motion.div
        style={{
          opacity: isMounted ? mainOpacity : 0,
          scale:   isMounted ? mainScale   : 1,
          y:       isMounted ? yTranslate  : 0,
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full border border-[#526D82]/30 bg-[#526D82]/10 backdrop-blur-md mb-10"
        >
          <span className="text-slate-500 dark:text-[#9DB2BF] text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
            Available for Work
          </span>
        </motion.div>

        {/* ── NAMA ── */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.06em] leading-[0.85] uppercase"
          >
            {/* ALVIAN — outline, fix: pakai CSS variable biar dark mode jalan */}
            <span className="name-alvian">ALVIAN</span>
            {' '}
            <br className="md:hidden" />
            {/* ADITYA — solid gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#27374D] via-[#526D82] to-[#9DB2BF] dark:from-white dark:via-white dark:to-[#9DB2BF]">
              ADITYA
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-lg md:text-3xl tracking-tight text-[#526D82] dark:text-[#9DB2BF]"
          >
            <span className="font-light">Full-stack Web </span>
            <span className="font-black italic">Developer</span>
          </motion.h2>
        </div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-[#DDE6ED]/70 leading-relaxed font-medium tracking-tight"
        >
          Membangun solusi digital berperforma tinggi dengan{' '}
          <span className="text-slate-950 dark:text-white font-black">Laravel</span>
          {' & '}
          <span className="text-slate-950 dark:text-white font-black">Next.js</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {/* Primary button — shine + scale + glow on hover */}
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="btn-primary group px-12 py-4 bg-[#27374D] dark:bg-[#526D82] rounded-full"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="animate-shine" />
            </div>
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#DDE6ED]">
              View Projects
            </span>
          </a>

          {/* Ghost button — teks + garis panjang, hover underline grow */}
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="group py-2 flex items-center gap-3 no-underline"
          >
            <span className="btn-ghost-line text-[10px] uppercase tracking-[0.2em] font-black text-[#27374D] dark:text-[#9DB2BF] transition-colors duration-300 group-hover:text-[#526D82] dark:group-hover:text-white">
              Get In Touch
            </span>
            <span className="w-8 h-[1.5px] bg-[#526D82]/60 dark:bg-[#9DB2BF]/60 group-hover:w-16 group-hover:bg-[#526D82] dark:group-hover:bg-white transition-all duration-500 ease-out block" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
