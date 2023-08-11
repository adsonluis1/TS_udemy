interface Carro {
    marca:string
    nome:string
    readonly rodas:number
}
//o readonly trasnforma o variavel em uma constante
const car1:Carro={
    marca:'wv',
    nome:'Gol',
    rodas:4
}

console.log(car1)
car1.marca= 'fiat'
car1.nome='Uno'
console.log(car1)
// sem o readonly as variaveis são trocadas sem erro

// car1.rodas=5
// ja com o uso do readonly na variavel 'rodas' retornara um erro


