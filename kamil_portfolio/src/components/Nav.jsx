import { useEffect, useState } from 'react'

const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? scrollY / max : 0)
      let cur = ''
      links.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * 0.4) cur = id
      })
      setActive(cur)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="nav glass-bar">
        <a href="#top" className="logo">MK<span>.</span></a>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className={active === l ? 'active' : ''}>{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Hire me</a>
      </nav>
    </>
  )
}
