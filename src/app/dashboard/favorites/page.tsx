
//import { PokemonGrid, PokemonsReponse, SimplePokemon } from "../../../pokemons";
// import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { FavoritePokemons } from '../../../pokemons/components/FavoritePokemons';

export const metadata = {
  title: 'Favoritos',
  description: 'Listado de pokemons'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      <FavoritePokemons />
    </div>

  );
}

