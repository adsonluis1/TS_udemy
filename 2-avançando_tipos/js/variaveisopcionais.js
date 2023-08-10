function mostrar(n1, n2, n3) {
    console.log("PRIMEIRO NOME: ".concat(n1));
    console.log("SEGUNDO NOME: ".concat(n2));
    console.log("TERCEIRO NOME: ".concat(n3));
}
// variavel com o ? antes do tipo significa que essa variavel não é obrigatoria
mostrar('adson', 'anne', 'pedro');
mostrar('adson');
// validação
function ola(primeirNome, segundoNome) {
    if (segundoNome !== undefined) {
        return "Ol\u00E1 ".concat(primeirNome, " ").concat(segundoNome, ", como vai ?");
    }
    return "Ol\u00E1 ".concat(primeirNome, ", como vai ?");
}
console.log(ola('adson', 'luis'));
console.log(ola('adson'));
