import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Props {
  children: ReactNode
}

const AsideContext = createContext<any>(null)

export const AsideProvider = ({ children }: Props): any => {
  
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [innerWidth, setInnerWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {

      function handleResize() {
        setInnerWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    setIsMobile(innerWidth < 1024)
  }, [innerWidth])

  return (
    <AsideContext.Provider value={{ isMobile, isOpen, setIsOpen }}>
      {children}
    </AsideContext.Provider>
  )
}

export const useAside = () => useContext(AsideContext)
