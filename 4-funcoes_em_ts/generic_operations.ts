function showpessoas<T>(pessoas:T[]):T[]{
    return pessoas
}

console.log(showpessoas(['adson' , 'anne', 'rafaelle' , 'luis']))

function showcarros<U>(carros:U):U{
    return carros
}

console.log(showcarros({marca:'BMW' , modelo:'m3' , velMax:'300km/h'}))
console.log(showcarros({marca:'Fiat' , modelo:'Touro' , cargaMax:'1 tonelada' , capota:'sim'}))

// reduzindo os tipos que podem ser usados no generic operations

function maiorOUmenor<T extends string | number>(num1:T , num2:T){
    let numMaior:T
    if(+num1 > + num2){
        numMaior = num1
    }else{
        numMaior = num2
    }
    console.log(`o numero maior é o ${numMaior}`)
}

maiorOUmenor('60', '10')