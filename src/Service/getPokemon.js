const responsePoke = apiResponse => {
  return apiResponse.results.map(pokemon => {
    return fetch(pokemon.url)
      .then(response => response.json())
      .then(pokemon => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          picture: pokemon.sprites.other.dream_world.front_default,
          pictureBackUp: pokemon.sprites.other['official-artwork'].front_default
        }
      }
      )
  })
}

export function getAllPokemon (offset = 0) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`)
    .then(response => response.json())
    .then(data => responsePoke(data))
}

export function getPokemon (PokeName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}/`)
    .then(response => response.json())
    .then(data => data)
}
