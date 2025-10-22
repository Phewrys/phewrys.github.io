'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/content'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ImageWithFallback } from './figma/ImageWithFallback'
gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Tailwind CSS' },
  { name: 'Styled-Components' },
  { name: 'Bootstrap' },
  { name: 'GSAP' },
  { name: 'SQL Server' },
  { name: 'Azure DevOps' },
  { name: 'Datadog' },
  { name: 'IIS' },
]

export default function About() {
  const { language } = useLanguage()
  const t = translations[language]
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=25%',
          end: 'top 50%',
          scrub: true,
        },
      })

      gsap.from(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=25%',
          end: 'top 50%',
          scrub: true,
        },
      })

      gsap.fromTo(
        techRef.current?.children || [],
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='about' ref={sectionRef} className='py-32 px-6 overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-5xl md:text-6xl mb-20 text-center'>
          {t.about.title}
        </h2>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div ref={imageRef} className='flex justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-foreground to-muted rounded-full blur-2xl opacity-20' />
              <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-foreground/10 overflow-hidden'>
                <ImageWithFallback
                  src='/assets/profile_photo.jpg'
                  alt='Thiago - Frontend Developer'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <p className='text-lg text-muted-foreground leading-relaxed mb-6'>
              {t.about.bio}
            </p>

            <div className='flex flex-wrap gap-2'>
              <span className='px-4 py-2 border border-border rounded-xl bg-background'>
                🎓 {t.about.education}
              </span>
              <span className='px-4 py-2 border border-border rounded-xl bg-background'>
                💼 {t.about.experience}
              </span>
              {/* <span className="px-4 py-2 border border-border rounded-xl bg-background">
                🚀 20+ Projects Delivered
              </span> */}
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-8 text-center text-muted-foreground'>
            {t.about.techStack}
          </h3>
          <div
            ref={techRef}
            className='grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto'
          >
            {technologies.map(tech => (
              <div
                key={tech.name}
                className='group p-6 border border-border rounded-xl hover:bg-accent transition-all duration-300 hover:scale-105 cursor-pointer'
              >
                <div className='flex flex-col items-center gap-3'>
                  {/* <span className="text-3xl">{tech.icon}</span> */}
                  <span className='text-sm text-foreground group-hover:text-foreground transition-colors'>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
