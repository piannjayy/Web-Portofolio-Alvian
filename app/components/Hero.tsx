'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  
  // FUNGSI SAKTI: Scroll tanpa nambahin hashtag di URL
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // Logic untuk efek scroll (Parallax & Fade Out)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e2e8f0] dark:bg-[#0a0a0a] transition-colors duration-500">
      
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-400/20 dark:bg-white/5 blur-[120px] pointer-events-none rounded-full" />

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="text-slate-600 dark:text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
            Available for Work
          </span>
        </motion.div>

        {/* Nama */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-950 dark:text-white tracking-[-0.05em] leading-none uppercase whitespace-nowrap"
          >
            ALVIAN <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-950 to-slate-500 dark:from-white dark:to-slate-700">ADITYA</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-3xl font-medium text-slate-500 dark:text-slate-400 tracking-tight"
          >
            Full-stack Web Developer
          </motion.h2>
        </div>

        {/* Deskripsi */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
        >
          Spesialis dalam membangun aplikasi web modern menggunakan 
          <span className="text-slate-950 dark:text-white font-bold"> Laravel</span> dan 
          <span className="text-slate-950 dark:text-white font-bold"> Next.js</span>. 
          Fokus pada performa dan pengalaman pengguna yang maksimal.
        </motion.p>

        {/* Tombol Interaktif - DITAMBAHKAN handleScroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, '#projects')}
            className="group relative bg-slate-950 dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-950/20 cursor-pointer"
          >
            <span className="relative z-10 text-sm uppercase tracking-widest">Lihat Proyek</span>
            <div className="absolute inset-0 bg-slate-800 dark:bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="group text-sm uppercase tracking-widest font-bold text-slate-950 dark:text-white flex items-center gap-2 cursor-pointer"
          >
            Hubungi Saya
            <span className="w-0 h-[2px] bg-slate-950 dark:bg-white group-hover:w-10 transition-all duration-300"></span>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-700" />
      </motion.div>
    </section>
  )
}