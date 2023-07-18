import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [isLStorage, setIsLStorage] = useState()
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)

      if (item) {
        setIsLStorage(true)
        return JSON.parse(item)
      }

      setIsLStorage(false)
      if (typeof initialValue === 'number') {
        window.sessionStorage.setItem(key, JSON.stringify(0))
      }
      return initialValue
    } catch (error) {
      console.log(error)
      setIsLStorage(false)
      return initialValue
    }
  })

  const setValue = value => {
    setIsLStorage(false)

    try {
      // added to state
      if (typeof value === 'object') {
        setStoredValue(prevPoke => [...prevPoke, ...value])

        const item = window.sessionStorage.getItem(key)
        if (item === null) {
          window.sessionStorage.setItem(key, JSON.stringify(value))
        } else {
          const prevPokes = JSON.parse(item)
          prevPokes.push(...value)
          window.sessionStorage.setItem(key, JSON.stringify(prevPokes))
        }
      } else {
        setStoredValue(value)
        window.sessionStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, isLStorage]
}
