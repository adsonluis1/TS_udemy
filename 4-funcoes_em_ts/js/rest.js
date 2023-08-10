function allsomar() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    console.log(num.reduce(function (valor, total) { return total + valor; }));
}
allsomar(189, 30, 50);
