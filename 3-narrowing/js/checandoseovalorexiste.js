function showPessoa(nome, idade) {
    if (idade) {
        if (idade >= 18) {
            console.log("Ol\u00E1 ".concat(nome, ", notamos que vc \u00E9 maior de idade"));
        }
        if (idade <= 17) {
            console.log("Ol\u00E1 ".concat(nome, ", notamos que vc ainda \u00E9 de menor"));
        }
    }
    else {
        console.log('desculpe, informe sua idade');
    }
}
showPessoa('adson');
showPessoa('adson', 18);
showPessoa('adson', 10);
