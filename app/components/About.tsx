'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen py-24 px-6 flex items-center justify-center bg-[#e2e8f0] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* SISI KIRI: Foto dengan Border & Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] // Custom ease-out mewah
            }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              {/* Efek Cahaya di belakang foto */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-300 dark:from-white/20 dark:to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
              
              {/* Bingkai Luar Berputar (Tipis & Elegan) */}
              <div className="absolute -inset-4 border border-slate-400/20 dark:border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white dark:border-[#1a1a1a] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-none transition-transform duration-700 group-hover:scale-[1.03]">
                <img 
                  src="/foto-profile.jpg" 
                  alt="Alvian Aditya" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: Teks Narasi dengan Stagger Effect */}
          <div className="w-full md:w-2/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-sm uppercase tracking-[0.5em] font-black text-slate-400 dark:text-slate-500">
                Discovery
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white leading-[1.1] uppercase tracking-tighter">
                Crafting Digital <br />
                <span className="text-slate-400 dark:text-slate-600">Experiences.</span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
            >
              <p>
                Halo! Saya <span className="text-slate-950 dark:text-white font-bold underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">Alvian Aditya</span>. Saya adalah seorang pengembang web yang antusias dalam membangun aplikasi yang bersih dan responsif.
              </p>
              
              <p>
                Berfokus pada ekosistem modern seperti <span className="text-slate-950 dark:text-white font-bold italic">Next.js</span> dan <span className="text-slate-950 dark:text-white font-bold italic">Laravel</span>, saya senang mengubah ide kompleks menjadi solusi digital yang nyata. 
              </p>
              
              <motion.p 
                whileHover={{ x: 10 }}
                className="italic text-slate-400 dark:text-slate-500 border-l-2 border-slate-300 dark:border-white/10 pl-6 cursor-default transition-colors hover:text-slate-950 dark:hover:text-white"
              >
                "Coding bukan sekadar menulis baris teks, tapi tentang memecahkan masalah."
              </motion.p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decor: Garis vertikal tipis ala desain arsitek */}
      <div className="absolute inset-0 flex justify-around opacity-10 pointer-events-none">
        <div className="w-[1px] h-full bg-slate-400 dark:bg-white/10" />
        <div className="w-[1px] h-full bg-slate-400 dark:bg-white/10" />
        <div className="w-[1px] h-full bg-slate-400 dark:bg-white/10" />
      </div>
    </section>
  )
}