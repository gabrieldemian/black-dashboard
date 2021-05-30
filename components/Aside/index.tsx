import { FC } from 'react'
import { Props, asideItems } from './Props'
import Link from 'next/link'
import Svg from '../Svg'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Aside: FC<Props> = ({ className }) => {
  const { pathname } = useRouter()

  return (
    <div
      className="fixed"
      style={{ height: 'calc(100vh - 2.5rem)', width: 'inherit' }}
    >
      <div
        className={`rounded-md p-4 w-full h-full bg-gradient-to-b from-primary via-secondary to-pink-500 ${className}`}
      >
        <div className="mb-7 mt-5">
          <p className="pb-5 border-b border-white mb-0 font-semibold">
            BLACKDASH
          </p>
        </div>

        <AnimateSharedLayout>
          {asideItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <a
                className={`flex items-center py-2.5 transition hover:text-white ${
                  pathname === item.href ? 'text-white' : 'text-gray-300'
                }`}
              >
                <Svg icon={item.icon} className="w-5 h-5" />
                <small className="ml-2 mb-0">{item.name}</small>

                {pathname === item.href && (
                  <motion.div className="ml-2" layoutId="active">
                    <Svg icon="arrowLeft" className="w-5 h-5" />
                  </motion.div>
                )}
              </a>
            </Link>
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default Aside