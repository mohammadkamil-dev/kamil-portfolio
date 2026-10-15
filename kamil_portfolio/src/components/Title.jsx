import { useInView } from '../hooks'

// Section title: words rise out of a mask one by one
export default function Title({ small, plain, grad }) {
  const [ref, seen] = useInView({ threshold: 0.4 })
  let n = 0
  const words = (str, cls) =>
    str.split(' ').filter(Boolean).map((w) => (
      <span key={cls + w + n} className="w">
        <span className={`wi ${cls}`} style={{ transitionDelay: `${150 + n++ * 70}ms` }}>{w}&nbsp;</span>
      </span>
    ))
  return (
    <h2 ref={ref} className={`title split ${seen ? 'in' : ''}`}>
      <small>{small}</small>
      {words(plain, '')}
      {words(grad, 'grad')}
    </h2>
  )
}
