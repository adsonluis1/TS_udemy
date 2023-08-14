interface a {}
interface b extends a {}

type mytype = b extends a ? string : boolean

// estou falando se b for uma extenção de a o mytype sera uma string

interface teste  {
    nome:string
}

type Pessoa = teste extends {nome} ? number : string