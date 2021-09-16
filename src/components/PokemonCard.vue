<template>
  <section v-if="show" class="card">
    <img :src="pokemon.image"/>
    <h2>{{pokemon.name}}</h2>
    <div class="badges">
      <span v-for="type in pokemon.types" :key="type.id">{{type.name}}</span>
    </div>
    <ul class="stats">
      <li v-for="status in pokemon.statuses" :key="status.name">{{status.name}}: {{status.value}}</li>
    </ul>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'pokemon-card',
  computed: {
    pokemon: function() {
      return this.$store.state.pokemon
    },
    show: function() {
      return !_.isEmpty(this.$store.state.pokemon)       
    }
  }
}
</script>

<style lang="sass">
  .card {
    display: flex;
    flex-direction: column;
    max-width: 310px;
    align-items: center;
    padding: 25px;

    background-color: #222;
    color: white;
    border-radius: 5px;
    border: 4px solid var(--pink);
    
    font-family: sans-serif;
    
    img {
      width: 128px;
    }
    
    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-self: flex-start;
      
      span {
        padding: 5px 20px;
        
        border-radius: 5px;
        background-color: var(--pink);
      }
    }
    
    .stats {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>