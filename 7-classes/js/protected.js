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
var f = /** @class */ (function () {
    function f() {
        this.protegido = 69;
    }
    return f;
}());
var x = /** @class */ (function (_super) {
    __extends(x, _super);
    function x() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showprotegido = function () {
            return _this.protegido;
        };
        return _this;
    }
    return x;
}(f));
var newx = new x();
// newx.protegido
// da erro porq o protegido esta com o protected
console.log(newx.showprotegido());
