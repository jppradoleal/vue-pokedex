
import _ from 'lodash'

function getStats(rawPokemon) {
  return rawPokemon['stats'].map((stat) => {
    return {
      name: _.upperFirst(stat["stat"]["name"]),
      value: stat["base_stat"]
    }
  })
}

function getTypes(rawPokemon) {
  return rawPokemon['types'].map((type) => {
    return {
      id: type['slot'],
      name: _.upperFirst(type['type']['name']),
    }
  })
}

export default {
  async getPokemon(pokemonName) {
    pokemonName = pokemonName.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const rawPokemon = await response.json()

    const pokemon = {
      name: _.upperFirst(rawPokemon["name"]),
      height: rawPokemon['height'],
      weight: rawPokemon['weight'],
      statuses: getStats(rawPokemon),
      image: rawPokemon['sprites']['front_default'],
      types: getTypes(rawPokemon)
    }

    return pokemon
  }
}