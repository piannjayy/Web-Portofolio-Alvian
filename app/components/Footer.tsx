'use client'
import { motion, Variants } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Definisi Variants dengan tipe data yang ketat untuk TypeScript
  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const // "as const" untuk fix error easing string
      } 
    }
  }

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          
          {/* Brand & Role */}
          <div className="group cursor-default">
            <h2 className="font-black text-xl tracking-tighter text-slate-950 dark:text-white uppercase leading-none group-hover:tracking-normal transition-all duration-500">
              AV.DEV<span className="text-slate-500 group-hover:text-slate-950 dark:group-hover:text-slate-400 transition-colors">.</span>
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-500"></span>
              </span>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.2em]">
                Fullstack Web Developer
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] font-black">
            {[
              { name: "GitHub", link: "https://github.com/piannjayy" },
              { name: "Instagram", link: "https://www.instagram.com/alviananw" },
              { name: "LinkedIn", link: "https://www.linkedin.com/in/alvian-aditya-75970a3b4/ " }
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-black dark:hover:text-white transition-colors relative group py-1"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Copyright & Location */}
          <div className="flex flex-col md:items-end gap-1 text-[9px] font-bold uppercase">
            <p className="tracking-[0.15em] text-slate-400">
              © {currentYear} • Alvian Aditya
            </p>
            <p className="tracking-[0.3em] text-slate-300 dark:text-slate-800 font-black">
              Tumpang, Malang
            </p>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent"
        />
      </motion.div>
    </footer>
  )
}