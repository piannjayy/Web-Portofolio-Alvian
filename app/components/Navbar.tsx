'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Efek biar pas menu buka, user gak bisa scroll body di belakangnya
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
    
    // Tutup menu mobile kalau lagi kebuka
    if (isOpen) setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-[80] bg-[#e2e8f0]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-slate-300/30 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="w-32 flex-shrink-0">
            {/* Logo juga kita kasih handleScroll biar URL balik bersih */}
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="text-xl font-black tracking-tighter text-slate-950 dark:text-white uppercase group flex items-center cursor-pointer"
            >
              AV.DEV<span className="text-slate-500 group-hover:text-slate-950 dark:group-hover:text-slate-400 transition-colors">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center gap-10">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-[11px] uppercase tracking-[0.25em] font-black text-slate-500 hover:text-slate-950 dark:text-slate-500 dark:hover:text-white transition-all relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-950 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end w-32 gap-4">
            <div className="hidden md:block text-slate-950 dark:text-white">
              <ThemeToggle />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 -mr-2 text-slate-950 dark:text-white relative z-[110]">
              <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
                <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-full h-[2px] bg-current" />
                <motion.span animate={isOpen ? { x: 50 } : { x: 0 }} className="w-3/4 h-[2px] bg-current" />
                <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-full h-[2px] bg-current" />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#e2e8f0] dark:bg-[#0a0a0a] z-[100] flex flex-col"
          >
            <div className="flex flex-col h-full p-10 pt-32 max-w-7xl mx-auto w-full">
              <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-slate-600 border-b border-slate-300 dark:border-white/10 pb-4 mb-10"
              >
                Navigation Menu
              </motion.h4>

              <div className="flex flex-col gap-4">
                {menuItems.map((item, i) => (
                  <motion.a 
                    key={item.name} 
                    href={item.href} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    // Pakai handleScroll juga di mobile menu
                    onClick={(e) => handleScroll(e, item.href)}
                    className="group flex items-center justify-between py-4 border-b border-slate-200 dark:border-white/5 cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-black text-slate-400">0{i + 1}</span>
                      <span className="text-4xl font-black uppercase tracking-tighter text-slate-950 dark:text-white">
                        {item.name}
                      </span>
                    </div>
                    <motion.div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-widest">Alvian Aditya</span>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">Full-stack Developer</span>
                </div>
                <div className="text-slate-950 dark:text-white">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}