import { ReactElement } from 'react'
import cn from 'classnames'
import s from './Button.module.css'
import { motion } from 'framer-motion'
import { Props } from 'framer-motion/types/types'

export default function Button({
  children,
  variant = 'full',
  size = 'md',
  className,
  onClick,
  disabled = false,
}: Props): ReactElement {
  return (
    <motion.button
      disabled={disabled}
      whileTap={{ boxShadow: 'none', scale: 0.98 }}
      className={cn(s.button, s[variant], s[size], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
