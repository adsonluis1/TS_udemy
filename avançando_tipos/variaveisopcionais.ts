function mostrar(n1:string, n2?:string , n3?:string){
    console.log(`PRIMEIRO NOME: ${n1}`)
    console.log(`SEGUNDO NOME: ${n2}`)
    console.log(`TERCEIRO NOME: ${n3}`)
}

// variavel com o ? antes do tipo significa que essa variavel não é obrigatoria

mostrar('adson' , 'anne' , 'pedro')

mostrar('adson')

// validação

function ola(primeirNome:string,segundoNome?:string){
    if(segundoNome !== undefined){
        return `Olá ${primeirNome} ${segundoNome}, como vai ?`
    }

    return `Olá ${primeirNome}, como vai ?`
}

console.log(ola('adson' , 'luis'))

console.log(ola('adson'))