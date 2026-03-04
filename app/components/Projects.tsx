'use client'
import { motion, Variants } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: "Sistem Perpustakaan",
      desc: "Aplikasi manajemen data buku dan peminjaman menggunakan Laravel dengan optimasi UI yang modern dan sistem role-based access.",
      tech: ["Laravel", "Blade", "MySQL"],
      link: "https://github.com/piannjayy/laravel-library-system" // Isi link project di sini
    },
    {
      title: "React Movie App",
      desc: "Platform pencarian film real-time yang mengintegrasikan API TMDB dengan fitur bookmark dan detail sinopsis interaktif.",
      tech: ["React", "TMDB API", "Tailwind CSS"],
      link: "https://react-movie-app-one-eta.vercel.app" // Isi link project di sini
    },
    {
      title: "Serbu Computer",
      desc: "Sistem inventory dan kasir khusus untuk toko laptop, mempermudah manajemen stok barang dan riwayat transaksi pelanggan.",
      tech: ["PHP", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/piannjayy/serbu-computer" // Isi link project di sini
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section - Sejajar (Flex) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-[0.5em] font-black text-slate-400">
              Portfolio
            </h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-black dark:text-white leading-none">
              Selected <span className="text-slate-300 dark:text-slate-800">Works.</span>
            </h3>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-slate-100 dark:bg-white/5 hidden lg:block mb-4"></div>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-[280px] text-sm md:text-right leading-relaxed mb-2">
            Kumpulan proyek pilihan yang menunjukkan keahlian saya dalam pengembangan web.
          </p>
        </motion.div>

        {/* Grid Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 lg:gap-16"
        >
          {projects.map((p, i) => (
            <motion.a 
              href={p.link}
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer"
              key={i} 
              variants={itemVariants}
              className="group relative flex flex-col h-full border-t border-slate-200 dark:border-white/10 pt-8 hover:border-black dark:hover:border-white transition-colors duration-500 cursor-pointer"
            >
              {/* Nomor & Arrow Icon */}
              <div className="mb-8 flex justify-between items-center">
                <span className="text-sm font-black tracking-[0.3em] text-slate-300 dark:text-slate-800 group-hover:text-black dark:group-hover:text-white transition-colors">
                  0{i + 1}
                </span>
                <div className="overflow-hidden">
                   <motion.div 
                    whileHover={{ x: 5, y: -5 }}
                    className="text-slate-300 dark:text-slate-800 group-hover:text-black dark:group-hover:text-white transition-colors"
                   >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </motion.div>
                </div>
              </div>
              
              {/* Konten */}
              <div className="flex-grow">
                <h3 className="text-2xl font-black mb-4 text-black dark:text-white tracking-tight uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {p.tech.map(t => (
                  <span 
                    key={t} 
                    className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-sm group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-all duration-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Efek Garis Bawah (Progressive Line) */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all duration-700"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}