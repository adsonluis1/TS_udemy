function showpessoas<T>(pessoas:T[]):T[]{
    return pessoas
}

console.log(showpessoas(['adson' , 'anne', 'rafaelle' , 'luis']))

function showcarros<U>(carros:U):U{
    return carros
}

console.log(showcarros({marca:'BMW' , modelo:'m3' , velMax:'300km/h'}))
console.log(showcarros({marca:'Fiat' , modelo:'Touro' , cargaMax:'1 tonelada' , capota:'sim'}))

