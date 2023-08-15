var obj = /** @class */ (function () {
    function obj(elemento, elmeneto2) {
        var _this = this;
        this.showElementos = function () {
            return "".concat(_this.elemento, " e ").concat(_this.elemento2);
        };
        this.elemento = elemento;
        this.elemento2 = elmeneto2;
    }
    return obj;
}());
var newobj = new obj('string', 17);
var newobj2 = new obj(true, 'haha');
console.log(newobj.showElementos());
console.log(newobj2.showElementos());
