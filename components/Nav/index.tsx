import { ReactElement, useEffect, useRef } from 'react'
import { useAside } from '~/contexts'
import { Aside, Svg } from '~/components'
import { motion } from 'framer-motion'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import Image from 'next/image'

export default function Nav(): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const { setIsOpen, isOpen, isMobile } = useAside()

  useEffect(() => {
    if (ref.current) {
      if (isOpen && isMobile) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen, isMobile])

  return (
    <>
      <div className="z-10 bg-secondary container h-14 flex justify-between items-center fixed top-0 left-0 right-0">
        <div>
          <small className="m-0 text-white">Dashboard</small>
        </div>

        <div className="flex items-center gap-5">
          <Svg
            onClick={() => setIsOpen(!isOpen)}
            icon="bell"
            className="cursor-pointer h-5 w-5"
          />
          <Image
            className="rounded-full mr-2 cursor-pointer"
            src="/euuu.jpg"
            width={30}
            height={30}
          />
          <Svg
            onClick={() => setIsOpen(!isOpen)}
            icon="menu"
            className="cursor-pointer h-5 w-5"
          />
          <Svg
            onClick={() => setIsOpen(!isOpen)}
            icon="dotsVertical"
            className="cursor-pointer h-5 w-5"
          />
        </div>
      </div>

      {/* Mobile Aside, it will only appear if the screen is small and will lock the scroll bar */}
      {isOpen && isMobile && (
        <motion.div
          className="z-10 fixed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 backdrop-filter backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
          <Aside ref={ref} className="w-[50vw] h-[100vh] z-50" />
        </motion.div>
      )}

      {/* Offset */}
      <div className="h-14" />
    </>
  )
}
