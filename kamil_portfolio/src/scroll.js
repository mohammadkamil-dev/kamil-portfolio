import Lenis from 'lenis'

export const scrollState = { y: 0, vel: 0 }
let lenis = null

// Smooth inertial scrolling + shared scroll state for parallax effects
export function initScroll() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true })
  document.documentElement.classList.add('lenis')

  const hero = document.getElementById('top')
  const bg = document.querySelector('.bg')
  let raf
  const loop = (t) => {
    lenis.raf(t)
    scrollState.y = lenis.scroll
    scrollState.vel = lenis.velocity
    if (hero) hero.style.setProperty('--sy', Math.min(scrollState.y, innerHeight * 1.5).toFixed(1))
    if (bg) bg.style.setProperty('--sy', scrollState.y.toFixed(1))
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  // anchor links glide with easing instead of jumping
  const onClick = (e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href').slice(1)
    const el = id === 'top' ? 0 : document.getElementById(id)
    if (el === null) return
    e.preventDefault()
    lenis.scrollTo(el, { offset: id === 'top' ? 0 : -10, duration: 1.6, easing: (x) => 1 - Math.pow(1 - x, 4) })
  }
  document.addEventListener('click', onClick)

  return () => {
    cancelAnimationFrame(raf)
    document.removeEventListener('click', onClick)
    lenis.destroy()
    document.documentElement.classList.remove('lenis')
  }
}
