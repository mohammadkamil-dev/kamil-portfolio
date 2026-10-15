import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import Title from './Title'
import Magnetic from './Magnetic'

// Phone frame that crossfades through screenshots
function Phone({ images, start = 0, interval = 2800, className = '', icon }) {
  const [i, setI] = useState(start % images.length)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((v) => (v + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [paused, images.length, interval])
  return (
    <div className={`phone ${className}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} data-hover>
      <div className="phone-notch" />
      <div className="phone-screen">
        {images.map((src, n) => (
          <img key={src} src={src} alt="" loading="lazy" className={n === i ? 'on' : ''} draggable="false" />
        ))}
      </div>
      <div className="phone-dots">
        {images.map((_, n) => <i key={n} className={n === i ? 'on' : ''} />)}
      </div>
      {icon && <img className="phone-app-icon" src={icon} alt="" />}
    </div>
  )
}

function Browser({ host, image }) {
  return (
    <div className="browser" data-hover>
      <div className="browser-bar">
        <span /><span /><span />
        <div className="url">🔒 {host}</div>
      </div>
      <div className="browser-view"><img src={image} alt="" loading="lazy" draggable="false" /></div>
    </div>
  )
}

function Dashboard() {
  const bars = [46, 72, 58, 88, 64, 94, 70]
  return (
    <div className="browser dash" data-hover>
      <div className="browser-bar"><span /><span /><span /><div className="url">🔒 mataaf-hr</div></div>
      <div className="dash-body">
        <aside>
          {['Dashboard', 'Attendance', 'Leave', 'Payroll', 'Employees'].map((t, n) => (
            <div key={t} className={`side-item ${n === 1 ? 'on' : ''}`}><i />{t}</div>
          ))}
        </aside>
        <div className="dash-main">
          <div className="kpis">
            {['Attendance', 'Leave', 'Payroll'].map((t) => (
              <div key={t} className="kpi"><small>{t}</small><b /></div>
            ))}
          </div>
          <div className="chart">
            {bars.map((h, n) => <span key={n} style={{ '--h': `${h}%`, '--d': `${n * 120}ms` }} />)}
          </div>
          <div className="rows">
            {[['Present', 'ok'], ['On leave', 'warn'], ['Present', 'ok']].map(([t, c], n) => (
              <div key={n} className="row"><i className="av" /><u /><em className={c}>{t}</em></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Showcase({ p, index, total }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.2 })
    io.observe(el)
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const stickyTop = parseFloat(getComputedStyle(el).top) || 0
      // 1.2 (far below) … 0 (pinned in place)
      const prog = (r.top - stickyTop) / (innerHeight * 0.6)
      el.style.setProperty('--p', Math.max(0, Math.min(1.2, prog)).toFixed(3))
      // how much the next card has slid over this one
      const next = el.nextElementSibling
      let depth = 0
      if (next && getComputedStyle(el).position === 'sticky') {
        const d = next.getBoundingClientRect().top - r.top
        depth = Math.max(0, Math.min(1, 1 - (d - 16) / (r.height * 0.9)))
      }
      el.style.setProperty('--s', depth.toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const flip = index % 2 === 1
  const Wrap = p.link ? 'a' : 'div'
  const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {}
  const n = String(index + 1).padStart(2, '0')

  return (
    <article ref={ref} className={`showcase ${flip ? 'flip' : ''} ${seen ? 'seen' : ''}`} style={{ '--accent': p.accent, '--i': index }}>
      <div className="show-bgnum" aria-hidden>{n}</div>

      <div className="show-text">
        <div className="show-meta">
          <span className="idx">{n} / {String(total).padStart(2, '0')}</span>
          <span className={`role-badge ${p.role === 'Built' ? 'built' : ''}`}>{p.role}</span>
        </div>
        <div className="proj-kind">{p.kind}</div>
        <h3>{p.appIcon && <img src={p.appIcon} alt="" className="app-ico" />}{p.name}</h3>
        <p>{p.desc}</p>
        <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <Magnetic>
          <Wrap {...linkProps} className={`btn show-btn ${p.link ? '' : 'disabled'}`}>
            {p.cta} {p.link && <i>↗</i>}
          </Wrap>
        </Magnetic>
      </div>

      <div className="show-visual">
        <div className="stage-glow" />
        <div className="ring r1" /><div className="ring r2" />
        {p.visual === 'phone' && (
          <div className="phones">
            <Phone images={p.images} start={2} className="side left" interval={3400} />
            <Phone images={p.images} start={0} className="main" icon={null} />
            <Phone images={p.images} start={4} className="side right" interval={3100} />
          </div>
        )}
        {p.visual === 'browser' && <div className="single"><Browser host={p.host} image={p.images[0]} /></div>}
        {p.visual === 'dashboard' && <div className="single"><Dashboard /></div>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section wide">
      <Title small="03 — Projects" plain="Products I've" grad="shipped" />
      <div className="showcases">
        {projects.map((p, i) => <Showcase key={p.name} p={p} index={i} total={projects.length} />)}
      </div>
    </section>
  )
}
