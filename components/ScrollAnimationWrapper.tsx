import { motion } from 'framer-motion'

export default function ScrollAnimationWrapper({
  children,
  className,
}: {
  children: any
  className: string
}) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
