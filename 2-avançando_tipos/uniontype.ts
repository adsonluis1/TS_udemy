// é um jeito de fzr com que a string aceite mias de um tipo

function retornarSaldo(saldo:string | number){
    return saldo
}

// no exemplo de cima a variavel saldo aceita tanto o tipo string como o tipo number

console.log(retornarSaldo(5000))
console.log(retornarSaldo('5000'))

// avançando em uniontype

function statuslog(status:string | boolean):string | void{
    if(typeof status == 'boolean'){
        return `Desculpa mas não foi possivel entrar`
    }

    return `Ola, seja bem vindo(a) novamente`
}

console.log(statuslog(false))
console.log(statuslog(`aceito`))


