"use strict";
// primeiros passos
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function mydecorator() {
    console.log('iniciando decorator');
    return function (target, properKey, descriptor) {
        console.log('executando decorator');
        console.log(target);
        console.log(properKey);
        console.log(descriptor);
    };
}
class myclass {
    testing() {
        console.log('terminando execução');
    }
}
__decorate([
    mydecorator()
], myclass.prototype, "testing", null);
const myobj = new myclass();
myobj.testing();
// multiplos decorators
function a() {
    console.log('iniciou a');
    return function (target, properKey, descriptor) {
        console.log('realizando');
        console.log(target);
        console.log(properKey);
        console.log(descriptor);
    };
}
function b() {
    console.log('iniciou b');
    return function (target, properKey, descriptor) {
        console.log('terminando b');
        console.log(target);
        console.log(properKey);
        console.log(descriptor);
    };
}
class multioplosDecora {
    start() {
        console.log('acabo');
    }
}
__decorate([
    a(),
    b()
], multioplosDecora.prototype, "start", null);
const newmulti = new multioplosDecora();
newmulti.start();
// class decorator
function destructor(constructor) {
    console.log(constructor);
    if (constructor.name === 'user') {
        console.log('criando usuario');
    }
}
let user = class user {
    constructor(nome) {
        this.nome = nome;
    }
};
user = __decorate([
    destructor
], user);
const adson = new user('adson');
console.log(adson);
