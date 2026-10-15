import { useRef } from 'react'

// Wrapper that pulls its child toward the cursor
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }
  const leave = () => { ref.current.style.transform = '' }
  return (
    <span ref={ref} className="magnetic" onMouseMove={move} onMouseLeave={leave}>
      {children}
    </span>
  )
}
