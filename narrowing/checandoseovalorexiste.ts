function showPessoa(nome:string,idade?:number | undefined){
    if(idade){
        if(idade >= 18){
            console.log(`Olá ${nome}, notamos que vc é maior de idade`)
        }
        if(idade <=17){
            console.log(`Olá ${nome}, notamos que vc ainda é de menor`)
        }
    }else{
        console.log('desculpe, informe sua idade')
    }
}

showPessoa('adson')

showPessoa('adson', 18)

showPessoa('adson', 10)