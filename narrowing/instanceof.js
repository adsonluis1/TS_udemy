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
