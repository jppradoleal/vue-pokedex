<template>
  <div class="wrapper">
    <search-box @do-search="doSearch($event)"/>
    <pokemon-card :pokemon="pokemon"/>
    <small v-if="error">Pokemon não encontrado</small>
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue"
import SearchBox from './Search.vue'
import _ from 'lodash'

export default {
  name: "App",
  components: {
    PokemonCard,
    SearchBox,
  },
  data: function() {
    return {
      pokemon: {},
      error: false
    }
  },
  methods: {
    doSearch: async function(pokemonName) {
      pokemonName = pokemonName.toLowerCase()
      let response;
      let rawPokemon;
      try {
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        rawPokemon = await response.json()
        this.error = false
      } catch (e) {
        this.error = true
        this.pokemon = {}
        return;
      }

      let pokemonStats = rawPokemon['stats'].map((stat) => {
          return {
            name: _.upperFirst(stat["stat"]["name"]),
            value: stat["base_stat"]
          }
      })

      let pokemonTypes = rawPokemon['types'].map((type) => {
        return {
          id: type['slot'],
          name: _.upperFirst(type['type']['name']),
        }
      })
      
      this.pokemon = {
        name: _.upperFirst(rawPokemon["name"]),
        height: rawPokemon['height'],
        weight: rawPokemon['weight'],
        statuses: pokemonStats,
        image: rawPokemon['sprites']['front_default'],
        types: pokemonTypes 
      }
    }
  }
};
</script>

<style lang="sass">
  .wrapper {
    width: inherit;
    height: inherit;
  }
</style>