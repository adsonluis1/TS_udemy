const nome1:string = 'adson'

const nome2:typeof nome1 = 'luis'

// no exemplo eu estou dizendo que o tipo do nome2 vai ser o mesmo do nome1

type x = typeof nome1

// criei um type com o tipo igual o nome1

const nome3:x = 'anne'
