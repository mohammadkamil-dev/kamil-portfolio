import { useEffect, useRef } from 'react'

// Interactive particle network that reacts to the mouse
export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, raf
    const mouse = { x: -999, y: -999 }
    const dpr = Math.min(devicePixelRatio || 1, 2)
    let pts = []

    const resize = () => {
      w = c.width = innerWidth * dpr
      h = c.height = innerHeight * dpr
      c.style.width = innerWidth + 'px'
      c.style.height = innerHeight + 'px'
      const n = Math.min(110, Math.floor((innerWidth * innerHeight) / 14000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.4 + 0.6) * dpr,
      }))
    }
    const move = (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const link = 140 * dpr, mlink = 190 * dpr
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dxm = p.x - mouse.x, dym = p.y - mouse.y
        const dm = Math.hypot(dxm, dym)
        if (dm < mlink) {
          // gentle repel + connect to cursor
          p.x += (dxm / dm) * 0.6; p.y += (dym / dm) * 0.6
          ctx.strokeStyle = `rgba(0,229,255,${(1 - dm / mlink) * 0.5})`
          ctx.lineWidth = dpr
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
        ctx.fillStyle = 'rgba(180,200,255,.75)'
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < link) {
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / link) * 0.28})`
            ctx.lineWidth = dpr * 0.8
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); draw()
    addEventListener('resize', resize)
    addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <div className="bg" aria-hidden>
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      <div className="grid-overlay" />
      <canvas ref={ref} />
    </div>
  )
}
