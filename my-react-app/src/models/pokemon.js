export class Pokemon {
    name;
    type;
    height;
    weight;
    number;
    //image;
    hp;
    //level;
    //type 2;
    //OT original trainer - can't find in API though?
    attack;
    defence;
    speed;
    special;
    //IDno. 


    constructor(data){
        this.name=data.name;
        this.type=data.type;
        this.height=data.height;
        this.weight=data.weight;
        this.number=data.number;
        this.attack=data.attack;
        this.defence=data.defence;
        this.speed=data.speed;
        this.special=data.special;
        this.hp=data.hp;
    }
}

export class PokemonSpecies {
    //description;
}