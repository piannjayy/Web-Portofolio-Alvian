'use client'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '64px 64px',
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (elem) elem.scrollIntoView({ behavior: 'smooth' })
    if (isOpen) setIsOpen(false)
  }

  const menuItems = [
    { name: 'Home',     href: '#home'     },
    { name: 'About',    href: '#about'    },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact',  href: '#contact'  },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[80] transition-all duration-500
          ${scrolled
            ? 'bg-[#e2e8f0]/95 dark:bg-[#1e2d3d]/95 backdrop-blur-md border-b border-[#526D82]/15 dark:border-[#9DB2BF]/10 shadow-sm'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="text-xl font-black tracking-tighter text-[#27374D] dark:text-[#DDE6ED] uppercase group flex items-center cursor-pointer z-10 relative"
          >
            AV.DEV
            <span className="text-[#526D82]/50 group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF] transition-colors duration-300">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center gap-10">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="relative text-[11px] uppercase tracking-[0.25em] font-black cursor-pointer transition-colors duration-300 group"
                    style={{ color: isActive ? '#526D82' : undefined }}
                  >
                    <span className={`transition-colors duration-300 ${isActive ? 'text-[#526D82] dark:text-[#9DB2BF]' : 'text-slate-400 dark:text-slate-500 hover:text-[#27374D] dark:hover:text-[#DDE6ED]'}`}>
                      {item.name}
                    </span>
                    {/* active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="navDot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#526D82] dark:bg-[#9DB2BF]"
                      />
                    )}
                    {/* hover underline */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#526D82]/50 dark:bg-[#9DB2BF]/40 transition-all duration-300 group-hover:w-full" />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-end w-32 gap-4">
            <div className="hidden md:block text-[#27374D] dark:text-[#DDE6ED]">
              <ThemeToggle />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#27374D] dark:bg-[#DDE6ED] rounded-full block origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="w-3.5 h-[2px] bg-[#27374D] dark:bg-[#DDE6ED] rounded-full block self-end"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#27374D] dark:bg-[#DDE6ED] rounded-full block origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#e2e8f0] dark:bg-[#1e2d3d] z-[100] flex flex-col overflow-hidden"
          >
            {/* Grid bg */}
            <div className="absolute inset-0 pointer-events-none" style={gridBg} />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#526D82]/[0.06] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#9DB2BF]/[0.06] to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full px-8 pt-28 pb-10 max-w-7xl mx-auto w-full">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-6 h-px bg-[#526D82]/50" />
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#526D82]/60 dark:text-[#9DB2BF]/40">
                  Navigation
                </span>
              </motion.div>

              {/* Menu items */}
              <div className="flex flex-col flex-1">
                {menuItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="group relative flex items-center justify-between
                        border-b border-[#526D82]/15 dark:border-[#9DB2BF]/10
                        py-5 overflow-hidden cursor-pointer
                        hover:border-[#526D82]/30 dark:hover:border-[#9DB2BF]/20
                        transition-colors duration-300"
                    >
                      {/* hover bg sweep */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{ background: 'linear-gradient(100deg, rgba(82,109,130,0.05) 0%, transparent 50%)' }}
                      />

                      <div className="flex items-baseline gap-5 relative z-10">
                        <span className="text-[10px] font-black tabular-nums text-[#526D82]/30 dark:text-[#9DB2BF]/20">
                          0{i + 1}
                        </span>
                        <span className={`text-3xl font-black uppercase tracking-tight transition-all duration-400 group-hover:translate-x-1.5
                          ${isActive
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#526D82] to-[#9DB2BF]'
                            : 'text-[#27374D] dark:text-[#DDE6ED]'
                          }`}
                        >
                          {item.name}
                        </span>
                        {isActive && (
                          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#526D82]/60 dark:text-[#9DB2BF]/50 self-center">
                            — active
                          </span>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className="relative z-10 w-9 h-9 rounded-full border border-[#526D82]/15 dark:border-[#9DB2BF]/10 flex items-center justify-center
                        text-[#526D82]/20 dark:text-[#9DB2BF]/15
                        group-hover:border-[#526D82]/50 dark:group-hover:border-[#9DB2BF]/35
                        group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF]
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                        transition-all duration-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>

                      {/* bottom line grow */}
                      <div
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ background: 'linear-gradient(to right, rgba(82,109,130,0.4), transparent)' }}
                      />
                    </motion.a>
                  )
                })}
              </div>

              {/* Footer row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 flex items-center justify-between border-t border-[#526D82]/10 dark:border-[#9DB2BF]/8"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-black text-[#27374D] dark:text-[#DDE6ED] uppercase tracking-widest">
                    Alvian Aditya
                  </span>
                  <span className="text-[8px] font-bold text-[#526D82]/50 dark:text-[#9DB2BF]/40 uppercase tracking-[0.3em]">
                    Full-stack Developer
                  </span>
                </div>

                {/* Status + theme toggle */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#526D82]/15 dark:border-[#9DB2BF]/10 bg-[#526D82]/5 dark:bg-[#27374D]/60">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#526D82]/60 dark:text-[#9DB2BF]/50">
                      Available
                    </span>
                  </div>
                  <div className="text-[#27374D] dark:text-[#DDE6ED]">
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}