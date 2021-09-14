<template>
  <fieldset>
    <input type="text" v-model="searchValue" id="search" @blur="$emit('do-search', searchValue)">
  </fieldset>
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

<style>

</style>