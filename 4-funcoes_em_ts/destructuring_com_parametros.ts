function showDog({nome,raça,idade}:{nome:string,idade:number,raça:string}){
    console.log(`meu nome é ${nome} eu tenho ${idade} anos sou um cachorro da raça ${raça}`)
}

showDog({nome:'kakus' , raça:'pastor alemão' , idade:7})