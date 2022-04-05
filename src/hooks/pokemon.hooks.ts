import {useState, useEffect} from "react";
import Pokemon from '../models/pokemon';
import POKEMONS from "../models/mock-pokemon";

const usePokemon = () => {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemon(POKEMONS);
    }, []);
    return pokemons;
}

export default usePokemon;