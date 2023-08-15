class pessoa {
    nome
    sobrenome
    constructor(nome:string,sobrenome:string){
        this.nome= nome
        this.sobrenome = sobrenome
    }

    get showfullnome(){
        return `${this.nome} ${this.sobrenome}`
    }
}

const p1 = new pessoa ('adson' , 'luis')

console.log(p1.showfullnome)