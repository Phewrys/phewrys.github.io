import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='min-h-screen bg-background text-foreground'>
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
