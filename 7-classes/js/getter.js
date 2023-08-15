var pessoa = /** @class */ (function () {
    function pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Object.defineProperty(pessoa.prototype, "showfullnome", {
        get: function () {
            return "".concat(this.nome, " ").concat(this.sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    return pessoa;
}());
var p1 = new pessoa('adson', 'luis');
console.log(p1.showfullnome);
