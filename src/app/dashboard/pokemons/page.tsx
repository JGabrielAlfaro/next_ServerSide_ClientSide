
import React from "react";
import { PokemonGrid, PokemonsReponse, SimplePokemon } from "../../../pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())
  const pokemons = data.results.map(item => ({
    id: item.url.split('/').at(-2)!, // toma el último valor de la URL
    name: item.name,
  }))
  // throw Error('Error');
  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>

  );
}