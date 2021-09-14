<template>
  <section v-if="!!pokemon">
    <img :src="pokemon.image"/>
    <h2>{{pokemon.name}}</h2>
    <ul>
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

<style>

</style>