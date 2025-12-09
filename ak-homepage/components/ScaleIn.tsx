'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScaleIn({
  children,
  delay = 0,
  className = '',
}: ScaleInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
            }
          : {
              opacity: 0,
              scale: 0.8,
            }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
