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
var user = /** @class */ (function () {
    function user(nome) {
        this.nome = nome;
    }
    return user;
}());
var superUser = /** @class */ (function (_super) {
    __extends(superUser, _super);
    function superUser(nome) {
        return _super.call(this, nome) || this;
    }
    return superUser;
}(user));
var adson = new user('adson');
var anne = new superUser('anne');
function check(pessoa) {
    if (pessoa instanceof superUser) {
        console.log("Ol\u00E1 senhora ".concat(pessoa.nome));
    }
    else if (pessoa instanceof user) {
        console.log("Ol\u00E1 ".concat(pessoa.nome));
    }
}
check(adson);
check(anne);
// extra
var Carro = /** @class */ (function () {
    function Carro(marca, nome, vellMax, portas) {
        this.marca = marca;
        this.nome = nome;
        this.vellMax = vellMax;
        this.portas = portas;
    }
    return Carro;
}());
var superCarro = /** @class */ (function (_super) {
    __extends(superCarro, _super);
    function superCarro(marca, nome, vellMax, portas, motor) {
        var _this = _super.call(this, marca, nome, vellMax, portas) || this;
        _this.motor = motor;
        return _this;
    }
    return superCarro;
}(Carro));
var gol = new Carro('wv', 'gol', 190, 4);
var aventador = new superCarro('lamborguini', 'aventador', 370, 2, 'v12');
function info(tipo) {
    if (tipo instanceof superCarro) {
        console.log("carro forte, marca:".concat(tipo.marca, ", nome:").concat(tipo.nome, ", vellMax: ").concat(tipo.vellMax, ", portas: ").concat(tipo.portas, ", motor: ").concat(tipo.motor));
    }
    else if (tipo instanceof Carro) {
        console.log("carro fraco, marca:".concat(tipo.marca, ", nome:").concat(tipo.nome, ", vellMax: ").concat(tipo.vellMax, ", portas: ").concat(tipo.portas));
    }
}
info(aventador);
info(gol);
