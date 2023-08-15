var priva = /** @class */ (function () {
    function priva() {
        var _this = this;
        this.nome = 'adson';
        this.showNome = function () {
            return "".concat(_this.nome);
        };
    }
    return priva;
}());
var newobj = new priva();
// newobj.nome
// nao pode ser acessada nem pela classe que a criou somento por metodo
console.log(newobj.showNome());
