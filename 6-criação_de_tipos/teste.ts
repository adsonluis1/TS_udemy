function showpessoa<T, K extends keyof T>(pessoa:T, key:K){
    if(key == 'nome'){
        console.log(`o nome da pessoa é ${pessoa[key]}`)
    }else if (key == 'idade'){
        console.log(`a pessoa tem ${pessoa[key]}`)
    }else if (key == 'altura'){
        console.log(`a pessoa tem ${pessoa[key]} de altura`)
    }
    
}

const pessoa = {
    nome:'adson',
    idade:18,
    altura:1.70
}

showpessoa(pessoa, 'nome')
showpessoa(pessoa, 'idade')
showpessoa(pessoa, 'altura')