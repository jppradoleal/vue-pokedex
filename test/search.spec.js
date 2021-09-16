import {shallowMount, createLocalVue} from '@vue/test-utils'
import {render, fireEvent} from '@testing-library/vue'
import SearchComponent from '../src/components/Search.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Search bar', () => {
    let store
    let actions
    let mutations

    beforeEach(() => {
        actions = {
            fetchPokemon: jest.fn()
        }

        mutations = {
            setPokemon: jest.fn()
        }

        store = new Vuex.Store({
            state: {
                pokemon: {},
                error: false
            },
            mutations,
            actions
        })
    })
    
    test('Input losing focus triggers event', async() => {
        const {getByText, getByTestId} = render(SearchComponent, {store, actions})

        getByText('Buscar')
    
        const input = getByTestId('search-input')
    
        await fireEvent.blur(input)    
    })
})
