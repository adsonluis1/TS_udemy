function showtypes(tipos) {
    return "tipos= boolean:".concat(tipos.boolean, " string: ").concat(tipos.string, " number: ").concat(tipos.number);
}
console.log(showtypes({ boolean: true + ' ou false', string: 'string', number: 3 + ' ou `3` ' }));
