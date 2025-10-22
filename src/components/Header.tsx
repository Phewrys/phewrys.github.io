'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/content'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex items-center gap-2 hover:opacity-80 transition-opacity'
          >
            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center'>
              <span className='text-background'>T</span>
            </div>
          </button>

          <nav className='hidden md:flex items-center gap-8'>
            <button
              onClick={() => scrollToSection('about')}
              className='hover:text-muted-foreground transition-colors'
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className='hover:text-muted-foreground transition-colors'
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='hover:text-muted-foreground transition-colors'
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='hover:text-muted-foreground transition-colors'
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className='flex items-center gap-3'>
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className='p-2 hover:bg-accent rounded-lg transition-colors'
              aria-label='Toggle language'
            >
              <Globe className='w-5 h-5' />
            </button>
            <button
              onClick={toggleTheme}
              className='p-2 hover:bg-accent rounded-lg transition-colors'
              aria-label='Toggle theme'
            >
              {theme === 'light' ? (
                <Moon className='w-5 h-5' />
              ) : (
                <Sun className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
