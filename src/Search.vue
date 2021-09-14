<template>
  <section class="search">
    <input type="text" v-model="searchValue" id="search" @blur="$emit('do-search', searchValue)">
    <button @click="$emit('do-search', searchValue)">Buscar</button>
  </section>
</template>

<script>
export default {
  name: 'search-box',
  data: function () {
    return {
      searchValue: "",
    }
  }
}
</script>

<style lang="sass">
  .search {
    display: flex;
    flex-direction: row;
    margin: 64px auto 16px;
    max-width: 260px;
    
    button {
      padding: 5px 25px;
      
      background-color: #f0f;
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