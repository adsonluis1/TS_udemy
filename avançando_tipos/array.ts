// parar dar o tipo de uma array nos usamos []

const array_nomes:string[] = ['adson' , 'luis' , 'anne' , 'rafaelle']

// no ex de cima eu falo que o array_nomes é do tipo array de string ou seja não aceita number no arrey

const array_number:number[] = [10,20,30,40]

// no ex de cima eu falo que o array_nomes é do tipo array de number ou seja não aceita string no arrey

const array_nome2:Array<string>= ['adson' , 'luis' , 'anne' , 'rafaelle']

// o ex de cima é um jeito alternativo (usado mais antigamente)

const array_number2:Array<number>= [10,20,30,40]

// o ex de cima é um jeito alternativo (usado mais antigamente)

console.log(array_nomes)
console.log(array_number)