import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, suffix='', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = 0
      const end = Number(value)
      const step = Math.max(1, Math.ceil(end / 70))
      const timer = setInterval(() => {
        start += step
        if (start >= end) { start = end; clearInterval(timer) }
        setCount(start)
      }, 22)
      io.disconnect()
    }, { threshold: .4 })
    if (el) io.observe(el)
    return () => io.disconnect()
  }, [value])
  return <div ref={ref} className="glass card-hover rounded-[2rem] p-7 text-center">
    <p className="font-display text-5xl font-black text-gold">{count}{suffix}</p>
    <p className="mt-2 text-sm font-bold uppercase tracking-[.2em] text-ivory/60">{label}</p>
  </div>
}
