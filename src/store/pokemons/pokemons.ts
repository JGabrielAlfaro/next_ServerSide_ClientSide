
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';


interface PokemonsState {
    [ key : string ]: SimplePokemon,
  }
  
const initialState: PokemonsState = {
    '1': { id: '1', name: 'Bulbasaur'},
}


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavortite: (state, action: PayloadAction<SimplePokemon>)=> {
      const pokemon = action.payload;
      const { id } = pokemon;

      //Si existe pone un true, si no existe pone un false
      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = pokemon;        
      }
    }
    

  }
});

export const {toggleFavortite} = pokemonsSlice.actions

export default pokemonsSlice.reducer