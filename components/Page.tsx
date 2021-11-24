import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/dist/client/router"

const variants = {
  initial: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const Page = ({ children }: any) => {
  const { pathname } = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        key={pathname}
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default Page
