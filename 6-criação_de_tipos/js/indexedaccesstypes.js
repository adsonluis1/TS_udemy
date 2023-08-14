function showkm(km) {
    console.log("o veiculotem ".concat(km, " km rodados"));
}
var newtruck = {
    nome: 'truck',
    km: 18000,
    peso: 60000,
    estado: 'rodando'
};
showkm(newtruck.km);
var newcar = {
    nome: 'carro',
    km: 90000,
    peso: 1500
};
showkm(newcar.km);
