import { profile } from '../data'
import Reveal from './Reveal'
import Title from './Title'
import Glass from './Glass'
import Magnetic from './Magnetic'

const items = [
  { l: 'Email', v: profile.email, h: `mailto:${profile.email}`, i: '✉' },
  { l: 'Phone', v: profile.phone, h: `tel:${profile.phone.replace(/\s/g, '')}`, i: '✆' },
  { l: 'LinkedIn', v: 'mohammad-kamil', h: profile.linkedin, i: 'in' },
  { l: 'Location', v: profile.location, h: '#contact', i: '⌖' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Title small="05 — Contact" plain="Let's build something" grad="great" />
      <div className="contact-grid">
        {items.map((c, i) => (
          <Reveal key={c.l} delay={i * 80}>
            <a href={c.h} target={c.h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Glass className="pad contact-card">
                <span className="ico">{c.i}</span>
                <div><div className="lbl">{c.l}</div><div className="val">{c.v}</div></div>
              </Glass>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="center">
          <Magnetic><a className="btn primary big" href={`mailto:${profile.email}`}>Say hello 👋</a></Magnetic>
        </div>
      </Reveal>
      <footer>© {new Date().getFullYear()} Mohammad Kamil · Built with React</footer>
    </section>
  )
}
