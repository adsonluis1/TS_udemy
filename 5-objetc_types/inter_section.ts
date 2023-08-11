// ele vai unir uma interface com outra gerando um type

interface Humano{
    nome:string,
    raca:string,
    idademax:number
}

interface Lobo{
    patas:boolean,
    calda:boolean,
    humanidade:boolean,
    conciencia:boolean
}

type lobsomem = Humano & Lobo

const scoot:lobsomem = {
    nome:'scoot',
    raca:'lobsomem',
    idademax:150,
    patas:true,
    calda:false,
    humanidade:false,
    conciencia:false
}

console.log(scoot)