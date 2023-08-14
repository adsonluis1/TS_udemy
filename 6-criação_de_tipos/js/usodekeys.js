function getkey(obj, key) {
    console.log("a chave ".concat(obj[key], " est\u00E1 presente no obj"));
}
var pc = {
    placaM: 'b550m',
    placaV: 'rtx4080',
    ram: '32gb',
    processador: 'r7 5700g'
};
getkey(pc, 'ram');
