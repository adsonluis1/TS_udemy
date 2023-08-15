abstract class identidade {
   nome
   cpf
   rg
   dataDeNascimento
   constructor(nome:string,cpf:number,rg:number,dataDeNascimento:number){
    this.nome= nome
    this.cpf=cpf
    this.rg= rg
    this.dataDeNascimento= dataDeNascimento
   }
   abstract showinfo():string
}

class pessoa1 extends identidade {
    constructor(nome:string,cpf:number,rg:number,dataDeNascimento:number){
        super(nome,cpf,rg,dataDeNascimento)
    }

    showinfo=()=>{
        return `nome= ${this.nome}, cpf ${this.cpf}, rg= ${this.rg}, data de nascimento = ${this.dataDeNascimento}`
    }

}

const cliente1= new pessoa1('adson', 103.594,31278,29042005)

console.log(cliente1.showinfo())