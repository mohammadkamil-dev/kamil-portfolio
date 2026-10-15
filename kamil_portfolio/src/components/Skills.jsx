import { useEffect, useRef } from 'react'
import { skills } from '../data'
import { scrollState } from '../scroll'
import Reveal from './Reveal'
import Title from './Title'
import Glass from './Glass'

const marquee = skills.flatMap((s) => s.items)

export default function Skills() {
  const track = useRef(null)

  // marquee drifts on its own and speeds up / reverses with scroll velocity
  useEffect(() => {
    let x = 0, boost = 0, raf
    const loop = () => {
      boost += (scrollState.vel * 0.9 - boost) * 0.08
      x -= 0.6 + boost
      const half = track.current.scrollWidth / 2
      if (x <= -half) x += half
      if (x > 0) x -= half
      track.current.style.transform = `translateX(${x}px) skewX(${Math.max(-12, Math.min(12, -boost * 1.5))}deg)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="skills" className="section">
      <Title small="04 — Skills" plain="My" grad="tech arsenal" />
      <div className="skill-grid">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <Glass className="pad skill">
              <div className="skill-top"><span className="ico">{s.icon}</span><h3>{s.title}</h3></div>
              <div className="tags">{s.items.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </Glass>
          </Reveal>
        ))}
      </div>
      <div className="marquee" aria-hidden>
        <div className="track" ref={track}>
          {[...marquee, ...marquee].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </section>
  )
}
