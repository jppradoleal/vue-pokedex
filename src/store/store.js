import api from '../services/api'

export default {
    state: {
        pokemon: {},
        error: false
    },
    mutations: {
        setPokemon(state, payload) {
            console.log("Mutation called")

            const pokemon = payload.pokemon
            const error = payload.error
            
            state.pokemon = pokemon
            state.error = error
            
            console.log(state.pokemon)
        }
    },
    actions: {
        async fetchPokemon({commit}, payload) {
            let pokemonName = payload.pokemonName
            let pokemon = {}
            let error = false

            if(pokemonName == '')
                return

            try {
                pokemon = await api.getPokemon(pokemonName)
            } catch(e) {
                error = true
            }

            commit('setPokemon', {pokemon, error})
        }
    }
}