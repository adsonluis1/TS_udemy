function getkey<T,K extends keyof T>(obj:T,key:K):void{
    console.log(`a chave ${obj[key]} está presente no obj`)
}

const pc = {
    placaM:'b550m',
    placaV:'rtx4080',
    ram:'32gb',
    processador:'r7 5700g'
}

getkey(pc,'ram')
