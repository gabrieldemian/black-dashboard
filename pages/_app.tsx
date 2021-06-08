import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { Aside, Nav } from '~/components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import { AsideProvider } from '~/contexts'
import { AppProps, NextRouter } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import '../styles/nprogress.css'
import '../styles/typography.css'

function MyApp({ Component, pageProps }: AppProps) {

  const router: NextRouter = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  }, [router.events])

  return (
    <ThemeProvider forcedTheme="dark">
      <AsideProvider>
        <DefaultSeo
          title="BlackDash"
          description="Elegant black dashboard"
        />

        <Nav />

        <div className="flex mt-4 container">
          <div className="w-2/12 hidden lg:flex">
            <Aside />
          </div>

          <motion.div
            className="w-full lg:w-10/12 md:container"
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
