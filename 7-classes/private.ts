class priva {
    private nome = 'adson'
    showNome= ():string=>{
        return `${this.nome}`
    }
}

const newobj = new priva()

// newobj.nome
// nao pode ser acessada nem pela classe que a criou somento por metodo

console.log(newobj.showNome())