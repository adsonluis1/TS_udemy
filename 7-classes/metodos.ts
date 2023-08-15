class npc {
    nome 
    constructor(nome:string){
        this.nome= nome
    }
    saudação=()=>{
        console.log(`ola player`)
    }
    despedida=()=>{
        console.log(`adeus player`)
    }

}

const frederico = new npc ('frederico')

console.log(frederico.nome)
frederico.saudação()
frederico.despedida()