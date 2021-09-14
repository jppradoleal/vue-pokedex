import api from '../services/api'

export default {
    state: {
        pokemon: {},
        error: false
    },
    mutations: {
        async getPokemon(state, payload) {
            console.log("Mutation called")

            const pokemonName = payload.pokemonName
            let pokemon;

            if(pokemonName == '') {
                state.pokemon = {}
                state.error = false
                return
            }

            try {
                pokemon = await api.getPokemon(pokemonName)
                state.error = false
            } catch(e) {
                pokemon = {}
                state.error = true
            }

            state.pokemon = pokemon
            console.log(state.pokemon)
        }
    }
}