import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemon } from '../../Service/getPokemon'
import { DetailsPokemon } from '../../Components/DetailsPokemon/DetailsPokemon'
import { PokemonNFound } from '../NotFound/NotFound'
import { Spinner } from '../../Components/Spinner/Spinner'
import { Helmet } from 'react-helmet'

export function Details () {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPokemon(id).then(data => {
      setPokemon(data)
      setLoading(false)
      setError(false)
    }).catch(() => setError(true))
  }, [id])

  if (error) {
    return (
      <>
    <PokemonNFound/>
    <Helmet>
    <title>Pokemon Not Found | Pokedex</title>
    </Helmet>
    </>
    )
  }
  if (loading) {
    return (
      <>
    <Spinner/>
    <Helmet>
    <title>Loading.. | Pokedex</title>
    </Helmet>
    </>
    )
  }

  return (
    <>
    <Helmet>
    <title>Details of {pokemon.name} | Pokedex</title>
    <meta name="description" content={'Details of' + pokemon.name}/>
    </Helmet>

    <DetailsPokemon pokemon={pokemon}/>

    </>
  )
}
