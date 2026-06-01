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

export function Projects({ projects }: Readonly<ProjectsProps>) {
  const [active, setActive] = useState(0)
  const current = projects[active]

  return (
    <section id="projects" className="section-padding mx-auto max-w-6xl">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p
          variants={fadeInUp}
          className="mb-3 text-sm font-medium tracking-widest text-violet-500 uppercase"
        >
          Portfolio
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-5 md:grid md:grid-cols-[160px_1fr]"
        >
          {/* Left — thumbnails nav */}
          <div className="flex shrink-0 gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
            {projects.map((proj, i) => (
              <button
                key={proj.id}
                onClick={() => setActive(i)}
                className={[
                  'shrink-0 overflow-hidden rounded-xl border transition-all duration-300',
                  active === i
                    ? 'border-violet-500/50 shadow-[0_0_12px_rgba(5,223,114,0.25)]'
                    : 'border-[#1c1c1c] opacity-45 hover:opacity-100',
                ].join(' ')}
              >
                <div className="relative h-16 w-28 bg-[#0f0f0f] md:w-full">
                  <img
                    src={proj.imageUrl}
                    alt={proj.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                  {active === i && (
                    <div
                      className="absolute right-0 bottom-0 left-0 h-0.5"
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
              className="border-border overflow-hidden rounded-2xl border"
            >
              <div className="grid md:flex md:min-w-fit">
                {/* Left — image */}
                <div className="group bg-surface relative aspect-1280/800 h-full w-full md:min-w-120">
                  <img
                    src={current.imageUrl}
                    alt={current.name}
                    className="aspect-1280/800 h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="bg-bg/75 absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={current.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                      style={{ background: 'linear-gradient(135deg, #05df72, #00a6f4)' }}
                    >
                      Live Demo
                    </a>

                    {current.githubURL && (
                      <a
                        href={current.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass border-border rounded-lg border px-4 py-2 text-sm font-medium text-white transition-all hover:border-violet-500/40"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right — details */}
                <div className="flex flex-col bg-[#080808] p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-semibold text-white">{current.name}</h3>
                  <p className="text-text-secondary mb-5 flex-1 text-sm leading-relaxed">
                    {current.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {current.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-0.5 font-mono text-xs"
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
                    {current.githubURL && (
                      <a
                        href={current.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass border-border text-text-secondary flex-1 rounded-xl border py-2.5 text-center text-sm font-medium transition-all hover:border-violet-500/40 hover:text-white"
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      href={current.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xl py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
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
