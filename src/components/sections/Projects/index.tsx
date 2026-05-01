import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import type { IProject } from '@/types'

const techColors: Record<string, string> = {
  react: '#61dafb',
  next: '#ffffff',
  astro: '#ff5d01',
  angular: '#dd0031',
  typescript: '#3178c6',
  vite: '#646cff',
  tailwind: '#38bdf8',
  'tailwind-v4': '#38bdf8',
  firebase: '#ffca28',
  'shadcn-ui': '#ffffff',
  'hero-ui': '#05df72',
  mui: '#007fff',
  node: '#05df72',
}

interface ProjectsProps {
  projects: IProject[]
}

export function Projects({ projects }: ProjectsProps) {
  const [active, setActive] = useState(0)
  const current = projects[active]

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeInUp} className="text-sm text-violet-500 font-medium tracking-widest uppercase mb-3">
          Portfolio
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white mb-12"
        >
          Projects
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-col md:grid md:grid-cols-[160px_1fr] gap-5">
          {/* Left — thumbnails nav */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
            {projects.map((proj, i) => (
              <button
                key={proj.id}
                onClick={() => setActive(i)}
                className={[
                  'shrink-0 rounded-xl border overflow-hidden transition-all duration-300',
                  active === i
                    ? 'border-violet-500/50 shadow-[0_0_12px_rgba(5,223,114,0.25)]'
                    : 'border-[#1c1c1c] opacity-45 hover:opacity-100',
                ].join(' ')}
              >
                <div className="w-28 md:w-full h-16 bg-[#0f0f0f] relative">
                  <img
                    src={proj.imageUrl}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  {active === i && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(to right, #05df72, #06b6d4)' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right — active project card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-[#1c1c1c]"
            >
              <div className="grid md:grid-cols-2">
                {/* Left — image */}
                <div className="relative h-52 md:h-auto bg-[#0f0f0f] group">
                  <img
                    src={current.imageUrl}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-[#070707]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={current.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                      style={{ background: 'linear-gradient(135deg, #05df72, #00a6f4)' }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={current.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg glass border border-[#1c1c1c] text-sm font-medium text-white hover:border-violet-500/40 transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right — details */}
                <div className="p-6 md:p-8 bg-[#080808] flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">{current.name}</h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5 flex-1">{current.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {current.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          background: `${techColors[tech] || '#05df72'}15`,
                          color: techColors[tech] || '#05df72',
                          border: `1px solid ${techColors[tech] || '#05df72'}30`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={current.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl glass border border-[#1c1c1c] text-sm font-medium text-center text-[#a1a1aa] hover:text-white hover:border-violet-500/40 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href={current.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl text-sm font-medium text-center text-white transition-all duration-300 hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #05df72, #00a6f4)' }}
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
