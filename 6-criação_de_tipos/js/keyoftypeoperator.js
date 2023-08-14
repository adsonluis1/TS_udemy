var p1 = {
    nome: 'adson',
    idade: 18,
    cnh: true
};
function entrevista(obj, ana) {
    if (obj.cnh === true && obj.idade >= 18) {
        console.log("parabens ".concat(obj[ana], " tem cnh, voce pode dirigir"));
    }
    else {
        console.log("desculpe ".concat(obj[ana], " n\u00E3o tem cnh, ent\u00E3o vc n\u00E3o pode dirigir"));
    }
}
entrevista(p1, "nome");
entrevista({ nome: 'adson', idade: 18, cnh: true }, 'nome');
