var Dog = /** @class */ (function () {
    function Dog(nome, raça) {
        this.nome = nome;
        if (raça) {
            this.raça = raça;
        }
    }
    return Dog;
}());
function showdog(dog) {
    if ('raça' in dog) {
        console.log("a ra\u00E7a de ".concat(dog.nome, " \u00E9 ").concat(dog.raça));
    }
    else {
        console.log("".concat(dog.nome, " n\u00E3o tem ra\u00E7a"));
    }
}
var kakus = new Dog('kakus', 'pitbull');
var mel = new Dog('mel');
showdog(kakus);
showdog(mel);
