// parar criar objetos em interfaces que eu não sei o nome mas tenho que saber o tipo 


interface pessoa {
    [index:string]:string | number
}

const Pessoa:pessoa ={
    nome:'adson',
    idade:18,
    moradia:'Areia Branca',
    email:'adsi@dogmail.com'
}

Pessoa.pai = 'não'

console.log(Pessoa)

