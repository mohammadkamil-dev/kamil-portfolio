import { profile } from '../data'
import { useTypewriter } from '../hooks'
import Magnetic from './Magnetic'

export default function Hero() {
  const role = useTypewriter(profile.roles)
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="badge fade-up" style={{ animationDelay: '.1s' }}>
          <span className="pulse" /> Available for new opportunities
        </div>
        <h1 className="fade-up" style={{ animationDelay: '.25s' }}>
          Hi, I'm <span className="grad">Mohammad<br />Kamil</span>
        </h1>
        <p className="type fade-up" style={{ animationDelay: '.4s' }}>
          <span className="mono">&gt;</span> {role}<span className="caret" />
        </p>
        <p className="lead fade-up" style={{ animationDelay: '.55s' }}>
          I build fast, scalable web &amp; mobile products — Node.js, NestJS, React and React Native — from API to App Store.
        </p>
        <div className="cta fade-up" style={{ animationDelay: '.7s' }}>
          <Magnetic><a href="#contact" className="btn primary">Let's talk</a></Magnetic>
          <Magnetic><a href="#experience" className="btn ghost">View experience</a></Magnetic>
        </div>
      </div>
      <div className="scroll-hint"><span /></div>
    </section>
  )
}
