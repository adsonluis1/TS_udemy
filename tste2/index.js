"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function newdata(cria) {
    cria.prototype.Data = new Date();
}
function newid() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newvalor) {
            valor = newvalor.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
let carro = class carro {
    constructor(marca, modelo, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.id = id;
        this.Data = Date();
    }
};
__decorate([
    newid()
], carro.prototype, "id", void 0);
carro = __decorate([
    newdata
], carro);
const newcar = new carro('Fiat', 'Uno', '132');
console.log(newcar);
console.log(newcar.Data);
console.log(newcar.marca);
console.log(newcar.id);
console.log(newcar.modelo);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cheeckvacina() {
    return function (target, key, descriptor) {
        const childfunk = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('cidadão ja foi vacinado');
                return null;
            }
            else {
                return childfunk.apply(this, args);
            }
        };
        return descriptor;
    };
}
let vacina = class vacina {
    constructor() {
        this.vacina = false;
    }
    carta(nome, vacinou) {
        console.log(`o(a) cidadão ${nome} foi vacinado(a) na data: ${this.Data}`);
        this.vacina = vacinou;
    }
};
__decorate([
    cheeckvacina()
], vacina.prototype, "carta", null);
vacina = __decorate([
    newdata
], vacina);
const vacinação = new vacina();
vacinação.carta('adson', false);
function checktam() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newval) {
            if (newval.length > 12) {
                console.log('o maximo de caracteres no user name é 12');
            }
            else {
                valor = newval;
                console.log('user name logado');
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class login {
    constructor(username, senha) {
        this.username = username;
        this.senha = senha;
    }
    show() {
        if (this.username === undefined) {
        }
        else {
            console.log(this);
        }
    }
}
__decorate([
    checktam()
], login.prototype, "username", void 0);
const newlogin = new login('adson12414124314', '1213131');
newlogin.show();
function verificaçãoNome() {
    return function (target, propertyKey) {
        let valor;
        const getter = function () {
            return valor;
        };
        const setter = function (newname) {
            if (newname.length > 4 && newname.length < 16) {
                valor = newname;
                return;
            }
            console.log('o nome tem que ter entre 4 a 16 caracteres');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class conta {
    constructor(login, senha) {
        this.logado = false;
        this.login = login;
        this.senha = senha;
        this.logado = true;
        this.id = Math.floor(Math.random() * 100);
    }
    showconta() {
        console.log(`login: ${this.login}`);
        console.log(`id: ${this.id}`);
        console.log(`logado: ${this.logado}`);
    }
}
__decorate([
    verificaçãoNome()
], conta.prototype, "login", void 0);
const contanova = new conta('adson', 132132131);
console.log(contanova);
contanova.showconta();
