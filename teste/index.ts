function mydecoration(){
    console.log('começou')

    return function(
        target:any,
        properKey:string,
        descript:PropertyDescriptor
    ){
        console.log('no processo')
        console.log(target)
        console.log(properKey)
        console.log(descript)
    }
}

class myclass{
    @mydecoration()
    show(){
        console.log('terminou')
    }
}

const newobj = new myclass()
newobj.show()


// multiplos decoration

function d1(){
    console.log('começouuu d1')

    return function(
        target:any,
        properKey:string,
        descript:PropertyDescriptor
    ){
        console.log('no meio d1')
        console.log(target)
        console.log(properKey)
        console.log(descript)
    }
}

function d2(){
    console.log('começouu d2')

    return function(
        target:any,
        properKey:string,
        descript:PropertyDescriptor
    ){
        console.log('no meio d2')
        console.log(target)
        console.log(properKey)
        console.log(descript)
    }
}

class teste {
    @d1()
    @d2()
    show(){
        console.log('terminou')
    }
}

new teste().show()

// decoration com class


function decorationclass(decoration:Function){
    console.log(decoration)
}

@decorationclass
class testeclass{
    nome 
    constructor(nome:string){
        this.nome= nome
    }
}

console.log(new testeclass('adson'))