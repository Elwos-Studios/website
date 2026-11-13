import { useEffect, useRef } from 'react'

interface Ember {
  x: number
  y: number
  r: number
  vy: number
  sway: number
  phase: number
  c: string
}

export default function Embers() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    let embers: Ember[] = []

    const spawn = (initial: boolean): Ember => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 10,
      r: 0.8 + Math.random() * 1.8,
      vy: 0.2 + Math.random() * 0.55,
      sway: 8 + Math.random() * 24,
      phase: Math.random() * Math.PI * 2,
      c: Math.random() < 0.8 ? '245,130,32' : '255,107,120',
    })

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = w < 600 ? 18 : 40
      embers = Array.from({ length: count }, () => spawn(true))
    }

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      ctx.clearRect(0, 0, w, h)
      for (const e of embers) {
        e.y -= e.vy
        if (e.y < -10) Object.assign(e, spawn(false))
        const x = e.x + Math.sin(t / 1300 + e.phase) * e.sway
        const fade = Math.max(0, Math.min(1, e.y / h))
        const alpha = fade * (0.45 + 0.55 * Math.sin(t / 350 + e.phase)) * 0.85
        ctx.beginPath()
        ctx.fillStyle = `rgba(${e.c},${Math.max(0, alpha)})`
        ctx.arc(x, e.y, e.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="embers" aria-hidden="true" />
}
