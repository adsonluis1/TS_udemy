class user {
    nome:string
    constructor(nome:string){
        this.nome = nome
    }
}

class superUser extends user{
    constructor(nome:string){
        super(nome)
    }
}
const adson = new user('adson')
const anne = new superUser('anne')

function check(pessoa:object){
    if(pessoa instanceof superUser){
        console.log(`Olá senhora ${pessoa.nome}`)
    }
    else if(pessoa instanceof user){
        console.log(`Olá ${pessoa.nome}`)
    }
}

check(adson)
check(anne)