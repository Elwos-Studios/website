import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useReveal } from '../components/useReveal'

export default function SiteLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  useReveal(pathname)
  return (
    <>
      <Header />
      <main key={pathname} id="app" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
