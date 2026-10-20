import { useEffect, useState } from 'react'

export function useCarousel(total, interval = 5000) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setPaused] = useState(false)

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const goTo = (index) => setCurrent(index)

  useEffect(() => {
    if (isPaused || total <= 1) {
      return
    }

    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, interval)

    return () => window.clearInterval(id)
  }, [interval, isPaused, total])

  return { current, next, prev, goTo, setPaused }
}
