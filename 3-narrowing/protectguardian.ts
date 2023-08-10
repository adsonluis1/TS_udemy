function somar(n1:string | number, n2:string | number){
    if(typeof n1 == 'number' && typeof n2 == 'number'){
        console.log(n1 + n2)
    }else if(typeof n1 == 'string' && typeof n2 == 'string'){
        console.log(parseFloat(n1) + parseFloat(n2))
    }else{
        console.log('[ERRO]  os parametros não pode ter tipos diferntes')
    }
}

somar(10 , 30)

somar('1' , '300')

somar(10 , '30')