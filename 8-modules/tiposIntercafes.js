"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa = /** @class */ (function () {
    function pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    return pessoa;
}());
var p1 = new pessoa('anne', 'rafaelle', 18);
console.log(p1);
