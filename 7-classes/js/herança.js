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
var Maquina = /** @class */ (function () {
    function Maquina(nome, verção) {
        this.nome = nome;
        this.verção = verção;
    }
    return Maquina;
}());
var SuperMaquina = /** @class */ (function (_super) {
    __extends(SuperMaquina, _super);
    function SuperMaquina(nome, verção, escudo, armas) {
        var _this = _super.call(this, nome, verção) || this;
        _this.escudo = escudo;
        _this.armas = armas;
        return _this;
    }
    return SuperMaquina;
}(Maquina));
var m1 = new Maquina('maquina de lavar', 2);
var sm1 = new SuperMaquina('maquina de matar', 5.0, 100, 30);
console.log(m1);
console.log(sm1);
