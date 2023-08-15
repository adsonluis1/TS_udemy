var npc = /** @class */ (function () {
    function npc(nome) {
        this.saudação = function () {
            console.log("ola player");
        };
        this.despedida = function () {
            console.log("adeus player");
        };
        this.nome = nome;
    }
    return npc;
}());
var frederico = new npc('frederico');
console.log(frederico.nome);
frederico.saudação();
frederico.despedida();
