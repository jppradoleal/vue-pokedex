<template>
  <section v-if="!!pokemon" class="card">
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
export default {
  name: 'pokemon-card',
  props: [
    'pokemon'
  ]
}
</script>

<style lang="sass">
  .card {
    display: flex;
    flex-direction: column;
    max-width: 310px;
    align-items: center;
    margin: 0 auto;

    background-color: #222;
    padding: 25px;
    color: white;
    border-radius: 5px;
    border: 4px solid #f0f;
    
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
        padding: 5px 25px;
        
        border-radius: 5px;
        background-color: #f0f;
      }
    }
    
    .stats {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>