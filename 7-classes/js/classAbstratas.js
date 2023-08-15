var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var identidade = /** @class */ (function () {
    function identidade(nome, cpf, rg, dataDeNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataDeNascimento = dataDeNascimento;
    }
    return identidade;
}());
var pessoa1 = /** @class */ (function (_super) {
    __extends(pessoa1, _super);
    function pessoa1(nome, cpf, rg, dataDeNascimento) {
        var _this = _super.call(this, nome, cpf, rg, dataDeNascimento) || this;
        _this.showinfo = function () {
            return "nome= ".concat(_this.nome, ", cpf ").concat(_this.cpf, ", rg= ").concat(_this.rg, ", data de nascimento = ").concat(_this.dataDeNascimento);
        };
        return _this;
    }
    return pessoa1;
}(identidade));
var cliente1 = new pessoa1('adson', 103.594, 31278, 29042005);
console.log(cliente1.showinfo());
