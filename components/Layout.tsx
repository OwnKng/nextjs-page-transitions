import styled from "styled-components"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Page from "./Page"
import Header from "./Header"
import Loading from "./Loading"

const pageVariants = {
  initial: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const variants = {
  initial: { height: 0 },
  animate: { height: "100%" },
  exit: { height: 0 },
}

const Layout = ({ children, className }: any) => {
  const router = useRouter()

  const [start, setStart] = useState(false)
  const [trans, setTrans] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => setStart(true)
    const handleLoaded = () => setLoaded(true)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleLoaded)

    return () => {
      router.events.off("routeChangeStart", handleStart)
    }
  }, [router, trans])

  useEffect(() => {
    loaded && trans ? setStart(false) : null
  }, [loaded, trans])

  useEffect(() => {
    start ? setTrans(false) : null
  }, [start])

  return (
    <div className={className}>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Page key={router.pathname}>
          <motion.main
            variants={pageVariants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            {children}
          </motion.main>
        </Page>
      </AnimatePresence>
      <Loading initialised={start} setComplete={() => setTrans(true)} />
    </div>
  )
}

export default styled(Layout)/*css */ ``
