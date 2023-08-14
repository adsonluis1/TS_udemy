type caracteristicas = {nome:string, idade:number, cnh:boolean}

type F =  keyof caracteristicas

const p1:caracteristicas={
    nome:'adson',
    idade:18,
    cnh:true
}

function entrevista(obj:caracteristicas, ana:F){
    if(obj.cnh === true && obj.idade >= 18){
        console.log(`parabens ${obj[ana]} tem cnh, voce pode dirigir`)
    }else{
        console.log(`desculpe ${obj[ana]} não tem cnh, então vc não pode dirigir`)
    }
}

entrevista(p1,"nome")
entrevista({nome:'adson' , idade:18,cnh:true},'nome')