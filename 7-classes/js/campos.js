// como fazer uma classe sem o valor das variaveis
var pessoa = /** @class */ (function () {
    function pessoa() {
    }
    return pessoa;
}());
var adsin = new pessoa;
console.log(adsin);
adsin.nome = 'adson';
adsin.idade = 18;
