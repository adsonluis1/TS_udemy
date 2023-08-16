"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mydecoration() {
    console.log('começou');
    return function (target, properKey, descript) {
        console.log('no processo');
        console.log(target);
        console.log(properKey);
        console.log(descript);
    };
}
class myclass {
    show() {
        console.log('terminou');
    }
}
__decorate([
    mydecoration()
], myclass.prototype, "show", null);
const newobj = new myclass();
newobj.show();
// multiplos decoration
function d1() {
    console.log('começouuu d1');
    return function (target, properKey, descript) {
        console.log('no meio d1');
        console.log(target);
        console.log(properKey);
        console.log(descript);
    };
}
function d2() {
    console.log('começouu d2');
    return function (target, properKey, descript) {
        console.log('no meio d2');
        console.log(target);
        console.log(properKey);
        console.log(descript);
    };
}
class teste {
    show() {
        console.log('terminou');
    }
}
__decorate([
    d1(),
    d2()
], teste.prototype, "show", null);
new teste().show();
// decoration com class
function decorationclass(decoration) {
    console.log(decoration);
}
let testeclass = class testeclass {
    constructor(nome) {
        this.nome = nome;
    }
};
testeclass = __decorate([
    decorationclass
], testeclass);
console.log(new testeclass('adson'));
