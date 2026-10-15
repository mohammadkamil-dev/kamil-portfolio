import { useInView } from '../hooks'

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
