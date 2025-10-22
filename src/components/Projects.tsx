'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations, projects } from '../data/content'
import { ProjectCard } from './ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 90%',
          end: 'top top+=25%',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='projects' ref={sectionRef} className='py-32 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-5xl md:text-6xl mb-4'>{t.projects.title}</h2>
          <p className='text-xl text-muted-foreground'>{t.projects.subtitle}</p>
        </div>

        <div ref={gridRef} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
