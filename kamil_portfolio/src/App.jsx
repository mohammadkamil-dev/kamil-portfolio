import { useEffect } from 'react'
import { initScroll } from './scroll'
import Background from './components/Background'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => initScroll(), [])
  return (
    <>
      <Background />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
