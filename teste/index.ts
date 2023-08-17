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


// class decorator 

function setdata(criar:Function){
    criar.prototype.data= new Date()
}

@setdata
class carro{
    nome
    motor
    constructor(nome:string, motor:string){
        this.nome=nome
        this.motor=motor
    }
}

console.log(new carro('civic' , '2.0'))

// exemplo property class

function newid(){
   return function(target:object, propertyKey:string){
    let valor:string

    const getter = function(){
        return valor
    }

    const setter = function(newvalor:string){
        valor = newvalor.padStart(5,'0')
    }

    Object.defineProperty(target,propertyKey,{
       set:setter,
       get:getter
    })
   }
}

function setMetros(){
    return function(target:object , propertyKey:string){
        let valor:string

        const getter = function(){
            return valor
        }

        const setter = function(newmetros:string){
            valor = newmetros + 'metros'
        }

        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        })

    }
}

function newdata(criar:Function){
    criar.prototype.DataCriada= new Date()
}

@newdata
class porta {
    @newid()
    id
    price
    @setMetros()
    tam
    DataCriada?:Date
    constructor(id:string, price=1000,tam:number){
        this.id=id
        this.price= price
        this.tam = tam
    }
}
const portanova= new porta('555' ,1500,2.5)

console.log(portanova) 
console.log(portanova.DataCriada) 
console.log(portanova.price) 
console.log(portanova.tam) 
console.log(portanova.id) 