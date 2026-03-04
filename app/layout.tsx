import './globals.css'
import { Providers } from './providers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Tambahkan class scroll-smooth di sini agar transisi antar menu jadi halus
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#f1f5f9] dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 transition-colors duration-500 antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}