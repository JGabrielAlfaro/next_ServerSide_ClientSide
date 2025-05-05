
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';


interface PokemonsState {
   favorites: {[ key : string ]: SimplePokemon}, //Modificamos el tipo de la propiedad favorites para que sea un objeto con claves de tipo string y valores de tipo SimplePokemon
}

// const getInitialState = (): PokemonsState => {

//   // if ( typeof window.localStorage === 'undefined')  return {} as PokemonsState; // Si no existe localStorage, devolvemos un objeto 
//   const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}') ;
//   return favorites;
// }
  
const initialState: PokemonsState = {
  // ...getInitialState(), // Obtenemos el estado inicial desde localStorage con el operador spread
  favorites:{}, // Inicializamos el estado como un objeto vacío
    // '1': { id: '1', name: 'Bulbasaur'},
    // '3': { id: '3', name: 'Venusaur'},
    // '5': { id: '5', name: 'Charmenleon'},
}


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons: (state, action: PayloadAction<{[ key : string ]: SimplePokemon}>) => {
      state.favorites = action.payload; //Recibimos un objeto con los pokemones favoritos y lo asignamos al estado
    },
    toggleFavortite: (state, action: PayloadAction<SimplePokemon>)=> {
      const pokemon = action.payload;
      const { id } = pokemon;

      //Si existe pone un true, si no existe pone un false
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;        
      }

      //Grabamos el objeto en localStorage
      //TODO: No se recomienda hacer esto en redux, pero es una buena forma de aprender
      localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
    }
    

  }
});

export const {toggleFavortite,setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer