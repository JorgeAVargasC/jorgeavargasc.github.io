import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import type { IExperience } from '@/types'

interface ExperienceProps {
  experience: IExperience[]
}

function getInitials(company: string) {
  return company
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function Experience({ experience }: ExperienceProps) {
  const [active, setActive] = useState(0)
  const current = experience[active]

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeInUp} className="text-sm text-violet-500 font-medium tracking-widest uppercase mb-3">
          Career
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white mb-12"
        >
          Experience
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-col md:grid md:grid-cols-[200px_1fr] gap-5">
          {/* Left — nav */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
            {experience.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={[
                  'shrink-0 text-left p-3 rounded-xl border transition-all duration-300 w-[160px] md:w-full',
                  active === i
                    ? 'glass border-violet-500/40 bg-violet-500/5'
                    : 'border-[#1c1c1c] opacity-55 hover:opacity-100 hover:border-[#2a2a2a]',
                ].join(' ')}
              >
                <p className={`text-xs font-medium leading-tight ${active === i ? 'text-white' : 'text-[#a1a1aa]'}`}>
                  {exp.company}
                </p>
                <p className="text-[10px] text-[#52525b] font-mono mt-1">{exp.from}</p>
                {active === i && (
                  <motion.div
                    layoutId="exp-accent"
                    className="mt-2 h-0.5 w-8 rounded-full"
                    style={{ background: 'linear-gradient(to right, #05df72, #06b6d4)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right — active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-[#1c1c1c]"
            >
              <div className="grid md:grid-cols-[220px_1fr]">
                {/* Left visual panel */}
                <div
                  className="hidden md:flex flex-col items-center justify-center gap-5 p-8"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(5,223,114,0.22) 0%, rgba(0,166,244,0.14) 55%, rgba(8,145,178,0.1) 100%)',
                    borderRight: '1px solid #1c1c1c',
                  }}
                >
                  <div
                    className="text-[72px] font-black leading-none select-none"
                    style={{ color: 'rgba(255,255,255,0.05)' }}
                  >
                    {getInitials(current.company)}
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white"
                    style={{
                      background: 'linear-gradient(135deg, rgba(5,223,114,0.5), rgba(0,166,244,0.5))',
                      border: '1px solid rgba(5,223,114,0.35)',
                    }}
                  >
                    {getInitials(current.company)}
                  </div>
                  <div className="text-center space-y-0.5">
                    <p className="text-[11px] text-[#52525b] font-mono">{current.from}</p>
                    <p className="text-[11px] text-[#52525b] font-mono">— {current.to ?? 'Present'}</p>
                  </div>
                </div>

                {/* Right details */}
                <div className="p-6 md:p-8 bg-[#080808]">
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold text-white mb-1">{current.name}</h3>
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <a
                        href={current.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        {current.company} ↗
                      </a>
                      <span className="text-xs text-[#52525b] font-mono md:hidden">
                        {current.from} — {current.to ?? 'Present'}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{current.description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
