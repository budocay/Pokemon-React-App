import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';

type Props = {
    pokemon: Pokemon
    isEditForm?: boolean
};

type Field = {
    value?: any,
    error?: string,
    isValide?: boolean
}

type Form = {
    name: Field,
    hp: Field,
    cp: Field,
    spAttack: Field,
    spDef: Field,
    speed: Field,
    types: Field
}

const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {

    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy', 'Glace', 'Sol',
        'Dragon', 'Roche'
    ];


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {[fieldName]: {value: fieldValue}};

        setForm({...form, ...newField});
    }

    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        let newField: Field;

        if (checked) {
            // si l'user coche un type on l'ajoute a la lyste des types du pokémon
            const newTypes: string[] = form.types.value.concat([type]);
            newField = {value: newTypes};
        } else {
            // Si l'yser déoche un type on le retire de la liste des types du pokémon
            const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
            newField = {value: newTypes};
        }

        setForm({...form, ...{types: newField}});
    }
    const [form, setForm] = useState<Form>({
        name: {value: pokemon.name, isValide: true},
        hp: {value: pokemon.hp, isValide: true},
        cp: {value: pokemon.Attack, isValide: true},
        spAttack: {value: pokemon.SpAttack, isValide: true},
        spDef: {value: pokemon.SpDefense, isValide: true},
        speed: {value: pokemon.Vitesse, isValide: true},
        types: {value: pokemon.types, isValide: true},
    });

    const hasType = (type: string): boolean => {
        return form.types.value.includes(type);
    }

    return (
        <form>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* Pokemon name */}
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                                </div>
                                {/* Pokemon hp */}
                                <div className="form-group">
                                    <label htmlFor="hp">Point de vie</label>
                                    <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                                </div>
                                {/* Pokemon cp */}
                                <div className="form-group">
                                    <label htmlFor="cp">Dégâts</label>
                                    <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                                </div>

                                {/* Pokemon Spe Attack */}
                                <div className="form-group">
                                    <label htmlFor="spAttack">Attaque Spéciale</label>
                                    <input id="spAttack" name="spAttack" type="number" className="form-control" value={form.spAttack.value} onChange={e => handleInputChange(e)}></input>
                                </div>
                                {/* Pokemon Spe Def */}
                                <div className="form-group">
                                    <label htmlFor="spDef">Défense Spéciale</label>
                                    <input id="spDef" name="spDef" type="number" className="form-control" value={form.spDef.value} onChange={e => handleInputChange(e)}></input>
                                </div>
                                {/* Pokemon Speed */}
                                <div className="form-group">
                                    <label htmlFor="speed">Vitesse</label>
                                    <input id="speed" name="speed" type="number" className="form-control" value={form.speed.value} onChange={e => handleInputChange(e)}></input>
                                </div>
                                {/* Pokemon types */}
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{marginBottom: '10px'}}>
                                            <label>
                                                <input id={type} type="checkbox" className="filled-in" value={type} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                                                <span>
                                                    <p className={formatType(type)}>{ type }</p>
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                                {/* Submit button */}
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PokemonForm;