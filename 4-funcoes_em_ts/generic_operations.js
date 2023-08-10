function showpessoas(pessoas) {
    return pessoas;
}
console.log(showpessoas(['adson', 'anne', 'rafaelle', 'luis']));
function showcarros(carros) {
    return carros;
}
console.log(showcarros({ marca: 'BMW', modelo: 'm3', velMax: '300km/h' }));
console.log(showcarros({ marca: 'Fiat', modelo: 'Touro', cargaMax: '1 tonelada', capota: 'sim' }));
// reduzindo os tipos que podem ser usados no generic operations
function maiorOUmenor(num1, num2) {
    var numMaior;
    if (+num1 > +num2) {
        numMaior = num1;
    }
    else {
        numMaior = num2;
    }
    console.log("o numero maior \u00E9 o ".concat(numMaior));
}
maiorOUmenor('60', '10');
