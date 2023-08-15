class produto{
    constructor(public nome:string, private price:number, private qtn:number){
        this.nome = nome
        this.price = price
        this.qtn = qtn
    }

    get getQtn () {
        return `${this.qtn}`
    }

    get getPrice () {
        return this.price
    }

    showAll= () => {
        console.log(`a ${this.nome} está custando ${this.price} e temos ${this.qtn} no estoque`)
    }

}

const camisa = new produto('camisa' , 49.99 , 44)
const tenis = new produto('tenis' , 250, 3)
console.log(camisa.getPrice)
console.log(camisa.getQtn)
console.log(camisa.showAll())

console.log(tenis.getPrice)
console.log(tenis.getQtn)
console.log(tenis.showAll())