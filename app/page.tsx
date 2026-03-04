// app/page.tsx
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills' // Import ini
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills /> {/* Simpan di sini */}
      <Projects />
      <Contact />
    </div>
  )
}