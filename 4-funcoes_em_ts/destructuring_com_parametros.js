function showDog(_a) {
    var nome = _a.nome, raça = _a.raça, idade = _a.idade;
    console.log("meu nome \u00E9 ".concat(nome, " eu tenho ").concat(idade, " anos sou um cachorro da ra\u00E7a ").concat(raça));
}
showDog({ nome: 'kakus', raça: 'pastor alemão', idade: 7 });
