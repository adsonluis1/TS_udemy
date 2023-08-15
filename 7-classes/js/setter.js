var cordenadas = /** @class */ (function () {
    function cordenadas() {
    }
    Object.defineProperty(cordenadas.prototype, "SetX", {
        set: function (X) {
            if (X === 0) {
                return;
            }
            this.x = X;
            console.log('x alterado');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cordenadas.prototype, "SetY", {
        set: function (Y) {
            if (Y === 0) {
                return;
            }
            this.y = Y;
            console.log('y alterado');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cordenadas.prototype, "ShowXY", {
        get: function () {
            return "X = ".concat(this.x, " e Y = ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return cordenadas;
}());
var cor = new cordenadas();
console.log(cor.SetX = 100);
console.log(cor.SetY = 17);
console.log(cor.ShowXY);
