'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.8 },
    })

    tl.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '-=0.4',
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '-=0.3',
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        '-=0.2',
      )
  }, [])

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 overflow-hidden'>
      <h1
        ref={titleRef}
        className='text-7xl font-extrabold mb-4 text-primary select-none'
      >
        404
      </h1>

      <h2 ref={subtitleRef} className='text-2xl font-semibold mb-2 text-center'>
        Page Not Found
      </h2>

      <p
        ref={paragraphRef}
        className='text-muted-foreground mb-8 text-center max-w-md'
      >
        Oops! This page doesn’t exist or was moved. Please check the URL or go
        back to the home page.
      </p>

      <Link
        href='/'
        ref={buttonRef}
        className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-medium hover:opacity-90 hover:scale-105 transition-all duration-300'
      >
        <ArrowLeft className='w-4 h-4' />
        Go Home
      </Link>
    </main>
  )
}
