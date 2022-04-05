import React, {FunctionComponent, useState} from 'react';

import PokemonList from "./pages/pokemon-list";
  
const App: FunctionComponent = () => {
 const [name, setName] = useState<String>('React');
 return (
    <PokemonList/>
 )
}
  
export default App;