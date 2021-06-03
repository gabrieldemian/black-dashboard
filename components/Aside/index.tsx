import { FC } from 'react'
import { Props, asideItems, endItems } from './Props'
import Link from 'next/link'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useAside } from '~/contexts'
import { Card, Svg } from '~/components'
import s from './Aside.module.css'
import cn from 'classnames'

const Aside: FC<Props> = ({ className, ref }) => {
  const { pathname } = useRouter()
  const { setIsOpen, isMobile } = useAside()

  return (
    <Card
      noPadding
      className={cn(
        `fixed flex flex-col w-[inherit] z-50 ${
          !isMobile ? s.asideHeight : 'h-screen'
        }`,
        className
      )}
      ref={ref}
    >
      <div className="mb-7 p-8">
        <p className="pb-5 border-b border-white mb-0 text-white">BLACKDASH</p>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="h-auto overflow-y-auto">
          <AnimateSharedLayout>
            {asideItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center py-2.5 transition hover:text-white relative font-semibold ${
                    pathname === item.href ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  <div className="z-[2] mx-8 flex">
                    <Svg icon={item.icon} />
                    <small className="ml-4 mb-0">{item.name}</small>
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
        </div>

        <div className="p-8">
          {endItems.map((item, i) => (
            <Link href={item.href}>
              <a className="flex items-center transition hover:text-white font-semibold py-2.5">
                <Svg icon={item.icon} />
                <small className="ml-4">{item.name}</small>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default Aside
