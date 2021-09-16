<template>
  <div class="wrapper">
    <h1>PokeVue</h1>
    <search-box @do-search="doSearch($event)"/>
    <pokemon-card />
    <small v-if="error">Pokemon não encontrado</small>
  </div>
</template>

<script>
import PokemonCard from './components/PokemonCard.vue'
import SearchBox from './components/Search.vue'

export default {
  name: "App",
  components: {
    PokemonCard,
    SearchBox,
  },
  computed: {
    error: function() {
      return this.$store.state.error
    }
  },
};
</script>

<style lang="sass">
  .wrapper {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: canter;
    font-family: sans-serif;

    small, h1 {
      color: white;
    }
  }
</style>