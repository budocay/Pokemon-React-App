import React, {FunctionComponent, useEffect, useState} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]); //Pokemons array state init

 useEffect(() => {
      setPokemons(POKEMONS); // Set the pokemon array from mock-pokemon
     }, [])// the '[]' allow us to get all data and stop the assignation

 return (
    <div>
        <h1 className="center">Pokédex</h1>
        <div className="container">
            <div className="row">
                {pokemons.map(({id, name, picture, created}) =>
                    <div className="col s6 m4" key={id}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={picture} alt={name}/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>{name}</p>
                                    <p><small>{created.toString()}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    </div>
 )
}
  
export default App;