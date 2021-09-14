<template>
  <div>
    <h1>Hello World</h1>
    <search-box @do-search="doSearch($event)"/>
    <pokemon-card :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";
import SearchBox from './Search.vue';

export default {
  name: "App",
  components: {
    PokemonCard,
    SearchBox,
  },
  data: function() {
    return {
      pokemon: {}
    }
  },
  methods: {
    doSearch: async function(pokemonName) {
      let rawPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      
      let pokemonStats = rawPokemon['stats'].map((stat) => {
          return {
            name: stat["stat"]["name"],
            value: stats["base_stat"]
          }
      })
      
      this.pokemon = {
        name: rawPokemon["name"],
        height: rawPokemon['height'],
        weight: rawPokemon['weight'],
        statuses: pokemonStats,
        image: rawPokemon['sprites']['front_default'] 
      }

      console.log(this.pokemon)
    }
  }
};
</script>

<style>
</style>