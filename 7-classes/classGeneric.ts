class obj<T , F>{
    elemento
    elemento2
    constructor(elemento:T , elmeneto2:F){
        this.elemento= elemento
        this.elemento2= elmeneto2
    }

    showElementos=()=>{
        return `${this.elemento} e ${this.elemento2}`
    }
}

const newobj = new obj('string' , 17)
const newobj2 = new obj(true , 'haha')

console.log(newobj.showElementos())
console.log(newobj2.showElementos())
