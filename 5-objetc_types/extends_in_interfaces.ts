interface humano {
    nome:string
    idade:number
    força:number
    velocidade:number
    superhabilidade?:string
}

interface superHumano extends humano{
    superPoder:string | string[] | number[]
}

const adsin:humano={
    nome:'adson',
    idade:18,
    força:100,
    velocidade:120,
    superhabilidade:'lindo'
}

const homemAranha:superHumano={
    nome:'homem-aranha',
    idade:20,
    força:12000,
    velocidade:50000,
    superhabilidade:'inteligete',
    superPoder:['Super força' , 'Super reflexo' , 'aumento de sentidos' , 'sentido aranha']
}

console.log(adsin)
console.log(homemAranha)

