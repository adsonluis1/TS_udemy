// tipo um any mas ele nn executa nd antes de uma validação

function showRandom(elemento:unknown):void{
   if(elemento){
    if(typeof elemento == 'number'){
        console.log(`o elemenento é um number`)
    }else if(typeof elemento == 'string'){
        console.log(`o elemenento é uma string`)
    }else if(typeof elemento == 'boolean'){
        console.log(`o elemenento é um boolean`)
    }else{
        console.log('elemento não identificado')
    }
   }
}

showRandom(10)
showRandom('adson')
showRandom(true)
showRandom([])
showRandom({})