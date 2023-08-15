interface mytitle{
    showtitle():string
}

class title implements mytitle{
    title
    constructor(title:string){
        this.title = title
    }
    showtitle(): string {
        return `seu titulo é ${this.title}` 
    }
}

const t1 = new title('banheira de nutella')

console.log(t1.showtitle())

