import { motion } from 'motion/react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #05df72, #00a6f4, #06b6d4)',
      }}
    />
  )
}
