import { motion } from 'motion/react'
import { staggerContainer, fadeInUp } from '@/lib/motion'
import type { ICourse } from '@/types'

interface CoursesProps {
  courses: ICourse[]
}

export function Courses({ courses }: CoursesProps) {
  return (
    <section id="courses" className="section-padding max-w-6xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeInUp} className="text-sm text-violet-500 font-medium tracking-widest uppercase mb-3">
          Learning
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white mb-12"
        >
          Courses
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {courses.map((course) => (
            <motion.a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group glass rounded-2xl border border-[#1c1c1c] hover:border-violet-500/30 transition-all duration-300 p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2.5">
                {course.logo ? (
                  <img
                    src={course.logo}
                    alt={course.institution}
                    className="w-8 h-8 rounded-lg object-contain bg-white/5 p-0.5 shrink-0"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-violet-400">{course.institution.charAt(0)}</span>
                  </div>
                )}
                <p className="text-sm text-[#52525b] truncate">{course.institution}</p>
              </div>

              <h3 className="font-medium text-white group-hover:text-violet-300 transition-colors text-sm leading-snug flex-1">
                {course.name}
              </h3>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-[#52525b] font-mono">{course.to}</span>
                <span className="text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
