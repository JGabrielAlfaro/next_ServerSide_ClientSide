import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action ) => {
        // console.log({state: state.getState()}); //Nos muestra el store (counter y pokemons)
        next(action);
        if (action.type === 'pokemons/toggleFavortite') {
            const {pokemons} = state.getState() as RootState; // as RootState es para el tipado de typescript
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
            return
        }
    }
}