import { useScroll, useSpring } from 'motion/react'

export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  return scaleX
}
