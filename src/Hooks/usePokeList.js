import { useState, useEffect } from 'react'
import { getAllPokemon } from '../Service/getPokemon.js'
import { useLocalStorage } from './useLocalStorage.js'

export function usePokeList () {
  const [loading, setLoading] = useState()
  const [listPoke, setlistPoke] = useLocalStorage('listPoke', [])
  const [offset, setOffset, isLStorage] = useLocalStorage('offset', 0)

  useEffect(() => {
    if (isLStorage !== true) {
      setLoading(true)
      getAllPokemon(offset).then(data => Promise.all(data).then(dat => {
        setlistPoke(dat)
        setLoading(false)
      }))
    }
  }, [offset])

  return [listPoke, loading, setOffset, offset]
}
