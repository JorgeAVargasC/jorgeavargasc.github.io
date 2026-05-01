import { motion } from 'motion/react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import type { IEducation } from '@/types'

interface EducationProps {
  education: IEducation[]
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeInUp} className="text-sm text-violet-500 font-medium tracking-widest uppercase mb-3">
          Background
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white mb-12"
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-4">
          {education.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="glass rounded-2xl border border-[#1c1c1c] hover:border-violet-500/30 transition-all duration-300 p-5 md:p-6 flex items-center gap-4"
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-12 h-12 rounded-xl object-contain bg-white/5 p-1 shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <span className="text-base font-bold text-violet-400">{item.institution.charAt(0)}</span>
                </div>
              )}

              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white text-lg">{item.name}</h3>
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    {item.institution}
                  </a>
                </div>
                <span className="text-xs text-text-muted font-mono shrink-0">
                  {item.from} — {item.to ?? 'Present'}
                </span>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
