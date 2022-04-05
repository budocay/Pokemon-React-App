import React, { FunctionComponent} from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemon from "../hooks/pokemon.hooks";

const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemon();

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;