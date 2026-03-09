import './globals.css'
import { Providers } from './providers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Plus_Jakarta_Sans } from 'next/font/google'

export const metadata = {
  title: 'Alvian Aditya | Full-stack Web Developer',
  description: 'Portofolio Alvian Aditya - Spesialis Laravel & Next.js',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta', 
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#e2e8f0] dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 transition-colors duration-500 antialiased font-sans">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}