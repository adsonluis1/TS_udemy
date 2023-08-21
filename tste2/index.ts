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







































function checktam(){
    return function(target:object,propertyKey:string){
        
        let valor:string

        const getter = function(){
            return valor
        }

        const setter = function(newval:string){
            if(newval.length > 12){
                console.log('o maximo de caracteres no user name é 12')
            }else{
                valor = newval
                console.log('user name logado')
            }
        }

        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        })
    }
}

class login{
    @checktam()
    username
    senha
    constructor(username:string,senha:string){
        this.username= username
        this.senha= senha
    }

    show(){
        if(this.username === undefined){
            
        }else{
            console.log(this)
        }
    }
}

const newlogin = new login('adson12414124314' , '1213131')

newlogin.show()
































function verificaçãoNome(){
    return function(target:object,propertyKey:string){

        let valor:string

        const getter = function(){
            return valor
        }   

        const setter = function(newname:string){
            if(newname.length > 4 && newname.length < 16){ 
                valor = newname
                return
            }
                console.log('o nome tem que ter entre 4 a 16 caracteres')
            
        }

        Object.defineProperty(target,propertyKey,{
            set:setter,
            get:getter
        })

     }
}

class conta {
    @verificaçãoNome()
    login
    senha
    logado= false
    id?:number
    constructor(login:string,senha:number){
        this.login= login
        this.senha=senha
        this.logado= true
        this.id = Math.floor(Math.random()*100)
    }

    showconta(){
        console.log(`login: ${this.login}`)
        console.log(`id: ${this.id}`)
        console.log(`logado: ${this.logado}`)
    }
}

const contanova= new conta ('adson' , 132132131)

console.log(contanova)

contanova.showconta()
