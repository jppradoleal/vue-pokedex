<template>
  <section class="search">
    <input 
      type="text" 
      v-model="searchValue" 
      id="search" 
      @blur="doSearch"
      data-testid="search-input"
    >
    <button>Buscar</button>
  </section>
</template>

<script>
export default {
  name: 'search-box',
  data: function () {
    return {
      searchValue: "",
    }
  },
  methods: {
    doSearch() {
      this.$store.dispatch('fetchPokemon', {pokemonName: this.searchValue})
    }
  }
}
</script>

<style lang="sass">
  .search {
    display: flex;
    flex-direction: row;
    margin: 0 0 16px 0;
    
    button {
      padding: 5px 25px;
      
      background-color: var(--pink);
      color: white;
      border-radius: 0 5px 5px 0;
      border: none;
    }
    
    input {
      padding: 5px;
      
      color: white;
      border-radius: 5px 0 0 5px;
      border: none;
      color: black;
    }
  }
</style>