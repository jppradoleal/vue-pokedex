import App from './App.vue'
import Vue from 'vue'
import './assets/global.css'

const vm = new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App />'
})