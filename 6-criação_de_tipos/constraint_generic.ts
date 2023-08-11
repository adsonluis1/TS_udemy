function showproduct <t extends {nome:string,price:number}>(product:t):void {
    console.log(`a(o) ${product.nome} está custando ${product.price}`)
    console.log(product)
}

interface Products {
    nome:string
    price:number
    [index:string]:string | number
}

const camisa:Products = {
    nome:'Camisa manga longa',
    price:50,
    estado:'usada'
}

const mesa:Products = {
    nome: 'mesa',
    price: 500,
    estado:'nova',
    estilo:'industrial'

}


showproduct(camisa)
showproduct(mesa)

