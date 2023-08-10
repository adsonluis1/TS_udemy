function Preboasvindas(name) {
    return "seja bem vindo(a) ".concat(name);
}
function Boasvindas(f, username) {
    console.log('preparando...');
    var ola = f(username);
    console.log(ola);
}
Boasvindas(Preboasvindas, 'luis');
function Prefrase(modelo) {
    if (typeof modelo == 'string') {
        return "seu carro bateu em um ".concat(modelo);
    }
    else {
        return 'seu carro não bateu em nada';
    }
}
function frase(f, model) {
    var hehe = f(model);
    console.log(hehe);
}
frase(Prefrase, 'carro');
frase(Prefrase);
