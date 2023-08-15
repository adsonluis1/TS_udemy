var title = /** @class */ (function () {
    function title(title) {
        this.title = title;
    }
    title.prototype.showtitle = function () {
        return "seu titulo \u00E9 ".concat(this.title);
    };
    return title;
}());
var t1 = new title('banheira de nutella');
console.log(t1.showtitle());
