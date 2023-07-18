import React from 'react'
import './DetailsPokemon.css'
import { useNavigate } from 'react-router-dom'

export function DetailsPokemon ({ pokemon }) {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/Pokedex/')
  }
  return (

    <div className='DetailsPokemon'>
      <div className='Head'>
      <h1 className='DetailsPokemonName'>{pokemon.name}</h1>
      <img className='DetailsImage' src={pokemon.sprites.other.dream_world.front_default ?? pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      </div>

      <div className='body'>

      <p>Weight: {(pokemon.weight / 10).toString().replace('.', ',')} Kg</p>
      <p>Height: {(pokemon.height / 10).toString().replace('.', ',')} M</p>

      <div className='typesContainer'>
      <p>Type: </p>
      <div className='types'>
      {pokemon.types.map(type => <p key={type.type.name}>{type.type.name}</p>)}
      </div>
      </div>

      <div className='abilitiesContainer'>
      <p>Abilities: </p>
      <div className='abilities'>
      {pokemon.abilities.map(ability => <p key={ability.ability.name}>{ability.ability.name}</p>)}
      </div>
      </div>

      </div>
      <div className='stadisticsContainer'>
      <p>Stats:</p>
      <div className='stadistics'>
      {pokemon.stats.map(stat => <p key={stat.stat.name}> {stat.stat.name + ': ' + stat.base_stat }</p>
      )}
      </div>
      </div>
      <div className='moveContainer'>
      <button onClick={handleHome} className='Page404BTN'>Go to Home</button>
      </div>
    </div>
  )
}
