import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const glow = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    document.documentElement.classList.add('has-cursor')
    let mx = innerWidth / 2, my = innerHeight / 2
    let rx = mx, ry = my, gx = mx, gy = my, raf
    const trail = []

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dot.current.style.transform = `translate(${mx}px, ${my}px)`
      const hov = e.target.closest('a, button, [data-hover], input, textarea')
      ring.current.classList.toggle('hover', !!hov)
      // sparkle trail
      if (Math.random() < 0.35) {
        const s = document.createElement('span')
        s.className = 'spark'
        s.style.left = mx + 'px'
        s.style.top = my + 'px'
        s.style.setProperty('--dx', (Math.random() - 0.5) * 40 + 'px')
        s.style.setProperty('--dy', (Math.random() - 0.5) * 40 + 'px')
        document.body.appendChild(s)
        setTimeout(() => s.remove(), 700)
      }
    }
    const down = () => ring.current.classList.add('down')
    const up = () => ring.current.classList.remove('down')
    const loop = () => {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16
      gx += (mx - gx) * 0.06; gy += (my - gy) * 0.06
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      glow.current.style.transform = `translate(${gx}px, ${gy}px)`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move)
    addEventListener('mousedown', down)
    addEventListener('mouseup', up)
    raf = requestAnimationFrame(loop)
    return () => {
      removeEventListener('mousemove', move)
      removeEventListener('mousedown', down)
      removeEventListener('mouseup', up)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={glow} className="cursor-glow" />
      <div ref={ring} className="cursor-ring"><i /></div>
      <div ref={dot} className="cursor-dot" />
    </>
  )
}
