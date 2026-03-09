'use client'
import { motion, Variants } from 'framer-motion'

const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(82,109,130,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(82,109,130,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '64px 64px',
}

const socials = [
  { name: "GitHub",    link: "https://github.com/piannjayy"                          },
  { name: "Instagram", link: "https://www.instagram.com/alviananw"                  },
  { name: "LinkedIn",  link: "https://www.linkedin.com/in/alvian-aditya-75970a3b4/" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sectionVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  }

  const fadeUp: Variants = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const itemVariants: Variants = {
    hidden:  { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <footer className="relative border-t border-[#526D82]/15 dark:border-[#9DB2BF]/10 bg-[#e2e8f0] dark:bg-[#1e2d3d] transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={gridBg} />
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-gradient-to-tr from-[#526D82]/[0.04] to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">

          {/* Brand */}
          <motion.div variants={fadeUp} className="group cursor-default">
            <h2 className="font-black text-xl tracking-tighter text-[#27374D] dark:text-[#DDE6ED] uppercase leading-none group-hover:tracking-normal transition-all duration-500">
              AV.DEV<span className="text-[#526D82]/50 group-hover:text-[#526D82] dark:group-hover:text-[#9DB2BF] transition-colors duration-300">.</span>
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <p className="text-[9px] text-[#526D82]/60 dark:text-[#9DB2BF]/50 font-black uppercase tracking-[0.3em]">
                Fullstack Web Developer
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={sectionVariants} className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group relative text-[10px] uppercase tracking-[0.25em] font-black
                  text-[#526D82]/50 dark:text-[#9DB2BF]/40
                  hover:text-[#526D82] dark:hover:text-[#9DB2BF]
                  transition-colors duration-300 py-1"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#526D82]/50 dark:bg-[#9DB2BF]/40 group-hover:w-full transition-all duration-400" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div variants={fadeUp} className="flex flex-col md:items-end gap-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#526D82]/50 dark:text-[#9DB2BF]/40">
              © {currentYear} • Alvian Aditya
            </p>
            <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#526D82]/30 dark:text-[#9DB2BF]/25">
              Malang, ID
            </p>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#526D82]/20 dark:via-[#9DB2BF]/10 to-transparent origin-left"
        />
      </motion.div>
    </footer>
  )
}