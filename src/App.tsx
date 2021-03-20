import React, {FunctionComponent, useState} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";
  
const App: FunctionComponent = () => {
 const [pokemons, setpokemon] = useState<Pokemon[]>(POKEMONS);

 return (
  <h1>Il y a {pokemons.length} pokemon !</h1>
 )
}
  
export default App;

//TODO:
// Définir une variable d'état nommé pokemons dans le composant app.tsx
// Initialiser l'état avec la liste de pokemon contenu dans la constante pokemons
// Typer l'état pokemon pour qu'ils contiennent un array de pokémon
// Afficher le nombre de pokemon présent dans l'état du composant