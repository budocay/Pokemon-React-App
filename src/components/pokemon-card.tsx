import React, {FunctionComponent, useState} from "react";
import Pokemon from '../models/pokemon'

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};


const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#f44336'}) => {
    const [color, setColor] = useState<string>();
    const [dateCaptured, setDate] = useState(new Date());

    const captureDate = () => {
        setDate(new Date());
    }


    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5') // on remet la bordure en gris
    }

    return (
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ border: 'solid 4px',borderColor: color }}>
                <div className="card-image">
                  <img src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content" onClick={captureDate}>
                        <p>{pokemon.name}</p>
                        <p><small>{dateCaptured.toString()}</small></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PokemonCard;