import { user } from "./m-tiposIntercafes.js";

class pessoa implements user{
    nome
    sobrenome
    idade
    constructor(nome:string,sobrenome:string,idade:number){
        this.nome=nome
        this.sobrenome= sobrenome
        this.idade=idade
    }
}

const p1= new pessoa('anne' , 'rafaelle' , 18)

console.log(p1)
