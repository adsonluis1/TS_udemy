function newdata(cria:Function){
    cria.prototype.Data= new Date()
}

function newid(){
    return function(target:object,propertyKey:string){

        let valor:string

        const getter = function(){
            return valor
        }

        const setter = function(newvalor:string){
            valor = newvalor.padStart(5,'0')
        }

        Object.defineProperty(target,propertyKey,{
            get:getter,
            set:setter
        })

    }
}

@newdata
class carro{
    marca
    modelo
    @newid()
    id
    Data
    constructor(marca:string,modelo:string,id:string){
        this.marca=marca
        this.modelo=modelo
        this.id=id
        this.Data= Date()
    }
}

const newcar = new carro('Fiat','Uno','132')

console.log(newcar)
console.log(newcar.Data)
console.log(newcar.marca)
console.log(newcar.id)
console.log(newcar.modelo)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cheeckvacina(){
    return function(
        target:object,
        key:string | symbol,
        descriptor:PropertyDescriptor
    ){
        const childfunk = descriptor.value

        descriptor.value = function(...args:any[]){
            if(args[1] === true){
                console.log('cidadão ja foi vacinado')
                return null
            }else{
                return childfunk.apply(this,args)
            }
        }

        return descriptor
    }
}

@newdata
class vacina{
    vacina=false  
    Data?:Date
    @cheeckvacina()
    carta(nome:string,vacinou:boolean){
        console.log(`o(a) cidadão ${nome} foi vacinado(a) na data: ${this.Data}`)
        this.vacina= vacinou
    }
}

const vacinação = new vacina()
vacinação.carta('adson' , false)