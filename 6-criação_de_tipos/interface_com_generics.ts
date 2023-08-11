interface Obj<U,T,X> {
    nome:string
    peso:Number
    pontas: U
    rodas: T
    municao: X
}

const tanque:Obj<false,number,number>={
    nome:'tanque',
    peso:3000,
    pontas:false,
    rodas:8,
    municao:100
}

console.log(tanque)

const ninja:Obj<number,boolean,number>={
    nome:'Naruto',
    peso:65,
    pontas:34,
    rodas:false,
    municao:30
}

console.log(ninja)