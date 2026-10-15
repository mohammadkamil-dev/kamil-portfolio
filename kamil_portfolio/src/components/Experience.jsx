import { useEffect, useRef } from 'react'
import { jobs } from '../data'
import Reveal from './Reveal'
import Title from './Title'
import Glass from './Glass'

export default function Experience() {
  const ref = useRef(null)

  // timeline line "draws" itself and dots light up as you scroll
  useEffect(() => {
    const el = ref.current
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const fill = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height))
      el.style.setProperty('--fill', fill.toFixed(3))
      el.querySelectorAll('.dot').forEach((d) => {
        d.classList.toggle('lit', d.getBoundingClientRect().top < innerHeight * 0.65)
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => { removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  return (
    <section id="experience" className="section">
      <Title small="02 — Experience" plain="Promoted twice at" grad="Mataaf Technologies" />
      <div className="timeline" ref={ref}>
        {jobs.map((j, i) => (
          <Reveal key={j.date} delay={i * 120} className="job">
            <span className="dot" />
            <Glass className="pad">
              <div className="job-head">
                <div>
                  <h3>{j.role}</h3>
                  <div className="org">{j.org}</div>
                </div>
                <span className="pill">{j.date}</span>
              </div>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Glass>
          </Reveal>
        ))}
      </div>
      <Reveal><div className="path glass-bar">Web Application Developer <i>→</i> Full Stack Developer <i>→</i> Product Ownership</div></Reveal>
    </section>
  )
}
