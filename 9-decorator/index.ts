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