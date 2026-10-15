import { useRef } from 'react'

// Glass card with mouse-follow spotlight + 3D tilt
export default function Glass({ children, className = '', tilt = true, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    if (tilt) {
      const rx = ((y / r.height) - 0.5) * -8
      const ry = ((x / r.width) - 0.5) * 8
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }
  const onLeave = () => { ref.current.style.transform = '' }

  return (
    <div ref={ref} className={`glass ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} data-hover {...rest}>
      {children}
    </div>
  )
}
