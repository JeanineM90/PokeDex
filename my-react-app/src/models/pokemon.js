export class Pokemon {
    name;
    type;
    height;
    weight;
    number;
    //image 
    //description

    constructor(data){
        this.name=data.name;
        this.type=data.type;
        this.height=data.height;
        this.weight=data.weight;
        this.number=data.number;
    }
}