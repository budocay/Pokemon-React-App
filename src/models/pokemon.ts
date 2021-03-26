export default class Pokemon {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    hp: number;
    name: string;
    picture: string;
    types: Array<string>;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Vitesse: number;
    created: Date;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        hp: number = 100,
        name: string = "",
        picture: string = 'src/assets/',
        types: Array<string> = ['Normal'],
        Attack: 0,
        Defense: 0,
        SpAttack: 0,
        SpDefense: 0,
        Vitesse: 0,
        created: Date = new Date()
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id;
        this.hp = hp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
        this.Attack = Attack;
        this.Defense = Defense;
        this.SpAttack = SpAttack;
        this.SpDefense = SpDefense;
        this.Vitesse = Vitesse;
    }
}