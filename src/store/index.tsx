import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux'

// export default counterSlice, podemos cambiarle el nombre a counterReducer
import counterReducer from './counter/counterSlice'
// export default pokemonsSlice, podemos cambiarle el nombre a pokemonsReducer
import pokemonsReducer from './pokemons/pokemons';



export const store = configureStore({
  reducer: {
    counter: counterReducer, // cambiasmos el nombre a counter
    pokemons: pokemonsReducer // podemos cambiarle el nombre a pokemons
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()