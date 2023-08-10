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

// extra

class Carro{
    marca
    nome
    vellMax
    portas
    constructor(marca:string,nome:string,vellMax:number,portas:number){
        this.marca=marca
        this.nome=nome
        this.vellMax=vellMax
        this.portas=portas
    }
}

class superCarro extends Carro{
    motor
    constructor(marca:string,nome:string,vellMax:number,portas:number,motor?:string | undefined){
        super(marca,nome,vellMax,portas)
        this.motor= motor
    }
}

const gol = new Carro('wv' , 'gol' , 190, 4);
const aventador = new superCarro('lamborguini' , 'aventador' , 370, 2 , 'v12')

function info(tipo:object){
    if(tipo instanceof superCarro){
        console.log(`carro forte, marca:${ tipo.marca}, nome:${ tipo.nome}, vellMax: ${tipo.vellMax}, portas: ${tipo.portas}, motor: ${tipo.motor}`)
    }
    else if(tipo instanceof Carro){
        console.log(`carro fraco, marca:${ tipo.marca}, nome:${ tipo.nome}, vellMax: ${tipo.vellMax}, portas: ${tipo.portas}`)
    }
}


info(aventador)
info(gol)