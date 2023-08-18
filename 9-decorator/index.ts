// primeiros passos

function mydecorator(){
    console.log('iniciando decorator')

    return function (
        target:any,
        properKey:string,
        descriptor:PropertyDescriptor
    ){
        console.log('executando decorator');
        console.log(target);
        console.log(properKey);
        console.log(descriptor);
    }
}

class myclass {
    @mydecorator()
    testing() {
        console.log('terminando execução')
    }
}

const myobj = new myclass();

myobj.testing();


// multiplos decorators

function a(){
    console.log('iniciou a')

    return function(
        target:any,
        properKey:string,
        descriptor:PropertyDescriptor
    ){
        console.log('realizando')
        console.log(target)
        console.log(properKey)
        console.log(descriptor)
    } 

}

function b (){
    console.log('iniciou b')

    return function(
        target:any,
        properKey:string,
        descriptor:PropertyDescriptor
    ){
        console.log('terminando b')
        console.log(target)
        console.log(properKey)
        console.log(descriptor)
    }
}

class multioplosDecora{
    @a()
    @b()
    start (){
        console.log('acabo')
    }
}

const newmulti = new multioplosDecora()

newmulti.start()


// class decorator

function destructor(constructor:Function){
    console.log(constructor)
    if(constructor.name === 'user'){
        console.log('criando usuario')
    }
}

@destructor
class user{
    nome
    constructor(nome:string){
        this.nome= nome
    }
}

const adson = new user('adson')
console.log(adson)

// exemplo class decorator
function createDate(criar:Function){
    criar.prototype.createAt = new Date()
}

@createDate
class pen{
    id
    constructor(id:string){
        this.id= id
    }
}

@createDate
class book{
    id
    constructor(id:string){
        this.id= id
    }
}

const np = new pen('1')
const nb = new book('2')

console.log(nb)
console.log(np)

// exemplo

function newid(){
    return function(target:object, propertyKey:string){

        let valor:string
        
        const getter = function(){
            return valor
        }

        const setter = function(newval:string){
            valor = newval.padStart(5,'0')
        }

        Object.defineProperty(target, propertyKey ,{
            set: setter,
            get:getter
        })
    }
}

class id{
    @newid()
    id
    constructor(id:string){
        this.id = id
    }
}

console.log(new id('66'))

// exemplo method decorator

function verficaçãopost(){
    return function(target:object,
        key:string | Symbol,
        descriptor:PropertyDescriptor)
        {
            
            const childFunction = descriptor.value
            descriptor.value= function(...args:any[]){
                if(args[1] === true){
                    console.log('o usuario ja postou, infelismente não pode postar dnv')
                    return null
                }else{
                    return childFunction.apply(this,args)
                }
            }

            return descriptor
        }
}

class Post {
    japostou= false
    @verficaçãopost()
    post(content:string, japostou:boolean){
        this.japostou = true
        console.log(`o usuario:${content} fez um post`)
    }
}

const newPost = new Post()

newPost.post('adson' , newPost.japostou)
newPost.post('hehe' , newPost.japostou)
newPost.post('haha' , newPost.japostou)
