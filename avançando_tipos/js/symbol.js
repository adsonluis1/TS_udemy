// mesmo com o msm valor, usando o sybol ele retorna como diferente
// ma so funciona no javascript es2020
var symbolA = Symbol('a');
var symbolB = Symbol('a');
console.log(symbolA === symbolB);
