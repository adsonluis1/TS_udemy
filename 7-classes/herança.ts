class Maquina {
    nome 
    verção
    constructor(nome:string, verção:number){
        this.nome = nome
        this.verção = verção
    }
}

class SuperMaquina extends Maquina{
    escudo
    armas
    constructor(nome:string,verção:number,escudo:number, armas:number){
        super(nome,verção)
        this.escudo= escudo
        this.armas = armas
    }
}

const m1 = new Maquina('maquina de lavar' , 2)

const sm1= new SuperMaquina('maquina de matar' , 5.0, 100, 30)


console.log(m1)
console.log(sm1)

