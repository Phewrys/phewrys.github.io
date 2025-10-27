import type { Metadata } from 'next'
import './globals.css'
import '../index.css'

export const metadata: Metadata = {
  title: 'Thiago | Frontend Developer',
  authors: [{ name: 'Tiago Alves de Farias (@phewrys)' }],
  keywords:
    'phewrys,tiago alves,thiago alves,tiago alves de farias,freelancer,front,end',
  description:
    'Frontend Developer skilled in React, Next.js, Tailwind CSS, GSAP, ... Explore projects showcasing clean code, animations, and modern responsive design.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
