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
