'use client'
import { motion, Variants } from 'framer-motion'

export default function Contact() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Border Line */}
        <div className="w-full h-[1px] bg-slate-200 dark:bg-white/10 mb-16"></div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Left Side: Heading */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={itemVariants}
            className="flex-1 space-y-4"
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black dark:text-white leading-[0.95]">
              Let's create <br />
              <span className="text-slate-300 dark:text-slate-800">something great.</span>
            </h3>
          </motion.div>

          {/* Right Side: Contact Actions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={itemVariants}
            className="flex-1 flex flex-col justify-end gap-10"
          >
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col">
              {/* Email Link - Ukuran Sedikit Lebih Besar (3xl) */}
              {/* Ganti link mailto tadi dengan ini */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jalulajula696@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between border-t border-slate-200 dark:border-white/10 py-8 transition-all duration-500"
          >
                <div className="flex flex-col z-10">
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black dark:text-white group-hover:translate-x-3 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    Send an Email
                  </span>
                </div>

                <div className="flex items-center gap-6 z-10">
                   <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    jalulajula696@gmail.com
                  </span>
                  <motion.div 
                    className="text-slate-400 dark:text-slate-700 group-hover:text-black dark:group-hover:text-white transition-colors duration-500"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Subtle Line Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black dark:bg-white group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"></div>
              </a>

              {/* WhatsApp Link - Ukuran Sedikit Lebih Besar (3xl) */}
              <a 
                href="https://wa.me/6287884230105" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between border-t border-b border-slate-200 dark:border-white/10 py-8 transition-all duration-500"
              >
                <div className="flex flex-col z-10">
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black dark:text-white group-hover:translate-x-3 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    WhatsApp Me
                  </span>
                </div>

                <div className="flex items-center gap-6 z-10">
                   <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    Fast Response
                  </span>
                  <motion.div 
                    className="text-slate-400 dark:text-slate-700 group-hover:text-black dark:group-hover:text-white transition-colors duration-500"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>

                {/* Subtle Line Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black dark:bg-white group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}