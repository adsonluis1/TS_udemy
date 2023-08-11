function prefrase(nome:string):string{
    return `seja bem vindo ${nome}`
}

function frase(F:(nome:string) => string,supernome:string):void{
    const fullfrase= F(supernome)
    console.log(fullfrase)
}

frase(prefrase, 'adson')