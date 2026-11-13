import { useEffect, useRef } from 'react'

export default function Strata() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--py', String(Math.min(window.scrollY, 600) / 600))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const line1 = 'M0 232 H220 V222 H380 V240 H620 V226 H840 V238 H1200'
  const line2 = 'M0 250 H300 V244 H560 V252 H900 V246 H1200'

  return (
    <svg ref={ref} className="strata" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="mist">
          <stop offset="0" stopColor="#FFF0DC" stopOpacity=".16" />
          <stop offset="1" stopColor="#FFF0DC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="layer far">
        <path d="M0 150 L120 110 L210 140 L330 80 L450 135 L560 95 L700 145 L820 100 L960 140 L1080 105 L1200 135 V260 H0Z" fill="#4d0a1a" />
      </g>
      <g className="mist">
        <ellipse cx="300" cy="150" rx="260" ry="26" fill="url(#mist)" />
        <ellipse cx="850" cy="165" rx="300" ry="30" fill="url(#mist)" />
      </g>
      <g className="layer mid">
        <path d="M0 185 Q150 150 300 178 T600 170 T900 182 T1200 165 V260 H0Z" fill="#430713" />
        <g fill="#2a0009" opacity=".9">
          <path d="M690 168 v-34 h6 v-8 h6 v8 h6 v-8 h6 v8 h6 v34Z" />
          <path d="M610 172 v-18 l10-9 l10 9 v18Z" />
        </g>
      </g>
      <path d="M0 215 H1200 V260 H0Z" fill="#2a0009" />
      <g stroke="#ff8a00" strokeOpacity=".35" fill="none" strokeWidth="1">
        <path d={line1} />
        <path d={line2} />
        <circle className="node" cx="380" cy="231" r="2.5" />
        <circle className="node n2" cx="840" cy="232" r="2.5" />
      </g>
      <path className="pulse" pathLength={1000} d={line1} fill="none" />
      <path className="pulse p2" pathLength={1000} d={line2} fill="none" />
    </svg>
  )
}
