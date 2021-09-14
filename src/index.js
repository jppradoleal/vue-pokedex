import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import './assets/global.sass'
import storeObj from './store/store'

Vue.use(Vuex)

const store = new Vuex.Store(storeObj)

const vm = new Vue({
  el: '#app',
  components: {
    App,
  },
  store: store,
  template: '<App />'
})