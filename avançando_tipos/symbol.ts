// mesmo com o msm valor, usando o sybol ele retorna como diferente
// ma so funciona no javascript es2020
const symbolA:symbol = Symbol('a')
const symbolB:symbol = Symbol('a')

console.log(symbolA === symbolB)