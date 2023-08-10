function Preboasvindas(name:string){
    return `seja bem vindo(a) ${name}`
}

function Boasvindas(f:(nome:string) => string, username:string){
    console.log('preparando...')

    const ola= f(username)

    console.log(ola)
}

Boasvindas(Preboasvindas,'luis')


function Prefrase(modelo?:string | undefined):string{
    if(typeof modelo == 'string'){
    return `seu carro bateu em um ${modelo}`
    }else{
        return 'seu carro não bateu em nada'
    }
}

function frase(f:(modelo?:string | undefined) => string, model?:string | undefined){
    const hehe = f(model)

    console.log(hehe)
}

frase(Prefrase,'carro')
frase(Prefrase)