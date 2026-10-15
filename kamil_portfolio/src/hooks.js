import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

export function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, i = 0, del = false, t
    const tick = () => {
      const word = words[w]
      i += del ? -1 : 1
      setText(word.slice(0, i))
      let d = del ? speed / 2 : speed
      if (!del && i === word.length) { del = true; d = pause }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 300 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 500)
    return () => clearTimeout(t)
  }, [])
  return text
}
