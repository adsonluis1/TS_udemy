var produto = /** @class */ (function () {
    function produto(nome, price, qtn) {
        var _this = this;
        this.nome = nome;
        this.price = price;
        this.qtn = qtn;
        this.showAll = function () {
            console.log("a ".concat(_this.nome, " est\u00E1 custando ").concat(_this.price, " e temos ").concat(_this.qtn, " no estoque"));
        };
        this.nome = nome;
        this.price = price;
        this.qtn = qtn;
    }
    Object.defineProperty(produto.prototype, "getQtn", {
        get: function () {
            return "".concat(this.qtn);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(produto.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return produto;
}());
var camisa = new produto('camisa', 49.99, 44);
var tenis = new produto('tenis', 250, 3);
console.log(camisa.getPrice);
console.log(camisa.getQtn);
console.log(camisa.showAll());
console.log(tenis.getPrice);
console.log(tenis.getQtn);
console.log(tenis.showAll());
