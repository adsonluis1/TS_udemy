function showpessoa(pessoa, key) {
    if (key == 'nome') {
        console.log("o nome da pessoa \u00E9 ".concat(pessoa[key]));
    }
    else if (key == 'idade') {
        console.log("a pessoa tem ".concat(pessoa[key]));
    }
    else if (key == 'altura') {
        console.log("a pessoa tem ".concat(pessoa[key], " de altura"));
    }
}
var pessoa = {
    nome: 'adson',
    idade: 18,
    altura: 1.70
};
showpessoa(pessoa, 'nome');
showpessoa(pessoa, 'idade');
showpessoa(pessoa, 'altura');
