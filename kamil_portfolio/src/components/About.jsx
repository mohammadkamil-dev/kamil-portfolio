import { useEffect, useState } from 'react'
import { profile, stats } from '../data'
import { useInView } from '../hooks'
import Reveal from './Reveal'
import Title from './Title'
import Glass from './Glass'

function Counter({ value, suffix }) {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    const start = performance.now()
    let raf
    const step = (t) => {
      const p = Math.min((t - start) / 1400, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [seen])
  return <span ref={ref}>{n}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="section">
      <Title small="01 — About" plain="Crafting products," grad="end to end" />
      <div className="about-grid">
        <Reveal delay={100}>
          <Glass className="pad about-text">
            <p>{profile.about}</p>
            <p>{profile.about2}</p>
          </Glass>
        </Reveal>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 90}>
              <Glass className="stat">
                <div className="num grad"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="lbl">{s.label}</div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
