import { useEffect } from 'react'

const SELECTOR = [
  '.page-head',
  '.card',
  '.post',
  '.note',
  '.contact > div',
  '.founders > .founder',
  'section .grid3 > div',
  'section .layers li',
  'section .split > div',
  'section > .wrap > h2',
  'section > .wrap > .lede',
  'section > .wrap > .btn',
  'section > .wrap > .eyebrow',
].join(',')

/** Fades elements in as they scroll into view. Re-runs on every route change. */
export function useReveal(routeKey: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
      el.style.setProperty('--d', `${Math.min(i, 5) * 110}ms`)
      el.classList.add('reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [routeKey])
}
