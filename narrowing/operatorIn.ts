class Dog {
    nome
    raça
    constructor(nome:string,raça?:string){
        this.nome = nome
        if(raça){
            this.raça = raça
        }
    }
}

function showdog(dog:Dog){
    if('raça' in dog){
        console.log(`a raça de ${dog.nome} é ${dog.raça}`)
    }
    else{
        console.log(`${dog.nome} não tem raça`)
    }
}

const kakus = new Dog('kakus','pitbull')
const mel = new Dog('mel')

showdog(kakus)
showdog(mel)
