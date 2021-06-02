import { FC } from 'react'
import { Props, asideItems } from './Props'
import Link from 'next/link'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useAside } from '~/contexts'
import { Card, Svg } from '~/components'

const Aside: FC<Props> = ({ className, ref }) => {
  const { pathname } = useRouter()
  const { setIsOpen } = useAside()

  return (
    <div
      className="fixed z-50 shadow-sm p-0"
      style={{ height: 'calc(100vh - 6rem)', width: 'inherit' }}
      ref={ref}
    >
      <Card className={`rounded-md w-full h-full bg-primay p-0 ${className}`}>
        <div className="mb-7 p-4">
          <p className="pb-5 border-b border-white mb-0 text-white">
            BLACKDASH
          </p>
        </div>

        <AnimateSharedLayout>
          {asideItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <a
                onClick={() => setIsOpen(false)}
                className={`flex items-center py-2.5 transition hover:text-white relative font-bold ${
                  pathname === item.href ? 'text-white' : 'text-gray-300'
                }`}
              >
                <div className="z-[2] mx-4 flex">
                  <Svg icon={item.icon} className="w-5 h-5" />
                  <small className="ml-2 mb-0">{item.name}</small>
                </div>

                {pathname === item.href && (
                  <motion.div
                    layoutId="active"
                    className="bg-gradient-to-r from-primary via-secondary to-pink-500 w-full h-full absolute z-[1]"
                  />
                )}
              </a>
            </Link>
          ))}
        </AnimateSharedLayout>
      </Card>
    </div>
  )
}

export default Aside
