import '../styles/globals.css'
import 'nprogress/nprogress.css'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { Aside, Nav } from '~/components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import { AsideProvider } from '~/contexts'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router.events])

  return (
    <ThemeProvider>
      <AsideProvider>
        <DefaultSeo
          title="Black Dashboard"
          description="Elegant black dashboard"
        />

        <Nav />

        <div className="flex mt-4">
          <div className="w-2/12 ml-8 hidden lg:block">
            <Aside />
          </div>

          <motion.div
            className="w-full lg:w-10/12"
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
                transition: { duration: 0.7 },
              },
              pageAnimate: {
                opacity: 1,
                transition: { duration: 0.7 },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </div>
      </AsideProvider>
    </ThemeProvider>
  )
}

export default MyApp
