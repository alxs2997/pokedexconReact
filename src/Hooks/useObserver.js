import { useState, useEffect, useRef } from 'react'

export function useObserver () {
  const [observed, setVisible] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(newPokemons, {
      root: null,
      rootMargin: '5px',
      threshold: 0.5
    })
    observer.observe(elementRef.current)
  }, [observed])

  const newPokemons = (entries) => {
    if (entries[0].isIntersecting) {
      setVisible(entries[0].isIntersecting)
    } else {
      setVisible(false)
    }
  }
  return [observed, elementRef]
}
