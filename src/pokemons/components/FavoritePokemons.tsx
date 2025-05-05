'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { use, useState,useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    //Convertimos nuestro objeto a un array, ya que el selector nos devuelve un array
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

    // const [pokemons, setPokemons] = useState(favoritePokemons);

    // useEffect(() => {
    //  setPokemons(favoritePokemons)
    // }, [favoritePokemons])
    

  return (
    // <PokemonGrid pokemons={favoritePokemons} />
    <>
         {
            favoritePokemons.length === 0 
            ?  (< NoFavorites /> )
            : (<PokemonGrid pokemons={favoritePokemons} />)
        }
  
    </>
   

  )
}

export const NoFavorites = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
       <IoHeartOutline size={100} className='text-red-500'/>
       <span className="text-2xl my-2">No hay favoritos</span>
      </div>
    )
  }
