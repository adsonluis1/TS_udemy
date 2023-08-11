function showproduct(product) {
    console.log("a(o) ".concat(product.nome, " est\u00E1 custando ").concat(product.price));
    console.log(product);
}
var camisa = {
    nome: 'Camisa manga longa',
    price: 50,
    estado: 'usada'
};
var mesa = {
    nome: 'mesa',
    price: 500,
    estado: 'nova',
    estilo: 'industrial'
};
showproduct(camisa);
showproduct(mesa);
