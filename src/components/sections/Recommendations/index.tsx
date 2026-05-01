import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import type { IRecommendation } from '@/types'
import { LinkedInIcon } from '@/components/icons/linkedin-icon'

interface RecommendationsProps {
  recommendations: IRecommendation[]
}

function RecommendationCard({ rec }: Readonly<{ rec: IRecommendation }>) {
  return (
    <div className="glass mx-3 flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-[#1c1c1c] p-5 md:w-[380px]">
      <p className="text-text-secondary line-clamp-4 text-sm leading-relaxed">
        "{rec.body.join(' ')}"
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-[#1c1c1c] pt-3">
        <img
          src={rec.img}
          alt={rec.name}
          className="h-9 w-9 rounded-full bg-[#161616] object-cover"
          loading="lazy"
        />
        <div>
          {rec.linkedIn ? (
            <a
              href={rec.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-violet-300"
            >
              <LinkedInIcon className="text-primary h-3.5 w-3.5" />
              {rec.name}
              <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>
          ) : (
            <p className="text-sm font-medium text-white">{rec.name}</p>
          )}
          <p className="text-xs text-[#52525b]">{rec.role}</p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: IRecommendation[]; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrapper flex overflow-hidden">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((rec, i) => (
          <RecommendationCard key={`${rec.name}-${i}`} rec={rec} />
        ))}
      </div>
    </div>
  )
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  const half = Math.ceil(recommendations.length / 2)
  const row1 = recommendations.slice(0, half)
  const row2 = recommendations.slice(half)

  return (
    <section id="recommendations" className="overflow-hidden py-20">
      <div className="mx-auto mb-12 max-w-5xl px-6">
        <motion.p
          className="mb-3 text-sm font-medium tracking-widest text-violet-500 uppercase"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.p>
        <motion.h2
          className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Recommendations
        </motion.h2>
      </div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <MarqueeRow items={row1.length > 0 ? row1 : recommendations} />
        {row2.length > 0 && <MarqueeRow items={row2} reverse />}
      </motion.div>
    </section>
  )
}
