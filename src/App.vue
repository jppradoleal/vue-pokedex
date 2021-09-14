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
  data: function () {
    return {
      pokemon: {
        image: "https://via.placeholder.com/128",
        name: "Pikachu",
        statuses: [
          { name: "HP", value: "500" },
          { name: "SP", value: "1500" },
        ],
      },
    };
  },
  methods: {
    doSearch: function(event) {
      console.log(event)
    }
  }
};
</script>

<style>
</style>