'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Download, Mail, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/content'
import gsap from 'gsap'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialLinksRef = useRef<HTMLDivElement>(null)

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:phewrys@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/phewrys/',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Phewrys',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })

      gsap.fromTo(
        buttonsRef.current?.children || [],
        {
          opacity: 0,
          ease: 'power3.out',
        },
        {
          opacity: 1,
          stagger: 0.15,
          delay: 0.7,
        },
      )

      gsap.fromTo(
        socialLinksRef.current?.children || [],
        {
          opacity: 0,
          ease: 'power3.out',
        },
        {
          opacity: 1,
          stagger: 0.15,
          delay: 1,
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = `${t.hero.cvHref}`
    link.download = `${t.hero.cvTitle}`
    link.click()
  }

  return (
    <section
      ref={heroRef}
      className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden'
    >
      {/* Background gradient */}
      <div
        className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 50% at 50% 50%, #000 10%, transparent 100%)',
        }}
      />

      <div className='max-w-4xl mx-auto text-center relative z-10'>
        <div ref={titleRef} className='mb-8'>
          <h1 className='text-6xl md:text-8xl mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent'>
            {t.hero.greeting}
          </h1>
          <h2 className='text-3xl md:text-5xl text-muted-foreground'>
            {t.hero.role}
          </h2>
        </div>

        <p
          ref={descRef}
          className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12'
        >
          {t.hero.description}
        </p>

        <div
          ref={buttonsRef}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-14'
        >
          <button
            onClick={() => scrollToSection('projects')}
            className='group px-8 py-4 cursor-pointer bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 flex items-center gap-2'
          >
            {t.hero.cta1}
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className='px-8 py-4 cursor-pointer bg-background border border-border rounded-lg hover:bg-accent transition-all duration-300'
          >
            {t.hero.cta2}
          </button>
          <button
            onClick={handleDownloadResume}
            className='px-8 py-4 cursor-pointer bg-background border border-border rounded-lg hover:bg-accent transition-all duration-300 flex items-center gap-2'
          >
            <Download className='w-5 h-5' />
            {t.hero.cvText}
          </button>
        </div>

        <div
          ref={socialLinksRef}
          className='flex items-center justify-center gap-4'
        >
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-background rounded-lg border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:shadow-sm hover:bg-accent'
            >
              <link.icon className='w-6 h-6' />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 bg-background border-2 border-border rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-2 bg-foreground rounded-full' />
        </div>
      </div>
    </section>
  )
}
