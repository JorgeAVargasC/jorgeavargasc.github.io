import { motion } from 'motion/react'
import { staggerContainer, fadeInUp, clipReveal } from '@/lib/motion'
import type { IGeneral, ILinks } from '@/types'

interface HeroProps {
  general: IGeneral
  links: ILinks
}

function TerminalBlock({ skills }: { skills: string[] }) {
  const COLS = 4
  const rows: string[][] = []
  for (let i = 0; i < skills.length; i += COLS) {
    rows.push(skills.slice(i, i + COLS))
  }
  const lastRow = rows.length - 1

  return (
    <div className="overflow-hidden rounded-xl border border-[#1c1c1c] bg-[#0d0d0d] font-mono text-sm select-none">
      <div className="flex items-center gap-1.5 border-b border-[#1c1c1c] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#52525b]">skills.ts</span>
      </div>
      <div className="p-4 leading-7">
        <div>
          <span style={{ color: '#c792ea' }}>const </span>
          <span style={{ color: '#82aaff' }}>skills </span>
          <span style={{ color: '#89ddff' }}>{'= ['}</span>
        </div>
        {rows.map((row, ri) => (
          <div key={ri} className="pl-4">
            {row.map((skill, si) => {
              const isLast = ri === lastRow && si === row.length - 1
              return (
                <span key={si}>
                  <span style={{ color: '#c3e88d' }}>'{skill}'</span>
                  {!isLast && <span style={{ color: '#a6accd' }}>, </span>}
                </span>
              )
            })}
          </div>
        ))}
        <div>
          <span style={{ color: '#89ddff' }}>{'};'}</span>
        </div>
      </div>
    </div>
  )
}

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export function Hero({ general, links }: HeroProps) {
  const firstName = general.name.split(' ')[0]

  const iconLinks = [
    { href: `mailto:${general.email}`, label: 'Email', icon: <EmailIcon /> },
    { href: links.linkedIn, label: 'LinkedIn', icon: <LinkedInIcon /> },
    { href: links.github, label: 'GitHub', icon: <GitHubIcon /> },
  ]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
    >
      {/* Aurora blob */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          width: '65vw',
          height: '65vh',
          top: '50%',
          right: '-15%',
          transform: 'translateY(-50%)',
          background:
            'radial-gradient(ellipse, rgba(5,223,114,0.35) 0%, rgba(0,166,244,0.25) 40%, rgba(8,145,178,0.15) 65%, transparent 80%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 md:grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] lg:gap-16">
        {/* Left — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <div className="mb-3 overflow-hidden">
            <motion.h1
              variants={clipReveal}
              className="text-[clamp(2.8rem,7vw,4.2rem)] leading-[1.3] font-extrabold tracking-tight text-white"
            >
              Hi there! I&apos;m <span className="aurora-text">{firstName}</span>
            </motion.h1>
          </div>

          <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap items-center gap-2">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-violet-500" />
            <span className="text-base text-[#a1a1aa] lg:text-lg">{general.role}</span>
            <span className="text-[#2a2a2a]">·</span>
            <span className="text-sm text-[#52525b]">📍 {general.country}</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-6">
            <TerminalBlock skills={general.skills} />
          </motion.div>

          <motion.p variants={fadeInUp} className="mb-8 text-sm leading-relaxed text-[#52525b]">
            {general.shortBio}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #05df72, #00a6f4)',
                boxShadow: '0 0 24px rgba(5,223,114,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 36px rgba(5,223,114,0.65)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(5,223,114,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <DownloadIcon /> Download CV
            </a>

            {iconLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl border border-[#1c1c1c] text-[#a1a1aa] transition-all duration-300 hover:border-violet-500/40 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Photo */}
            <div className="relative aspect-square h-80 rounded-full md:h-96">
              <img
                src={general.image}
                alt={general.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest text-[#52525b] uppercase">Scroll</span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-violet-500/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
