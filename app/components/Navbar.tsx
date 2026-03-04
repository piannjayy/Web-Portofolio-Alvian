'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#e2e8f0]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-300/30 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        
        {/* KIRI: Logo - Fixed Width agar Tengah tetap presisi */}
        <div className="w-32">
          <Link href="#home" className="text-xl font-black tracking-tighter text-slate-950 dark:text-white uppercase group flex items-center">
            AV.DEV<span className="text-slate-500 group-hover:text-slate-950 dark:group-hover:text-slate-400 transition-colors">.</span>
          </Link>
        </div>

        {/* TENGAH: Desktop Menu - Rata Tengah Sempurna */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex items-center gap-10">
            {menuItems.map((item, index) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                whileHover={{ y: -2 }}
                className="text-[11px] uppercase tracking-[0.25em] font-black text-slate-500 hover:text-slate-950 dark:text-slate-500 dark:hover:text-white transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-slate-950 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* KANAN: Theme Toggle (Desktop Only) & Hamburger */}
        <div className="w-32 flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-950 dark:text-white"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#e2e8f0] dark:bg-[#0a0a0a] border-b border-slate-300 dark:border-white/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black tracking-widest text-slate-950 dark:text-white uppercase"
                >
                  {item.name}
                </a>
              ))}
              {/* Toggle dipindah ke sini pas Mobile */}
              <div className="pt-4 border-t border-slate-300 dark:border-white/10 w-full flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 