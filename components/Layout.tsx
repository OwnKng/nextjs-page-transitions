import styled from "styled-components"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import Page from "./Page"
import Header from "./Header"
import Loading from "./Loading"

const Layout = ({ children, className }: any) => {
  const router = useRouter()

  const [start, setStart] = useState(false)
  const [trans, setTrans] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) =>
      url === router.pathname ? null : setStart(true)

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
      <Page>{children}</Page>
      <Loading initialised={start} setComplete={() => setTrans(true)} />
    </div>
  )
}

export default styled(Layout)/*css */ ``
