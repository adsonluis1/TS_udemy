type truck = {nome:string, km:number, peso:number, estado:string}

type km = truck['km']

function showkm(km:km){
    console.log(`o veiculotem ${km} km rodados`)
}

const newtruck:truck={
    nome:'truck',
    km:18000,
    peso:60000,
    estado:'rodando'
}

showkm(newtruck.km)

const newcar = {
    nome:'carro',
    km:90000,
    peso:1500
}

showkm(newcar.km)

